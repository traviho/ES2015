// Set([1, 2, 3, 4])

// "ref"

/*
Map({
    [1, 2, 3]: true,
    [1, 2, 3]: false
})
*/

function hasDuplicate(arr) {
    const s = new Set(arr);
    return s.size != arr.length; // if the set is not equal in length, means at least one duplicate was found
}

function vowelCount(str){
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    const vowelCounter = {};
    str = str.toLowerCase();
    Array.from(str).forEach(letter => {
        if (vowels.has(letter)) {
            if (letter in vowelCounter) {
                vowelCounter[letter]++;
            } else {
                vowelCounter[letter] = 1;
            }   
        }
    });
    return vowelCounter;
}
