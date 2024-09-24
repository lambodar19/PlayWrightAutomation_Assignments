function checkNumberType(number)
{
    var number;

    if (number>0)
    {
        console.log("The given number "+number+" is a positive number");
        
    }

    else if (number<0)
        {
            console.log("The given number "+number+" is a negative number");
            
        }

        else if (number ==0)
        {
            console.log("The given number "+number+" is zero");
        }

        
}

checkNumberType(0);