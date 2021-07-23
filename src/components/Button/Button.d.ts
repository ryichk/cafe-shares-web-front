export interface ButtonProps {
  bgColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
