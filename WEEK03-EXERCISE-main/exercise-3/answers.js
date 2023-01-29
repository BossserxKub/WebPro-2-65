function getDayName (input) {
    daysInWeek = ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์']
    return daysInWeek[input]
}

function formatDate (input) {
    let ans = input.year + 543
    daysInWeek = ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์']
    monthInYear = [ "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม", ]
    return daysInWeek[input.day] + 'ที่ ' + input.date+ ' ' + monthInYear[input.month]+' พ.ศ. ' + ans

}

function findTotal (input) {
    var sum = input.reduce(myFunction)
    function myFunction(total , value, index, Array) {
        return total + value
    }
    return sum
}