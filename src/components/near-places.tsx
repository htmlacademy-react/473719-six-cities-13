import NearPlaceItem from './near-place-item';

function NearPlaces(): JSX.Element {
  return(
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighborhood</h2>
      <div className="near-places__list places__list">
        <NearPlaceItem />
      </div>
    </section>
  );
}

export default NearPlaces;
