import {FC} from 'react';

import Card from 'components/card';
import {Offer} from 'types/offers';

export type CardListProps = {
  offers: Offer[];
  onListItemHover: (listItemTitle: string) => void;
}

export const CardList: FC<CardListProps> = ({offers, onListItemHover}) => (
  <>
    {offers.map((card) => (
      <Card card={card} key={card.id}
        onListItemHover={onListItemHover}
      />
    ))}
  </>
);

export default CardList;
