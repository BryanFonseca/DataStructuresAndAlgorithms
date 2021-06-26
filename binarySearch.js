function binary_search(array, search_value) {
    let lower_bound = 0;
    let upper_bound = array.length - 1;

    while (lower_bound <= upper_bound) {
        let midpoint = Math.floor((upper_bound + lower_bound) / 2);
        let valueAtMidpoint = array[midpoint];

        if (search_value == valueAtMidpoint) {
            return midpoint;
        }
        else if (search_value < valueAtMidpoint) {
            upper_bound = midpoint - 1;
        }
        else if (search_value > valueAtMidpoint) {
            lower_bound = midpoint + 1;
        }
    }
    return -1;
}

let orderedArray = [1, 2, 5, 7, 8, 10, 23, 14, 15, 17];
console.log(binary_search(orderedArray, 7));