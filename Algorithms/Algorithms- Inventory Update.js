function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    // combine arr1 and arr2 into a single arr
    const invCombined = [...arr1, ...arr2];
    const invObj = {

    }
    // if invObj (above) has existing item key, update qty, else add new item qty val pair
    invCombined.forEach(([qty, item]) => {
        if (invObj.hasOwnProperty(item)) {
            invObj[item] += qty;
        } else {
            invObj[item] = qty;
        }
    })
    // convert invObj into an arr of pair values
    const invCombinedNew = Object.entries(invObj)
    // flip qty and item positions for each pair values
    const invCombinedFlipped = invCombinedNew.map(([a, b]) => [b, a])
    // alphabetize pair values by item name
    const invCombinedAlpha = invCombinedFlipped.sort((a, b) => {
        if (a[1] > b[1]) return 1;
        if (a[1] < b[1]) return -1;
        return 0;
    });

    return invCombinedAlpha
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
