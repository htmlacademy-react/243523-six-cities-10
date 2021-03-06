import {FC} from 'react';

import Header from 'components/header';
import Footer from 'components/footer';
import FavoriteCard from 'components/favorite-card';
import FavoritesEmpty from 'components/favorites-empty';
import {Offer} from 'types/offers';
import {Titles} from 'types/const';

export type FavoritesProps = {
  offers: Offer[];
}

export const Favorites: FC<FavoritesProps> = ({offers}) => {
  const favoritesPlaces = offers.filter((item: Offer) => item.isFavorite);

  return (
    <div className="page">
      <Header/>
      {favoritesPlaces ?
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">{Titles.FavoriteTitle}</h1>
              {favoritesPlaces &&
                <FavoriteCard favoritesPlaces={favoritesPlaces}/>}
            </section>
          </div>
        </main>
        :
        <FavoritesEmpty/>}
      <Footer/>
    </div>
  );
};

export default Favorites;
