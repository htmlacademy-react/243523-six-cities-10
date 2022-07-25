import {FC} from 'react';
import {Link} from 'react-router-dom';

import {City} from 'types/offers';
import {cities} from 'mocks/cities';

export type CityListProps = {
  currentCity: City;
}

export const CityList: FC<CityListProps> = ({currentCity}) => (
  <ul className="locations__list tabs__list">
    {cities.map((city) => (
      <li key={city.name} className="locations__item">
        <Link to={''} className={`locations__item-link tabs__item ${currentCity === city
          ? 'tabs__item--active'
          : ''}`}
        >
          <span>{city.name}</span>
        </Link>
      </li>
    ))}
  </ul>
);

export default CityList;
