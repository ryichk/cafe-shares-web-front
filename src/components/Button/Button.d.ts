export interface ButtonProps {
  btnColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
