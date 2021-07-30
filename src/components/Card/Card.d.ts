export interface CardProps {
  name: string;
  imageURL: {
    modile: {
      l: string;
      s: string;
    };
    pc: {
      l: string;
      m: string;
      s: string;
    };
  };
  catchCopy: string;
  area: string;
}
