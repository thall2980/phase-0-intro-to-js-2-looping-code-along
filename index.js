const array = ["Guadalupe", "Ollie", "Aki"];
const eventName = "surprise"

function writeCards(array, eventName) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let message = `Thank you, ${array[i]}, for the wonderful ${eventName} gift!`;
        newArray.push(message);
    }

    return newArray;
}

console.log(writeCards(array, eventName));


function countDown(number) {
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown--);
    }
}