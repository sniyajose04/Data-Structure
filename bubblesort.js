function bubblesort(array) {
    let swapped;
    do {
        swapped = false
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i]
                array[i] = array[i + 1]
                array[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
return array
}

const array = [20, -6, 8, 4, -2]

console.log(bubblesort(array))


