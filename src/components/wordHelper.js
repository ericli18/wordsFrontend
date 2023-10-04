import dayjs from 'dayjs';

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const randomWord = (words, date) => {
  if (!words || words.length === 0) {
    return null;
  }
  const accessedWord = words.find(word => word.accessDate === date);
  return words[randomNum(0, words.length - 1)];
}