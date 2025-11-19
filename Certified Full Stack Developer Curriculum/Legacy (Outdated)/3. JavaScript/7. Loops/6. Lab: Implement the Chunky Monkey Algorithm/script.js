function chunkArrayInGroups(arr, num) {

    const result = [];

    for (let i = 0; i < arr.length; i += num) {

        result.push(arr.slice(i, i + num))

    }
    return result

}


console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))


console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3))