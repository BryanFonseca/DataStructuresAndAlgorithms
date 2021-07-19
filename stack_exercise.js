//Used typically to store temporary data and when a LIFO nature is needed

// [()
// // ()]
// ([))

function LintBraces(somePhrase)
{
  let bracesList = [];
  let bracesStack = [];
  let braces = 
    {
      '{' : '}',
      '[' : ']',
      '(' : ')'
    }

  for(let i = 0; i < somePhrase.length; i++)
  {
    if(somePhrase[i] === '{' || somePhrase[i] === '(' || somePhrase[i] === '[' || somePhrase[i] === ']' || somePhrase[i] === ')' || somePhrase[i] === '}')
    {
      bracesList.push(somePhrase[i]);
    }
  }

  for(let item of bracesList)
  {
    if(item === '{' || item === '(' || item === '[') 
    {
      bracesStack.push(item);
    }
    else if(item === '}' || item === ')' || item === ']') 
    {
      let toInspect = item;
      let itemPoped = bracesStack[bracesStack.length - 1];
      if(bracesStack.length !== 0)
      {
	bracesStack.pop();
      }
      else
      {
	return 'Error type 2';
      }

      if(toInspect !== braces[itemPoped])
      {
	return 'Error type 3';
      }
      //successfully paired so far
    }
  }
  if(bracesStack.length !== 0)
  {
    return 'Error type 1';
  }

  return 'String braces are correctly paired';
}

console.log(LintBraces('(var x = {y: [1, 2, 3]})'));
console.log(LintBraces('(var x = {y: [1, 2, 3]}'));
console.log(LintBraces('var x = {y: [1, 2, 3]})'));
console.log(LintBraces('(var x = {y: [1, 2, 3]}}'));
//ctrl + s deletes the content of a line and goes to insert mode
