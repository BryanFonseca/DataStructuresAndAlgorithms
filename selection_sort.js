let arreglo = [9, 8, 4, 3, 2, 1, 3, 6, 8, 5, 4, 7, 6, 5, 4, 2, 3, 1]

function selection_sort(list)
{
    let sorted = 0;
    let min_sorted_index = 0;
    
    while(!sorted)
    {
        let index_less_so_far = min_sorted_index;
        for(let i = min_sorted_index; i < list.length; i++)
        {
            if(list[i + 1] < list[index_less_so_far])
            {
                index_less_so_far = i + 1;
            }
        }
        if(min_sorted_index != index_less_so_far)
        {
            let swap_helper = list[min_sorted_index];
            list[min_sorted_index] = list[index_less_so_far];
            list[index_less_so_far] = swap_helper;
        }        
        if((list.length - 1) - (min_sorted_index - 1) == 1)
        {
            if(list[min_sorted_index - 1] < list[list.length - 1])
                sorted = true;
        }
        min_sorted_index++;
    }
    return list;
}

console.log(selection_sort(arreglo));