setTimeout(doSomething,2000);

function doSomething(){
    console.log("Demonstrating the callbacks");
}
setTimeout(function () {
    console.log("Demonstrating the callbacks");
},3000);

const arrowFunction = () => {
    console.log("Demonstrating the callbacks");
}
setTimeout(arrowFunction, 4000);

console.log("The application is started");