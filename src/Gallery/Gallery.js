import React from "react";
import PropTypes from "prop-types";
import GalleryItem from "../GalleryItem/GalleryItem";
import styles from "./Gallery.module.css";

const Gallery = ({ onOpenModal, onChangeLargeImageUrl, images }) => (
  <ul className={styles.gallery}>
    {images.map(image => (
      <li key={image.pageUrl} className={styles.galleryItem}>
        <GalleryItem
          webformatURL={image.webformatURL}
          likes={image.likes}
          views={image.views}
          comments={image.comments}
          downloads={image.downloads}
          onOpenModal={onOpenModal}
          onChangeLargeImageUrl={() =>
            onChangeLargeImageUrl(image.largeImageURL)
          }
        />
      </li>
    ))}
  </ul>
);

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  onOpenModal: PropTypes.func.isRequired,
  onChangeLargeImageUrl: PropTypes.func.isRequired
};

export default Gallery;
