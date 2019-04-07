function check(obj) {
    if (!isNumber(obj.value)) {
        alert("整数を入力して下さい。");
    }
    else if (!rangeOf2And100(obj.value)) {
        alert("2~100の範囲で入力してください。");
    }
    else {
        alert("Good!");
    }
}

function isNumber(val) {
    var regex = new RegExp(/^[0-9]+$/);

    return regex.test(val);
}

function rangeOf2And100(val) {
    return (val >= 2 && val <= 100);
}

