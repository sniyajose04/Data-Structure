// class Node{
//     constructor() {
//         this.childern = {}
//         this.isEndOfWord = false
//     }
// }


// class Trie{
//     constructor() {
//         this.root = new Node()
//     }


//     insert(word) {
//         let node = this.root
//         for (let char of word) {
//             if (!node.childern[char]) {
//                 node.childern[char] = new Node()
//             }
//             node = node.childern[char]
//         }
//         node.isEndOfWord = true
//     }

//     search(word) {
//         let node = this.root
//         for (let char of word) {
//             if (!node.childern[char]) {
//                 return false
//             }
//             node = node.childern[char]
//         }
//         return node.isEndOfWord
//     }


//     startWith(prefix) {
//         let node = this.root
//         for (let char of prefix) {
//             if (!node.childern[char]) {
//                 return false
//             }
//             node = node.childern[char]
//         }
//         return true
//     }
// }

// const trie = new Trie();
  
//   trie.insert("hello");
//   trie.insert("hey");
//   trie.insert("world");
  
//   console.log(trie.search("hello")); // Output: true
//   console.log(trie.search("worlds")); // Output: false
  
//   console.log(trie.startWith("he")); // Output: true
//   console.log(trie.startWith("xyz"));

  class Node{
    constructor(){
        this.childern = {}
        this.isEndOfWord = false
    }
  }

  class Trie{
    constructor(){
      this.root = new Node()
    }
  

  insert(word){
    let node = this.root
    for(let char of word){
        if(!node.childern[char]){
            node.childern[char] = new Node() 
        }
        node = node.childern[char]
    }
    node.isEndOfWord = true
  }

  search(word){
    let node = this.root
    for(let char of word){
        if(!node.childern[char]){
            return false
        }
        node = node.childern[char]
    }
    return node.isEndOfWord
  }
  
startWith(prefix){
    let node = this.root
    for(let char of prefix){
        if(!node.childern[char]){
            return false
        }
      node =  node.childern[char]
    }
    return true
}

}

const trie = new Trie()

trie.insert('you')
trie.insert('are')
trie.insert('my')
trie.insert('love')

console.log(trie.search('are'))

console.log(trie.startWith('yo'))
