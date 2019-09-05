// ---------------------------------时间-----------------------------------------------------------------------
function getDate() {
    dobj = new Date();
    year = dobj.getFullYear();
    month = dobj.getMonth() + 1; //不能在下面用 month = '0' + month+1代替此处+1;
    if (month < 10) {
        month = '0' + month;
    }
    date = dobj.getDate();
    if (date < 10) {
        date = '0' + date;
    }
    hour = dobj.getHours();
    if (hour < 10) {
        hour = '0' + hour;
    }
    minute = dobj.getMinutes();
    if (minute < 10) {
        minute = '0' + minute;
    }
    second = dobj.getSeconds();
    if (second < 10) {
        second = '0' + second;
    }
    str = year + '/' + month + '/' + date + ' ' +
        hour + ':' + minute + ':' + second;
    sidobj = document.getElementById('sid');
    sidobj.innerHTML = str;
}
getDate(); //改变span标签内的值
start();
//定时器开始启用秒表
function start() {
    sobj = setInterval(function() {
        getDate(); //每隔一段时间执行一次
    }, 1000);
}
//setInterval(getDate，1000）;
// ---------------------------------时间----------------------------------------------------------------------

// ---------------------------------注册----------------------------------------------------------------------
var registerobj = document.getElementById("register");
var tableobj0 = document.getElementsByClassName("tableid")[0];
var tableobj1 = document.getElementsByClassName("tableid")[1];
var span2obj0 = document.getElementsByClassName("span2")[0];
var span2obj1 = document.getElementsByClassName("span2")[1];
registerobj.onclick = function() {
    tableobj0.style.display = "inline-block";
}
span2obj0.onclick = function() {
        tableobj0.style.display = "none";
    }
    //密码
var mmobj = document.getElementById("mm");
mmobj.onfocus = function() {
        // this.style.outlineColor = "black";
        this.select();
    }
    //电话
var telobj = document.getElementById("tel");
var p3obj = document.getElementById("p3");
telobj.onfocus = function() {
    telvalue = telobj.value;
    if (typeof(telvalue) == "number" && length(telvalue) <= 8 && length(telvalue) >= 16) {
        p3obj.style.display = "inline-block";
    }
}

// ---------------------------------注册----------------------------------------------------------------------

// ---------------------------------登记----------------------------------------------------------------------
entry.onclick = function() {
    tableobj1.style.display = "block";
}
span2obj1.onclick = function() {
    tableobj1.style.display = "none";
}

// ---------------------------------登记----------------------------------------------------------------------
// ---------------------------------背景----------------------------------------------------------------------
sunobj = document.getElementById("sun");
bodyobj = document.getElementById("body");

sunobj.onclick = function() {
    for (var i = 0; i < 100; i++) {
        if (i % 2 == 0) {
            sunobj.onclick = function back() {
                bodyobj.style.background = "orange";
            }
        } else {
            sunobj.onclick = function back() {
                bodyobj.style.background = "rgb(78, 145, 233)";
            }
        }
    }
}

//---------------------------------背景----------------------------------------------------------------------
//---------------------------------灯控----------------------------------------------------------------------

var led1flag = 0;
var led2flag = 0;
var led3flag = 0;
var led4flag = 0;

function turn(flag) {
    if (flag == 1) {
        var btn1 = document.getElementById('btn1')
        var led1 = document.getElementById('led1')
        if (led1flag == 0) {
            btn1.src = "images/on.png"
            led1.src = "images/ledon.png"
            led1flag = 1;
        } else if (led1flag == 1) {
            btn1.src = "images/off.png"
            led1.src = "images/ledoff.png"
            led1flag = 0;
        }

    }
    if (flag == 2) {
        var btn2 = document.getElementById('btn2')
        var led2 = document.getElementById('led2')
        if (led2flag == 0) {
            btn2.src = "images/on.png"
            led2.src = "images/ledon.png"
            led2flag = 1;
        } else if (led2flag == 1) {
            btn2.src = "images/off.png"
            led2.src = "images/ledoff.png"
            led2flag = 0;
        }

    }
    if (flag == 3) {
        var btn3 = document.getElementById('btn3')
        var led3 = document.getElementById('led3')
        if (led3flag == 0) {
            btn3.src = "images/on.png"
            led3.src = "images/ledon.png"
            led3flag = 1;
        } else if (led3flag == 1) {
            btn3.src = "images/off.png"
            led3.src = "images/ledoff.png"
            led3flag = 0;
        }

    }
    if (flag == 4) {
        var btn4 = document.getElementById('btn4')
        var led4 = document.getElementById('led4')
        if (led4flag == 0) {
            btn4.src = "images/on.png"
            led4.src = "images/ledon.png"
            led4flag = 1;
        } else if (led4flag == 1) {
            btn4.src = "images/off.png"
            led4.src = "images/ledoff.png"
            led4flag = 0;
        }

    }
}
//---------------------------------灯控----------------------------------------------------------------------