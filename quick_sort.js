class SortableArray
{
  constructor(...arr)
  {
    this.array = new Array(...arr)
  }
  disp()
  {
    console.log(this.array);
  }
  partition(letftPointer, rightPointer)
  {
    let pivotIndex = rightPointer;
    let pivot = this.array[pivotIndex];
    rightPointer--;

    while(true)
    {
      while(this.array[letftPointer] < pivot)
      {
	letftPointer++;
      }
      while(this.array[rightPointer] > pivot)
      {
	rightPointer--;
      }
      if(letftPointer >= rightPointer)
	break;
      else
      {
	[this.array[letftPointer], this.array[rightPointer]] = [this.array[rightPointer], this.array[letftPointer]];
	letftPointer++;
      }
    }
    [this.array[leftPointer], this.array[pivotIndex]] = [this.array[pivotIndex], this.array[leftPointer]];
    return leftPointer;
  }
}

let arr = new SortableArray(4, 5, 2, 3, 1, 6);
arr.partition();
arr.disp();
