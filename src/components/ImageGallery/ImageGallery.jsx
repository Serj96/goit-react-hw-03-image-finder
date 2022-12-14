import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export default function ImageGallery({ images, openModal }) {
  return (
    <Gallery className="gallery">
      {images.map(({ id, webformatURL }, index) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          index={index}
          openModal={openModal}
        />
      ))}
    </Gallery>
  );
}

ImageGallery.propTypes = {
  openModal: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};
