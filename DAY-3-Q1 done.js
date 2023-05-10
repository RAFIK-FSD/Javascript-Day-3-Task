// How to compare two JSON have the same properties without order?

let obj1 = {name: "person1", age: 5};
let obj2 = {age: 5, name: "person1"};


if (isSame(Object.keys(obj1), Object.keys(obj2))) {
    console.log("same keys")
} else {
    console.log("different keys")
}

function isSame (keys1, keys2) {
    for (let key of keys1) {
        // console.log(key) // e.x
        if (!keys2.includes(key)) return false
    }
    for (let key of keys2) {
        if (!keys1.includes(key)) return false
    }
    return true
}