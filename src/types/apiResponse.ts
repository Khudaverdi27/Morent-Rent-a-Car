export type apiResponseBanner = {
  id: number;
  title: string;
  text: string;
  img: {
    main: string;
    view: [];
  };
  bgPattern: string;
  classname: string;
};
export type apiResponsePopulars = {
  id: number;
  name: string;
  type: string;
  gas: string;
  control: string;
  seats: string;
  price: number;
  isDiscount: number | boolean;
  img: {
    main: string;
    view: [];
  };
  star: number;
  review: number;
};
