import type { CafeDetailProps } from '../CafeDetail/CafeDetail';

export interface CardProps extends CafeDetailProps {
  loading: boolean;
  genre: string;
  area: string;
}
