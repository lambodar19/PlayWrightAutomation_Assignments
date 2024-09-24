function gradeCheck(studentScore)
{
    var grade;

    switch (true) {
           case (studentScore >= 95 && studentScore <= 100):
            grade= "A+";
            console.log("Student's grade is A+");
            
            break;

            case (studentScore >= 90 && studentScore <= 95):
            grade= "A";
            console.log("Student's grade is A");
            break;

            case (studentScore >= 80 && studentScore <= 90):
            grade= "B+";
            console.log("Student's grade is B+");
            break;

            case (studentScore >= 70 && studentScore <= 80):
            grade= "B";
            console.log("Student's grade is B");
            break;

            case (studentScore >=30 && studentScore <=69):
            grade= "C";
            console.log("Student's grade is C");
            break;

            case (studentScore <=29):
                grade= "C";
                console.log("Student's grade is F");
                break;

        default:
            grade ='Invalid score'
            console.log("Invalid score entered");
            break;
    }


}


gradeCheck(6.9);