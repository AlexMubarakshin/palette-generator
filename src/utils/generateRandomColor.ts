export type TColor = {
  r: number;
  g: number;
  b: number;
}

export const generateRandomColor = (): TColor => ({
  r: Math.floor(Math.random() * 255) + 0,
  g: Math.floor(Math.random() * 255) + 0,
  b: Math.floor(Math.random() * 255) + 0,
});