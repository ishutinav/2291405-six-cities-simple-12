import CardGalleryItem from '../card-gallery-item/card-gallery-item';

type CardGalleryProps = {
  images: string[];
}

function CardGallery({images}: CardGalleryProps): JSX.Element {

  const cardGalleryItems = images.slice(0, 6).map((img) => (
    <CardGalleryItem key={img} img={img} />
  ));

  return (
    <div className="property__gallery">
      { cardGalleryItems }
    </div>
  );
}

export default CardGallery;
