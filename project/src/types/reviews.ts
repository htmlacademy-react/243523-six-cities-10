export type Reviews = {
  id: number,
  name: string,
  image: string,
  description: string,
  price: number,
  currency: string,
  status?: string,
};

export type Review = {
  id: number,
  name: string,
  text: string,
  date: string;
};
