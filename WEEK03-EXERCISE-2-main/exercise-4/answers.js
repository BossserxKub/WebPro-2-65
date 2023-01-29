function mapToSquare (input) {
    var input2 = input.map(myFunction)
    function myFunction(value, index, array) {
        if (value % 2 == 0) {
            return value ** 2
        }
        else{
            return value
        }
    }
    return input2
}

function convertTemperature (input) {
    var input2 = input.map(myEx)
    function myEx(value, index, array) {
       return  {
            "date": value.date,
            "temperature": fah_to_celsius(value.temperature)
          }
        
    }
    return input2
    // TODO: ให้แปลงอุณหภูมิจาก °F เป็น °C โดยใช้ฟังก์ชัน .map()
    function fah_to_celsius (fah) {
        let cel = (fah - 32) * 5 / 9
        return Number(cel.toFixed(1))
    }
}

function filterEvenNumber (input) {
    var input2 = input.filter(myFunction)
    function myFunction(value, index, array) {
        return (value % 2 == 0)
    }
    return input2   
}

function filterAgeRange (input) {
    var input2 = input.people.filter(myFunction)
    function myFunction(value, index, array) {
        return (value.age >= input.min && value.age <= input.max)
    }
    return input2   
}

function removeByFilter (input) {
    var input2 = input.people.filter(myFunction)
    function myFunction(value, index, array) {
        return (input.removeId != value.id)
    }
    return input2 
}

function replaceBySplice (input) {
     input.splice(4, 1, 4)
     input.splice(0, 0, 27)
     return input
    
}
