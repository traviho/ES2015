function filterOutOdds(...args) {
    return args[0].filter(num => num % 2 === 0);
}

function findMin(...nums) {
    return Math.min(...nums);
}

function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
}

function doubleAndReturnArgs(arr, ...nums) {
    nums = nums.map(num => num * 2);
    return [...arr, ...nums];
}

const removeRandom = items => {
    const randIndex = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randIndex), ...items.slice(randIndex)];
}

const extend = (arr1, arr2) => ([...arr1, ...arr2]);

const addKeyVal = (obj, key, val) => ({...obj, ...{[key]: val}});

const removeKey = (obj, key) => {
    const newObj = {...obj};
    delete newObj[key]
    return newObj;
}

const combine = (obj1, obj2) => ({...obj1, ...obj2});

const update = (obj, key, val) => {
    const newObj = {...obj};
    newObj[key] = val;
    return newObj;
}
