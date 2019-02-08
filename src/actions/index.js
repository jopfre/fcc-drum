import { PLAY_SAMPLE, PAUSE_SAMPLE, DISPLAY_SAMPLE } from './types';

export const playSample = sample => ({
  type: PLAY_SAMPLE,
  sample: sample
});

export const pauseSample = sample => ({
  type: PAUSE_SAMPLE,
  sample: sample
});

export const displaySample = sample => ({
  type: DISPLAY_SAMPLE,
  sample: sample
});