import {FC} from 'react';

import Header from 'components/header';
import Footer from 'components/footer';
import FavoriteCard from 'components/favorite-card';
import {Offer} from 'types/offers';

export type FavoritesProps = {
  offer: Offer[];
}

export const Favorites: FC<FavoritesProps> = ({offer}) => {
  const favoritesPlaces = offer.filter((item: Offer) => item.isFavorite);
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {favoritesPlaces &&
              <FavoriteCard favoritesPlaces={favoritesPlaces}/>}
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Favorites;
