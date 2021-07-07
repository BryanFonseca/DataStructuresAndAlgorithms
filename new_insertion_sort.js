/*The worst case scenario is not the only situation worth considering*/

let array3 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
function myInsertionSort(list)
{
  for(let i = 1; i < list.length; i++)
  {
    let temp_value = list[i];
    let mainGapIndex = i;
    for(let j = i - 1; j >= 0; j--)
    {
      if(list[j] > temp_value)
      {
	list[mainGapIndex] = list[j];
	mainGapIndex = j;
      }
      else
	break;
    }
    list[mainGapIndex] = temp_value;
  }
  return list;
}

function insertionSort_book(list)
{
  for(let i = 1; i < list.length; i++)
  {
    let temp_value = list[i];
    let position = i - 1;

    while(position >= 0)
    {
      if(list[position] > temp_value)
      {
	list[position + 1] = list[position];
	position = position - 1;
      }
      else
	break;
    }
    list[position + 1] = temp_value;
  }
  return list;
}
console.log(myInsertionSort(array3));

