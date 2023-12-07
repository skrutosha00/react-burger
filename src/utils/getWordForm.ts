export default function getWordForm(num: number, wordForms: string[]) {
  let word = "";
  if (num % 10 === 1 && num % 100 !== 11) {
    word = wordForms[0];
  } else if (
    num % 10 >= 2 &&
    num % 10 <= 4 &&
    (num % 100 < 10 || num % 100 >= 20)
  ) {
    word = wordForms[1];
  } else {
    word = wordForms[2];
  }
  return word;
}
