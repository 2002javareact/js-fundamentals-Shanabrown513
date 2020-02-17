/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
let phone = {
    number: 1234567890,
    type: iphone,
    camera: true
};

function objectProperties(someObj){
    for (let [key, value] of Object.entries((someObj)))
        console.log(`${key}: ${value}`)
}
objectProperties(phone);
