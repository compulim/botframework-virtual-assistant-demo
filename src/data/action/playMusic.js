export const PLAY_MUSIC = 'AUDIO/PLAY_MUSIC';

export default function (targetSong) {
  return {
    type: PLAY_MUSIC,
    payload: {
      targetSong
    }
  };
}