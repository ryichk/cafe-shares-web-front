import type { CafeDetailProps } from '../CafeDetailModal/CafeDetail';

export interface CardProps extends CafeDetailProps {
  loading: boolean;
  genre: string;
  area: string;
}
