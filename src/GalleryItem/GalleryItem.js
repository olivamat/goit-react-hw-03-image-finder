import React from "react";
import PropTypes from "prop-types";
import styles from "./GalleryItem.module.css";

const GallleryItem = ({
  onOpenModal,
  onChangeLargeImageUrl,
  webformatURL,
  likes,
  views,
  comments,
  downloads
}) => {
  return (
    <div>
      <img className={styles.galleryItemImage} src={webformatURL} alt="img" />
      <div className={styles.stats}>
        <p className={styles.statsItem}>
          <i className="material-icons">thumb_up</i>
          {likes}
        </p>
        <p className={styles.statsItem}>
          <i className="material-icons">visibility</i>
          {views}
        </p>
        <p className={styles.statsItem}>
          <i className="material-icons">comment</i>
          {comments}
        </p>
        <p className={styles.statsItem}>
          <i className="material-icons">cloud_download</i>
          {downloads}
        </p>
      </div>
      <button
        onClick={onOpenModal}
        onMouseUp={onChangeLargeImageUrl}
        type="button"
        className={styles.fullscreenButton}
      >
        <i className="material-icons">zoom_out_map</i>
      </button>
    </div>
  );
};

GallleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  onChangeLargeImageUrl: PropTypes.func.isRequired
};

export default GallleryItem;
