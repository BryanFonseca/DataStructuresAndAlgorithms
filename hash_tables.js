//for every 7 data elements stored in a hash table, it should have 10 cells
//this ratio of datat to cells is called the "load factor", so an ideal load factor would be 0.7 (7 elements / 10 cells)

let arrayPadre = [2, 3, 4, 5, 6, 1]
let subArray = [3, 5, 2, 6];

function IsSubArray(padre, hijo)
{
  for(let i = 0; i < hijo.length; i++)
  {
    let bool = false;
    for(let j = 0; j < padre.length; j++)
    {
      if(hijo[i] === padre[j])
      {
	bool = true;
	break;
      }
    }
    if(!bool)
      return false;
  }
  return true;
}

console.log(IsSubArray(arrayPadre, subArray));
