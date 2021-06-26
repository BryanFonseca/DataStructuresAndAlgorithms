let orderedArray = [1, 3, 5, 7, 12, 18]

console.log(linear_search(orderedArray, 3));

function linear_search(array, search_value)
{
    //will return -1 if the search_value is not found in the array
    for(let i = 0; i < array.length; i++)
    {
        if(array[i] === search_value)
        {
            return i;
        }
        else if(array[i] > search_value)
            break;
    }    
    return -1;
}