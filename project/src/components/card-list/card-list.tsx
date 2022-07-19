import {FC} from 'react';

import Card from 'components/card';
import {Offer} from 'types/offers';

export type CardListProps = {
  offer: Offer[];
}

export const CardList: FC<CardListProps> = ({offer}) => (
  <>
    {offer.map((card, id) => {
      const keyValue = `${id} - ${card.id}`;
      return (
        <Card card={card} key={keyValue}/>
      );
    })}
  </>
);

export default CardList;
