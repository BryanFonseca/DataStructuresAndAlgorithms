//counter example

/*
function CountDown(number)
{
  console.log(number);
  CountDown(number - 1);
}
*/

//this shit will never end
//
//the base case MUST ALWAYS be implemented for prevent things to call themselves indefinitely

function sum (low, high)
{
  /*
  if(high !== low)
    return high + sum(low, high - 1);
  else
    return 1;
    */
  if(high === low)
  {
    return low;
  }
  return high + sum(low, high - 1);
}

console.log(sum(1, 10));
console.log('----------------------------------');

let array = 
  [
    1,
    2,
    3,
    [4, 5, 6],
    7,
    [8,
      [9, 10, 11,
	[12, 13, 14]
      ]
    ],
    [15, 16, 17, 18, 19,
      [20, 21, 22,
	[23, 24, 25,
	  [26, 27, 29]
	], 30, 31
      ], 32
    ], 33
  ]

function RecursivePrint(array)
{
  for(let item of array)
  {
    if(typeof(item) == "object")
    {
      RecursivePrint(item);
    }
    else
      console.log(item);
  }
}

RecursivePrint(array);

let arr = [2, 3, 4, 5];

function RecursiveDouble(array, index = array.length - 1)
{
  if(index < 0)
  {
    return;
  }
  array[index] *= 2;
  RecursiveDouble(array, index - 1);
}

RecursiveDouble(arr);
console.log(arr);
console.log('---------------------');
//What's great about top-down thinking: in a way, we can solve a problem without even knowing how to solve the problem

//Counting Xs

let string = 'xbxcxdxxx'
function CountXs(string)
{
  if(string.length === 0)
  {
    return 0;
  }
  if(string[0] === 'x')
  {
    return CountXs(string.substring(1)) + 1
  }
  else 
  {
    return CountXs(string.substring(1))
  }
}

console.log(CountXs(string));
console.log('---------------');

let toEvensOnly = [1, 2, 3, 4, 5, 6];
function EvensOnly(arr)
{
  if(arr.length === 0)
  {
    return [];
  }
  if(arr[0] % 2 === 0)
  {
    return Array.prototype.concat(arr[0], EvensOnly(arr.slice(1)));
  }
  return Array.prototype.concat(EvensOnly(arr.slice(1)));
}

console.log(EvensOnly(toEvensOnly));

// if TriangularNumbers(3) -> 6
function TriangularNumbers(N)
{
  if(N === 0)
  {
    return 0;
  }
  return N + TriangularNumbers(N - 1); 
}

console.log(TriangularNumbers(7));
console.log('--------------');

function FirstIndexX(str, index = 1)
{
  if(str.length === 0)
  {
    return -1;
  }
  else if(str[0] === 'x')
  {
    return 1;
  }
  return FirstIndexX(str.slice(1), index + 1) + 1;
}

let str = 'axdghdjeirufhdsj';
console.log(FirstIndexX(str));
