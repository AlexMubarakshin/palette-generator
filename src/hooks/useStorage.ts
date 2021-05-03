import { useEffect, useState } from 'react'

import { TPalette } from '../utils/generateRandomPalette';
import { paletteToTrainingData } from '../utils/paletteToTrainingData';

const PREFIX_STORAGE_KEY = '@palette_'

const TRAINING_DATA_STORAGE_KEY = `${PREFIX_STORAGE_KEY}_training_data`;

export const useStorage = () => {
  const [data, setData] = useState<{ input: number[], output: number[] }[]>([]);

  const loadData = () => {
    const stringData = window.localStorage.getItem(TRAINING_DATA_STORAGE_KEY);
    const loadedData = stringData ? JSON.parse(stringData) : [];

    setData(loadedData)

    return loadedData;
  };

  const saveData = (palette: TPalette, score: number) => {
    const input = paletteToTrainingData(palette);

    data.push({
      input,
      output: [score]
    });

    window.localStorage[TRAINING_DATA_STORAGE_KEY] = JSON.stringify(data)

    setData(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    data,
    saveData,
    loadData,
  } as const;
}