// ข้อ 2.1

function display(msg) {
    let div = document.getElementById('ex01-div')
    div.innerHTML = msg
}

function showConfirm(callback) {
    if (confirm('ยืนยันไหม???') == true) {
        const ans=  display('ยืนยันจ้า')

    }
    else {
        const ans = display('ไม่ดีกว่า')
    }
    callback(ans)
}


// ข้อ 2.2
function start() {
   setTimeout(() => {
    document.getElementById('start').innerHTML = 'Program started';
    setTimeout(() => {
        document.getElementById('process').innerHTML = 'Hello World';
        setTimeout(() => {
            document.getElementById('end').innerHTML = 'Program ended';
        }, 3000);
    }, 2000);
   },0);
}

// ข้อ 2.3
function stopTime() {
    let time = ~~(document.getElementById("Time").value);
    const setMinute = document.getElementById("setMinute")
    const setSecond = document.getElementById("setSecond")

    let counter = 0;

    setMinute.innerHTML = "00";
    setSecond.innerHTML = "00";

    const clock = setInterval(() => {
        counter += 1;
        checkStop()
    }, 1000)

    const checkStop = () => {
        if (counter > time) {
            clearInterval(clock);
            setMinute.innerHTML = "00";
            setSecond.innerHTML = "00";
        } else {
            setMinute.innerHTML = (Math.floor(counter / 60) < 10 && "0") + Math.floor(counter / 60);
            setSecond.innerHTML = (Math.floor(counter % 60) < 10 && "0") + counter % 60;
        }
    }
}
