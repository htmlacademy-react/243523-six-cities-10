import {FC} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import {Offer} from 'types/offers';
import {AppRoute, paramPattern} from 'types/const';

export type CardProps = {
  handleClick: (id: string) => void;
  card: Offer;
}

const Card: FC<CardProps> = ({handleClick, card}) => {
  const transformRoute = (uri: string, value?: string): string => uri.replace(paramPattern, value || '');
  const navigateTo = useNavigate();

  const handleMoveToActive = () => {
    handleClick(card.id);
    navigateTo(transformRoute(`${AppRoute.Room}/${card.id}`));
  };

  return (
    <article className="cities__card place-card" onClick={handleMoveToActive}>
      {card.status &&
        <div className="place-card__mark">
          <span>{card.status}</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={''}>
          <img className="place-card__image" src={card.image} width="260" height="200" alt=' '/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{card.currency}{card.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">{card.rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={(transformRoute(`${AppRoute.Room}/${card.id}`))}>{card.description}</Link>
        </h2>
        <p className="place-card__type">{card.type}</p>
      </div>
    </article>
  );
};
export default Card;
