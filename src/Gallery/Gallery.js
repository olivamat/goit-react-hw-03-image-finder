import React from "react";
import PropTypes from "prop-types";
import GalleryItem from "../GalleryItem/GalleryItem";
import styles from "./Gallery.module.css";

const Gallery = ({ onOpenModal, onChangeLargeImageUrl, images }) => (
  <div>
    <ul className={styles.gallery}>
      {images.map(image => (
        <li key={image.id} className={styles.galleryItem}>
          <GalleryItem
            {...image}
            onOpenModal={onOpenModal}
            onChangeLargeImageUrl={() =>
              onChangeLargeImageUrl(image.largeImageURL)
            }
          />
        </li>
      ))}
    </ul>
  </div>
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
