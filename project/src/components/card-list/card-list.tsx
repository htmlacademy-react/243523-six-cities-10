import {FC} from 'react';

import Card from 'components/card';
import {Offer} from 'types/offers';

export type CardListProps = {
  offer: Offer[];
  handleClick: (id: string) => void;
}

export const CardList: FC<CardListProps> = ({offer, handleClick}) => (
  <>
    {offer.map((card, id) => {
      const keyValue = `${id} - ${card.id}`;
      return (
        <Card card={card} key={keyValue}
          handleClick={handleClick}
        />
      );
    })}
  </>
);

export default CardList;
