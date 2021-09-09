class Node
{
  constructor(value)
  {
    this.value= value;
  }
  setNext(next)
  {
    this.next = next;
  }
  getNext()
  {
    return this.next;
  }
}

class LinkedList
{
  constructor()
  {
    this.start = null;
  }
  passThr()
  {
    if(this.start)
    {
      let current = this.start;
      while(true)
      {
	console.log(current.value);
	if(current.getNext())
	{
	  current = current.getNext();
	  continue;
	}
	break;
      }
    }
  }
  addItem(value)
  {
    if(this.start)
    {
      let current = this.start;
      while(true)
      {
	if(current.getNext())
	{
	  current = current.getNext();
	  continue;
	}
	break;
      }
      current.setNext(new Node(value));
    }
    else
    {
      this.start = new Node(value);
    }
  }
}

let ll = new LinkedList();
ll.addItem(1);
ll.addItem(2);
ll.addItem(3);
ll.addItem(4);
ll.passThr();
console.log('-----------');
ll.addItem(5);
ll.passThr();
console.log('-----------');

function BinarySearch(ar, value)
{
  let len = Math.floor(ar.length / 2);
  console.log(len);
  let copy = [...ar];

  if(copy[len] === value)
  {
    return len;
  }
  if(value > copy[len])
  {
    //se genera subarray de la mitad para la derecha
    copy = copy.slice(value);
    len = Math.floor(copy.length / 2);
    console.log(len);
  }
  else if(value < copy[len])
  {
    //se genera subarray de la mitad para la izquierda
    copy = copy.slice(0, value - 1);
    len = Math.floor(copy.length / 2);
    console.log(len);
  }
  console.log(copy);
}

console.log(BinarySearch([1, 2, 3, 4, 5], 2));
