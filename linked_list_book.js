class Node
{
  constructor(data)
  {
    this.data = data;
  }
}
class LinkedList
{
  constructor(first_node)
  {
    this.first_node = first_node;
    this.next_node = null;
  }
  read(index)
  {
    let currentIndex = 0;
    let currentNode = this.first_node;

    while(currentIndex < index)
    {
      if(currentNode.next_node)
      {
	currentNode = currentNode.next_node;
	currentIndex++;
	continue;
      }
      return -1;
    }
    return currentNode.data;
  };
  search(value)
  {
    let currentIndex = 0;
    let currentNode = this.first_node;

    while(currentNode.data != value)
    {
      if(currentNode.next_node)
      {
	currentNode = currentNode.next_node;
	currentIndex++;
	continue;
      }
      return -1;
    }
    return currentIndex;
  }
  insertAtIndex(index, value)
  {
    let currentIndex = 0;
    let currentNode = this.first_node;
    let nodeToInsert = new Node(value);
    if(index === 0)
    {
      this.first_node = nodeToInsert;
      nodeToInsert.next_node = currentNode;
      return;
    }
    while(currentIndex < index - 1)
    {
      if(currentNode.next_node)
      {
	currentNode = currentNode.next_node;
	currentIndex++;
	continue;
      }
      return;
    }
    if(currentNode.next_node)
    {
      let nextToCurrent = currentNode.next_node;
      nodeToInsert.next_node = nextToCurrent;
    }
    currentNode.next_node = nodeToInsert;
  }
}

let node_1 = new Node("once");
let node_2 = new Node("upon");
let node_3 = new Node("a");
let node_4 = new Node("time");

node_1.next_node = node_2;
node_2.next_node = node_3;
node_3.next_node = node_4;

let list = new LinkedList(node_1);
console.log(list.read(0));
console.log(list.search(""));
list.insertAtIndex(0, "hola");
console.log(list.read(0));
