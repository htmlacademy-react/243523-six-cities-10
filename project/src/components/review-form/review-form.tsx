import {ChangeEvent, FC, FormEvent, useState} from 'react';

import RatingStar from 'components/rating-star';
import {RatingStarTitles} from 'mocks/reviews';

export const ReviewForm: FC = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [isEnabledSubmit, setEnabledSubmit] = useState(false);

  const handleChange = ({target}: ChangeEvent<HTMLTextAreaElement>): void => {
    setReview(target.value);
    if (target.value.length >= 50) {
      setEnabledSubmit(true);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setReview(review);
    setRating(rating);
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RatingStarTitles.map((item) => (
          <RatingStar
            key={item.id}
            ratingTitle={item.title}
            rating={item.id}
            isChecked={rating === item.id}
            handleChange={(star: number) => setRating(star)}
          />
        )).reverse()}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" value={review}
        placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isEnabledSubmit}
          onSubmit={handleSubmit}
        >Submit
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
