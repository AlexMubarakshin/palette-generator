import { TPalette } from './generateRandomPalette';

import { roundColorForTraining } from './round';

export const paletteToTrainingData = (palette: TPalette): number[] => palette.map((item) => [roundColorForTraining(item.r), roundColorForTraining(item.g), roundColorForTraining(item.b)]).flat();