export type Color = {
  black: string;
  white: string;
  primary: string;
  secondary: string;
  placeholder: string;
  meta: string;
  danger: string;
  gray: string;
};

export type Fonts = {
  bold: string;
  regular: string;
};

export type Theme = {
  fonts: Fonts;
  colors: Color;
};
