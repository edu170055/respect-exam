class InputNumberChecker {
    check(obj) {
        if (!this.isNumber(obj.value)) {
            alert('整数を入力して下さい。');
        }
        else if (!this.isRangeOf2And100(obj.value)) {
            alert('2~100の範囲で入力してください。');
        }
        else if (!this.isPrime(obj.value)) {
            document.getElementById('result').innerHTML = obj.value + 'は素数ではありません。';
        }
        else {
            document.getElementById('result').innerHTML = obj.value + 'は素数です。';
        }
    }

    isNumber(val) {
        var regex = new RegExp(/^[0-9]+$/);

        return regex.test(val);
    }

    isRangeOf2And100(val) {
        return (val >= 2 && val <= 100);
    }

    isPrime(val) {
        if (val == 2) {
            return true;
        }
        else if (val % 2 == 0) {
            return false;
        }

        var valSqrt = Math.sqrt(val);

        for (var i = 3; i <= valSqrt; i += 2) {
            if (val % i == 0) {
                return false;
            }
        }

        return true;
    }
}


var onButtonClick = function(num) {
    var inputNumberChecker = new InputNumberChecker();
    inputNumberChecker.check(num);
}

