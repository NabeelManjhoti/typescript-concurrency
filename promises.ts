// const promise = new Promise((resolve, reject) => {
//     resolve("Sucess");
// });

// promise.then(value => {
//     console.log(value);
// });
//promise.catch(error => {
//  console.log("Failure")
//});

const returnMoney = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Failed");
    }, 5000);
});

returnMoney.then((value) => {
    console.log(value);
    console.log("Thanks for returning money");
})
.catch((error) => {
    console.log(error);
    console.log("Sorry, I can't return your money");
})
.finally(() => {
    console.log("Ainda pese nahin dunga");
});