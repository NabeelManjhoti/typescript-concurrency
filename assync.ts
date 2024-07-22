// function washing(callback: () => void){
//     console.log("Washing Started...")
//     setTimeout(function(){
//         console.log("Washing done");
//         callback();
//     }, 5000);
// };

// function soaking(callback:() => void){
//     console.log("Soaking Started...");
//     setTimeout(() => {
//         console.log("Soaking done");
//         callback();
//     },3000);
// };

// function drying(){
//     console.log("Drying started...");
//     setTimeout(() => {
//         console.log("Drying done");
//     },2000);
// };

// console.log("Folding clothes");

// washing(() => {
//     soaking(() => {
//         drying();
//     });
// });

// console.log("Making biryani");

function washing(){
    console.log("Washing Started...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Washing Done");
        }, 5000);
    });
};

function soaking(){
    console.log("Soaking Started...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Soaking Done");
        }, 3000);
    });
};

function drying(){
    console.log("Drying Started...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Drying Done")
        }, 2000);
    });
};

// washing()
// .then((value) => {
//     console.log(value);
//     return soaking();
// })
// .then((value) => {
//     console.log(value);
//     return drying();
// })
// .then((value) => {
//     console.log(value);
// })
// .catch((error) => {
//     console.log(error);
// });

async function runWashingMachine(){
    try {
        const result1 = await washing();
        console.log(result1);

        const result2 = await soaking();
        console.log(result2);

        const result3 = await drying();
        console.log(result3);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Clothes washing process done sucessfully!")
    };
};
runWashingMachine();