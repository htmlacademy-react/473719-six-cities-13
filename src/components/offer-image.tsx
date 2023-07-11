function OfferImage(previewImage: string):JSX.Element {
  return(
    <div className="offer__image-wrapper">
      <img className="offer__image" src={previewImage} alt="Photo studio" />
    </div>
  );
}

export default OfferImage;
