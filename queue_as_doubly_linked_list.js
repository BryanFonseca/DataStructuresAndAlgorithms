class Node
{
  constructor(data)
  {
    this.nextNode = null;
    this.previousNode = null;
    this.data = data;
  }
}
class DoublyLinkedList
{
  constructor(firstNode = null, lastNode = null)
  {
    this.firstNode = firstNode;
    this.lastNode = lastNode;
  }
  InsertAtEnd(data)
  {
    let newNode = new Node(data);
    if(this.lastNode)
    {
      this.lastNode.nextNode = newNode;
      this.lastNode = this.lastNode.nextNode;
      return
    }
    this.firstNode = newNode;
    this.lastNode = newNode;
  }
  RemoveFromStart()
  {
    if(this.firstNode && this.lastNode && (this.firstNode !== this.lastNode))
    {
      let nextToFirst = this.firstNode.nextNode;
      this.firstNode = nextToFirst;
    }
    else 
      this.firstNode = null;
  }
  Print()
  {
    console.log('--------printing--------');
    if(!this.firstNode)
    {
      console.log('Empty Doubly Linked List');
      return;
    }
    let currentNode = this.firstNode;
    while(true)
    {
      console.log(currentNode.data);
      if(!currentNode.nextNode)
      {
	break;
      }
      currentNode = currentNode.nextNode;
    }
    //console.log('--------printing--------');
  }
}
class Queue
{
  constructor()
  {
    this.queue = new DoublyLinkedList();
  }
  Enqueue(data)
  {
    this.queue.InsertAtEnd(data);
  }
  Dequeue()
  {
    this.queue.RemoveFromStart();
  }
  Print()
  {
    this.queue.Print();
  }
}
let a = new Node('Hola');
let b = new Node('Como');
let c = new Node('Estas');
a.nextNode = b;
b.nextNode = c;
let dll = new DoublyLinkedList(a, b);
dll.InsertAtEnd("?");
dll.Print();

let dll1 = new DoublyLinkedList();
dll1.Print();
dll1.InsertAtEnd('hola');
dll1.Print();
dll1.InsertAtEnd('cómo');
dll1.Print();
dll1.InsertAtEnd('estás?');
dll1.Print();
dll1.RemoveFromStart();
dll1.Print();
dll1.RemoveFromStart();
dll1.Print();
dll1.RemoveFromStart();
dll1.Print();

let q = new Queue();
q.Enqueue('hola');
q.Enqueue('Cómo');
q.Enqueue('Me');
q.Print();
q.Dequeue();
q.Print();
