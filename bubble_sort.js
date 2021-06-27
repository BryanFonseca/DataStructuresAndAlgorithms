function bubble_sort(list)
{
    let unsorted_until_inex = list.length - 1;
    let last_swap = 0;
    let sorted = false;

    let steps = 0;

    while (!sorted)
    {
        sorted = true;
        for(let i = 0; i < unsorted_until_inex; i++)
        {
            steps++;
            if(list[i] > list[i + 1])
            {
                let swap = list[i];
                list[i] = list[i + 1];
                list[i + 1] = swap;
                sorted = false;
                last_swap = i + 1;                                
            }
        }
        unsorted_until_inex = last_swap;
    }    
    console.log(`My bubble sort: ${steps}`);
    return list;
}

function bubble_sort_in(list)
{
    let unsorted_until_inex = list.length - 1;
    let sorted = false;

    let steps = 0;

    while (!sorted)
    {
        sorted = true;
        for(let i = 0; i < unsorted_until_inex; i++)
        {
            steps++;                
            if(list[i] > list[i + 1])
            {
                let swap = list[i];
                list[i] = list[i + 1];
                list[i + 1] = swap;
                sorted = false;                
            }
        }
        unsorted_until_inex--;
    }
    console.log(`Book's bubble sort: ${steps}`);
    return list;
}

bubble_sort_in([3, 2, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9])
bubble_sort([3, 2, 1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9])