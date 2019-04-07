function check(obj) {
    if (!isNumber(obj.value)) {
        alert("整数を入力して下さい。");
    }
    else if (!rangeOf2And100(obj.value)) {
        alert("2~100の範囲で入力してください。");
    }
    else if (!isPrime(obj.value)) {
        alert("入力された整数は素数ではありません。");
    }
    else {
        alert("入力された整数は素数です。");
    }
}

function isNumber(val) {
    var regex = new RegExp(/^[0-9]+$/);

    return regex.test(val);
}

function rangeOf2And100(val) {
    return (val >= 2 && val <= 100);
}

function isPrime(val) {
    if (val == 2) {
        return true;
    }
    else if (val % 2 == 0) {
        return false;
    }

    var val_sqrt = Math.sqrt(val);

    for (var i = 3; i <= val_sqrt; i += 2) {
        if (val % i == 0) {
            return false;
        }
    }

    return true;
}

