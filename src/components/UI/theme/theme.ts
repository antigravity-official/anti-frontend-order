export type Color = 'WHITE' | 'LIGHTGREY' | 'GREY' | 'DARKGREY' | 'DARK';

const color: { [key in Color]: string } = {
  WHITE: '#fff',
  LIGHTGREY: '#F5F5F5',
  GREY: '#e6e6e6',
  DARKGREY: '#757575',
  DARK: '#151515',
};

export default { color };
