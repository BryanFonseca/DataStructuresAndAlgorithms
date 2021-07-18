let array1 = [1, 2, 3, 4, 5];
let array2 = [0, 2, 4, 6, 8];

function Intersection(array1, array2)
{
  let result = [];

  let hashArray1 = {};
  let hashArray2 = {};
  let arrayPeque = [];

  //inicialmente no se supone que tienen el mismo tamaño
  arrayPeque = array1;
  if(array1.length > array2.length)
  {
    arrayPeque = array2;
  }
  else if(array1.length < array2.length)
  {
    arrayPeque = array1;
  }

  for(let item of array1)
  {
    hashArray1[item] = true;
  }
  for(let item of array2)
  {
    hashArray2[item] = true;
  }

  for(let item of arrayPeque)
  {
    if(hashArray1[item] && hashArray2[item])
      result.push(item);
  }
  return result;
}

console.log(Intersection(array2, array1));
console.log('-------------------------------------')

function ReturnFirstDuplicated(stringArray)
{
  let hashArray = {};

  for(const item of stringArray)
  {
    if(hashArray[item] === undefined)
      hashArray[item] = true;
    else
      return 'item: ' + item + ' is duplicated'   
  }
  console.log(hashArray);
}
console.log(ReturnFirstDuplicated(["a", "b", "c", "d", "c", "e", "f"]));
console.log('-----------------------------------');

function FirstNonDuplicated (somePhrase)
{
  let hashPhrase = {};
  let hashPhrasecount = {};
  for(const item of somePhrase)
  {
    if(hashPhrase[item] === undefined)
    {
      hashPhrase[item] = true;
      hashPhrasecount[item] = 1;
    }
    else
    {
      hashPhrasecount[item] ++;
    }
  }

  for(let i in hashPhrasecount)
  {
    if(hashPhrasecount[i] === 1)
    {
      return i;
    }
  }
}

console.log(FirstNonDuplicated('minimum'));
