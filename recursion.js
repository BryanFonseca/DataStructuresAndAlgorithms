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
