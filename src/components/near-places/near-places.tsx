import { NearPlacesProps } from '../../types';
import NearPlaceItem from '../near-place-item/near-place-item';

function NearPlaces(nearPlacesProps: NearPlacesProps): JSX.Element {

  const {places, setChosenCard} = nearPlacesProps;
  return(
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighborhood</h2>
      <div className="near-places__list places__list">
        {places.map((place)=> (<NearPlaceItem key={place.id} {...place} handleHover= {() => setChosenCard(place.id)} handleLeave= {()=> setChosenCard(null)}/>))}
      </div>
    </section>
  );
}

export default NearPlaces;
