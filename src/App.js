import React, { Component } from "react";
import SearchForm from "./SearchForm/SearchForm";
import * as imageAPI from "./servises/image-api";
import Loader from "./Loader/Loader";
import ErrorNotofication from "./ErrorNotofication";
import Gallery from "./Gallery/Gallery";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

export default class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    page: 1,
    isModalOpen: false,
    largeImageURL: null
  };

  fetchImage = ({ query }) => {
    this.setState({ isLoading: true, query, page: 1, error: null });
    const { page } = this.state;
    imageAPI
      .fetchImages(query, page)
      .then(({ data }) => {
        this.setState({ images: data.hits });
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false, query });
      });
  };

  loadMoreImages = () => {
    this.setState({ isLoading: true });
    const pageAdd = this.state.page;
    const { query } = this.state;

    imageAPI
      .fetchImages(query, pageAdd)
      .then(({ data }) => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits]
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false, page: pageAdd + 1 });
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth"
        });
      });
  };

  handleOpenModal = () => this.setState({ isModalOpen: true });

  handleCloseModal = () => this.setState({ isModalOpen: false });

  // handleChangeLargeImageUrl = largeImageURL => this.setState({ largeImageURL });
  handleChangeLargeImageUrl = url => {
    this.setState({ largeImageURL: url });
  };

  render() {
    const { images, isLoading, error, isModalOpen, largeImageURL } = this.state;
    return (
      <div className="App">
        <SearchForm onSubmitForm={this.fetchImage} />
        {isLoading && <Loader />}
        {images.length > 0 && (
          <Gallery
            onOpenModal={this.handleOpenModal}
            images={images}
            onChangeLargeImageUrl={this.handleChangeLargeImageUrl}
          />
        )}
        {images.length > 0 && <Button onLoadMore={this.loadMoreImages} />}
        {error && <ErrorNotofication text={error.message} />}
        {isModalOpen && (
          <Modal onCloseModal={this.handleCloseModal}>
            <img src={largeImageURL} alt="img" />
          </Modal>
        )}
      </div>
    );
  }
}
