var browser= "chrome"
console.log(browser);


const name1 =  (username) => {
    
    console.log(username);
    
}

name1("raj")


const fun = function username(name)
{
    //var name = 'Ram';
   return console.log(name);
    

}

fun('tyi');


function processUserInput(callBack) {
    
    let name = prompt("Please enter name");
    callBack(name)    
    }

    function displayName(name)
    {
        alert(`Hello ${name}`)
    }

    processUserInput(displayName);
