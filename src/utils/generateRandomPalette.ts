import { TColor, generateRandomColor } from './generateRandomColor';

export type TPalette = TColor[];

export const generateRandomPalette = (length = 4): TPalette => Array.from(Array(length)).map(() => generateRandomColor());