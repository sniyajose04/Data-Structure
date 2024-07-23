// class Hashtable {
//     constructor(size) {
//         this.table = new Array(size);
//     }

//     hash(key) {
//         let total = 0;
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i);
//         }
//         return total % this.table.length;
//     }

//     set(key, value) {
//         const index = this.hash(key);
//         this.table[index] = value; // store the value at index
//     }

//     get(key) {
//         const index = this.hash(key);
//         return this.table[index];
//     }

//     remove(key) {
//         const index = this.hash(key);
//         this.table[index] = undefined;
//     }

//     display() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i] !== undefined) {
//                 console.log(i, this.table[i]);
//             }
//         }
//     }
// }

// const table = new Hashtable(50);

// table.set("name", "sniya");
// table.set("age", "25");
// table.display();

// console.log(table.get("name"))
// table.set("mane","clark")
// table.display()

// this time sniya will go and that replaced by clark
//this time collision well happen

// class Hashtable{
//     constructor(size){
//         this.table = new Array(size)
//     }

//     hash(key){
//         let total =0
//         for(let i=0;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return total%this.table.length
//     }

//     set(key,value){
//         const index = this.hash(key)
//         return this.table[index] = value
//     }

//     get(key){
//         const index = this.hash(key)
//         return this.table[index]
//     }

//     remove(){
//         const index = this.hash(key)
//         return this.table[index]=undefined
//     }

//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]!==undefined){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// const table = new Hashtable(50)

// table.set("name","sniya")
// table.set("age","20")
// table.display()

//-----------chaining method------------//

class Hashtable {
    constructor(size) {
        this.table = new Array(size);
        for (let i = 0; i < size; i++) {
            this.table[i] = []; // Initialize each index with an empty array (bucket)
        }
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.table.length;
    }

    set(key, value) {
        const index = this.hash(key);
        const bucket = this.table[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value; // Update the value if key already exists
                return;
            }
        }
        bucket.push([key, value]); // Add new key-value pair if key does not exist
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1]; // Return the value if key is found
            }
        }
        return undefined; // Return undefined if key is not found
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.table[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1); // Remove the key-value pair if key is found.start,delete,insert
                return;
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i].length > 0) { // Check if the bucket is not empty
                console.log(i, this.table[i]);
            }
        }
    }
}

// Example Usage
const table = new Hashtable(50);

table.set("name", "sniya");
table.set("age", "12");
table.display();

console.log(table.get("name"));

table.set("mane", "hello");
table.display();
