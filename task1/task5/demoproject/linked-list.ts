class ListNode<T>{
    next?: ListNode<T>; //we are not sure if is the last node
    constructor(public value: T) {}
}

class LinkedList<T> { //generic class
    private root?: ListNode<T>;
    private tail?: ListNode<T>;
    private length = 0;
    //logic of the list 
    add(value: T ){
        const node = new ListNode(value);
        if(!this.root){
        this.root = node;
        this.tail = node;
        }else{ // i could use also the tail to insert the new node, but looping to the end is okay
            let current = this.root;
            while(current.next){
                current = current.next; //i am going to last node in this way
            }
            current.next = node;

        }
        this.length++;
    }
    //i have to create public methods to access the values from the outside of the scope of this functions
    getNumberOfElements(){
        return this.length;
    }

    print(){
        let current = this.root;
        while(current){
            console.log(current.value);
            current = current.next;
        }
    }
}

const numberList = new LinkedList<number>();
const nameList = new LinkedList<string>();

numberList.add(10);
numberList.add(9);

console.log(numberList.getNumberOfElements());
numberList.print();
