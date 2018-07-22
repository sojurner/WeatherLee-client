import Node from './Node';

export default class Trie {
  constructor() {
    this.root = new Node(null);
    this.wordCount = 0;
  }

  insert(string) {
    let stringToArray = [...string];
    let currentNode = this.root;

    stringToArray.forEach((letter, i, arr) => {
      if (!currentNode.child[letter]) {
        currentNode.child[letter] = new Node(letter);
      } 
      currentNode = currentNode.child[letter];
      if (i === arr.length - 1 && !currentNode.endOfWord) {
        currentNode.endOfWord = string;
        this.wordCount++;
      }
    });
  }

  count() {
    return this.wordCount;
  }

  suggest(word) {
    let currentNode = this.root;
    let arr = [];
    
    for (let i = 0; i < word.length; i++) {
      if (currentNode.child[word[i]]) {
        currentNode = currentNode.child[word[i]];
      }
    }
    this.find(currentNode, arr);
    return arr;
  } 
 
  find(node, arr) {		
    if (node.endOfWord) {
      arr.push(node.endOfWord);
    }
    Object.values(node.child).forEach(node => {
      this.find(node, arr);
    });
  }

  delete(word) {
    let currentNode = this.root;
    
    while(word.length) {
      currentNode = currentNode.child[word[0]];
      word = word.substr(1);
    }
    this.wordCount--;
    currentNode.endOfWord = null;
  }

  populate(dictionary) {
    dictionary.forEach(word => {
      this.insert(word.toLowerCase());
    });
  }
}