//Word Builder

function wordBuilder(array)
{
  let collection = [];
  for(let i = 0; i < array.length; i++)
  {
    for(let j = 0; j < array.length; j++)
    {
      for(let w = 0; w < array.length; w++)
      {
	if(i !== j && j !== w && i !== w)
	{
	  collection.push(array[i] + array[j] + array[w]);
	}
      }
    }
  }
  return collection;
}

//console.log(wordBuilder(['a', 'b', 'c', 'd']));

function sample(array)
{
  let first = array[0];
  let middle = array[Math.floor(array.length/2)];
  let last = array[array.length - 1];

  return [first, middle, last];
}
