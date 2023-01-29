function convertADtoBE(input) {
    let ans = input + 543
    if (input > 543) {
        return "พ.ศ. " + ans
    }
    else{
        
        return "ไม่ถูกต้อง"
    }
}

function evenOrOdd(input) {
  if (input % 2 == 0) {
    return "even"
  }
  else if(input % 2 != 0) {
    return "odd"
  }
}

function getFullName(input) {
    // const myObj = input
    if ( input.sex == 'male') {
        return "Mr. " + input.firstName + " " + input.lastName;
    }
    else if (input.sex == 'female') {
        return "Ms. " + input.firstName + " " + input.lastName;
    }
}

function getFirstName(input) {
    // return input.indexOf(" ")
    return input.substring(0, input.indexOf(" "))
}