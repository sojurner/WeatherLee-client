export default class Node {
  constructor(letter) {
    this.letter = letter;
    this.endOfWord = null;
    this.child = {};
    this.suggestCount = 0;
  }
}