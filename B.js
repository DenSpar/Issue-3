//это задание решил, выкладываю как есть

//массив, на котором тестировал
var diffs = [
    [1, 0],  
    [0, 1],  
    [1, 1],
    [1, 0],
    [1 ,0] 
];

var checkSourcePosition = function (arr) {
    let sumDifX = 0;
    let sumDifY = 0;
    for (let i = 0; i < arr.length; i++) {
        sumDifX += arr[i][0];
        sumDifY += arr[i][1];
    };
    if (sumDifX%2 !== 0 || sumDifY%2 !== 0) {
        return false
    } else {return true};
};

var changeArr = function (arr) {
    if (checkSourcePosition(arr)) {
        let finalDiffs = [];
        let counterX = 0;
        let counterY = 0;
        for (let i = 0; i < arr.length; i++) {
            let newDiffs = [];
            if (arr[i][0] === 1) {
                counterX++;
                if (counterX%2 === 0) {
                    newDiffs.push(1);
                } else {newDiffs.push(-1);}
            } else {newDiffs.push(0);};

            if (arr[i][1] === 1) {
                counterY++;
                if (counterY%2 === 0) {
                    newDiffs.push(1);
                } else {newDiffs.push(-1);}
            } else {newDiffs.push(0);};

            finalDiffs.push(newDiffs);
        };
        return finalDiffs
    } else {return null}
};

console.log(changeArr(diffs));