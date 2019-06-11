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
    largeImageURL: null,
    query: ""
  };

  loadFirstImages = query => {
    this.setState({ query, page: 1, error: null, images: [] });
    this.fetchImages(query, 1);
  };

  fetchImages = (query, page) => {
    this.setState({ isLoading: true });
    return imageAPI
      .fetchImages(query, page)
      .then(({ data }) => {
        this.setState(state => ({
          images: [...state.images, ...data.hits],
          page: state.page + 1
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false, query });
      });
  };

  loadMoreImages = () => {
    const { query, page } = this.state;

    this.fetchImages(query, page).then(() => {
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
        <SearchForm onSubmitForm={this.loadFirstImages} />
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
