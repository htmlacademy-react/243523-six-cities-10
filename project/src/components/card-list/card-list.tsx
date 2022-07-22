import {FC, useState} from 'react';

import Card from 'components/card';
import {Offer} from 'types/offers';

export type CardListProps = {
  offers: Offer[];
}

export const CardList: FC<CardListProps> = ({offers}) => {
  const [activeCard, setActiveCard] = useState<number>();

  return (
    <>
      {offers.map((card) => (
        <Card card={card} key={card.id} activeCard={activeCard}
          onHover={() => (setActiveCard(card.id))}
        />
      ))}
    </>
  );
};

export default CardList;
