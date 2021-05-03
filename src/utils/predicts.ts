import { generateRandomPalette, TPalette } from './generateRandomPalette';
import { paletteToTrainingData } from './paletteToTrainingData';

export type TPaletteWithPredictScore = { score: number, palette: TPalette }

export type MLData = { input: number[], output: number[] };

export function predictThemeCombinations(trainingData: MLData[]): TPaletteWithPredictScore[] {
  if (!trainingData.length) return [];

  const net = new brain.NeuralNetwork({ activation: 'leaky-relu' });
  const results: TPaletteWithPredictScore[] = []

  net.train(trainingData)

  for (let i = 0; i < 100000; i++) {
    const palette = generateRandomPalette();
    const colors = paletteToTrainingData(palette);

    const [score] = net.run(colors)
    results.push({ score, palette })
  }

  // sort results
  const sortedResults = results.sort((a, b) => b.score - a.score)

  const topResults = [];
  // keep the top 20 results!
  for (let i = 0; i < 20; i++) {
    topResults.push(sortedResults[i])
  }

  return topResults;
}