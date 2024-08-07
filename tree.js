class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class Binarysearchtree{
    constructor(){
        this.root = null
    }
    
    isEmpty(){
        return this.root === null
    }
    
   
   insert(value){
       const newnode = new Node(value)
       if(this.isEmpty()){
           this.root = newnode
       }else{
           this.insertNode(this.root,newnode)
       }
   } 
   
   insertNode(root,newnode){
       if(newnode.value<root.value){
           if(root.left === null){
               root.left = newnode
           }else{
               this.insertNode(root.left,newnode)
           }
       }else{
           if(root.right === null){
               root.right = newnode
           }else{
               this.insertNode(root.right,newnode)
           }
       }
   }
   
   search(root,value){
       if(!root){
          return false 
       }
       if(value === root.value){
           return true
       }else if(value<root.value){
           return this.search(root.left,value)
       }else if(value>root.value){
           return this.search(root.right,value)
       }
   }
   
   preorder(root){
       if(root){
           console.log(root.value)
           this.preorder(root.left)
           this.preorder(root.right)
       }
   }
   
   inorder(root){
       if(root){
           this.inorder(root.left)
           console.log(root.value)
           this.inorder(root.right)
       }
   }
   
   postorder(root){
       if(root){
           this.postorder(root.left)
           console.log(root.value)
           this.postorder(root.right)
       }
   }
   
   min(root){
       if(!root.left){
           return root.value
       }else{
           return this.min(root.left)
       }
   }
   
   max(root){
       if(!root.right){
           return root.value
       }else{
           return this.max(root.right)
       }
   }
   
   secondMin(root){
       if(!root){
           return null
       }
       if(root.right&&!root.left){
           return this.min(root.right)
       }
       let parent = null
       let current = root
       while(current.left){
           parent = current
           current = current.left
       }
       if(root.right){
           return this.min(root.right)
       }else{
           return parent.value
       }
   }
   
   secondMax(root){
       if(!root){
           return null
       }
       if(root.left&&!root.right){
           return this.max(root.left)
       }
       let parent = null
       let current = root
       while(current.right){
          parent = current
          current = current.right
       }
       if(root.left){
           return this.max(root.left)
       }else{
           return parent.value
       }
   }
   
   delete(value){
       this.root = this.deleteNode(this.root,value)
   }
   
   deleteNode(root,value){
       if(root === null){
           return root
       }
       if(value < root.value){
           root.left = this.deleteNode(root.left,value)
       }else if(value>root.value){
           root.right = this.deleteNode(root.right,value)
       }else{
       if(!root.left&&!root.right){
           return null
       }
       if(!root.left){
           return root.right
       }else if(!root.right){
           return root.left
       }
       root.value = this.min(root.right)
       root.right = this.deleteNode(root.right,value)
       }
       return root
   }
   
    closestValue(target) {
        let closest = Infinity;
        let temp = this.root;
        while (temp !== null) {
            if (Math.abs(temp.value - target) < Math.abs(closest - target) ) {
                closest = temp.value;
            }
            if (target < temp.value) {
                temp = temp.left;
            } else if(target>temp.value){
                temp = temp.right;
            }else{
                break
            }
        }
        return closest;
    }

    
    validatebst(){
        let values = []
        this.inorder(this.root,values)
        for(let i=1;i<values.length;i++){
            if(values[i]<=values[i-1]){
                return false
            }
        }
        return true
    }
}

const bst = new Binarysearchtree()

console.log('it is empty',bst.isEmpty())

bst.insert('1')
bst.insert('2')
bst.insert('3')
bst.insert('4')

console.log(bst.search(bst.root,'1'))
console.log(bst.search(bst.root,'2'))
console.log(bst.search(bst.root,'3'))
console.log(bst.search(bst.root,'4'))
console.log(bst.search(bst.root,'5'))

console.log('preorder:')
bst.preorder(bst.root)

console.log('inorder:')
bst.inorder(bst.root)

console.log('postorder:')
bst.postorder(bst.root)

console.log('min value:',bst.min(bst.root))
console.log('max value:',bst.max(bst.root))

console.log('second min value:',bst.secondMin(bst.root))
console.log('second max value:',bst.secondMax(bst.root))

console.log('deletion:')
bst.delete(4)
bst.inorder(bst.root)

console.log('closest value:',bst.closestValue(4))

console.log('validate bst :',bst.validatebst())