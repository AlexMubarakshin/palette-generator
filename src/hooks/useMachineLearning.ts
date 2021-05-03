import React, { useState } from 'react'

import { MLData, predictThemeCombinations, TPaletteWithPredictScore } from '../utils/predicts';

export const useMachineLearning = (trainingData: MLData[] = []) => {
  const [topResults, setTopResults] = useState<TPaletteWithPredictScore[]>([]);

  React.useEffect(() => {
    const predictedResults = predictThemeCombinations(trainingData);

    setTopResults(predictedResults);
  }, [trainingData, trainingData.length]);

  return {
    topResults,
  }
}