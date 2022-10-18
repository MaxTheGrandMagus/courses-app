import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import up from '../../assets/icons/up.svg';
import close from '../../assets/icons/cross-menu.svg';
import menu from '../../assets/icons/menu.svg';

export const icons = {
  up,
  close,
  menu,
};

export type IconName = keyof typeof icons;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearance: 'primary' | 'white';
  icon: IconName;
}