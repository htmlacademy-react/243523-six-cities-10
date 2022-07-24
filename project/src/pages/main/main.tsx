import {FC, useState} from 'react';

import Header from 'components/header';
import CardList from 'components/card-list';
import CitiesMap from 'components/cities-map';
import CityList from 'components/city-list';
import MainEmpty from 'components/main-empty';
import {City, Offer} from 'types/offers';
import {Titles} from 'types/const';

export type MainPageProps = {
  rentalAmount: number;
  offers: Offer[]
  currentCity: City;
}

const Main: FC<MainPageProps> = ({rentalAmount, offers, currentCity}) => {
  const [selectedPoint, setSelectedPoint] = useState<Offer>();

  const onListItemHover = (listItemTitle: string) => {
    const currentOffer = offers.find((offer) => offer.title === listItemTitle);
    setSelectedPoint(currentOffer);
  };

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">{Titles.MainCities}</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList currentCity={currentCity}/>
          </section>
        </div>
        {offers ?
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">{Titles.MainPlaces}</h2>
                <b className="places__found">{rentalAmount} places to stay in {currentCity.title}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex={0}>
                  Popular
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>
                <div className="cities__places-list places__list tabs__content">
                  <CardList offers={offers} onListItemHover={onListItemHover}/>
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <CitiesMap offers={offers} selectedPoint={selectedPoint} currentCity={currentCity}/>
                </section>
              </div>
            </div>
          </div>
          :
          <MainEmpty currentCity={currentCity}/>}
      </main>
    </div>
  );
};

export default Main;
