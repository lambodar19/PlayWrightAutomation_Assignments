function launchBrowser(browserName)
{
    if (browserName=="Chrome")
    {
        console.log("Browser name is: "+browserName);
        
    }

    else if (browserName=="Firefox")
        {
            console.log("Browser name is: "+browserName);
            
        }

        else if (browserName=="Safari")
            {
                console.log("Browser name is: "+browserName);
                
            }
}


launchBrowser('Chrome');


function runTests(testType)
{
    switch (testType) {
        case 'smoke':
            console.log("Smoke Test");
            break;

            case 'sanity':
                console.log("Sanity Test");
                break;

                case 'regression':
                    console.log("Regression Test");
                    break;

        default:
            console.log("Smoke Test");
            break;
    }
}

runTests('regression');