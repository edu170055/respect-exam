function check(obj) {
    if (!isNumber(obj.value)) {
        alert("整数を入力して下さい。");
    }
}

function isNumber(val) {
    var regex = new RegExp(/^[0-9]+$/);

    return regex.test(val);
}

