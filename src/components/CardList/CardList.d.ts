interface Photo {
  pc: { l: string };
}

interface CafeInfo {
  name: string;
  photo: Photo;
  catch: string;
  large_area: { name: string };
  middle_area: { name: string };
}

export interface CardListProps {
  loading: boolean;
  cafes: Array<CafeInfo>;
}
