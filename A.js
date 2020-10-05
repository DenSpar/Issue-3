/*
это задание не решил. Прошел все тесты, кроме 2 - runtime-error	58ms / 5.35Mb. Не понимаю в чем дело
учтены кейсы с входными массивами типа:
    а) ["Mallory", "Everest", "Mont Blanc", "Pillar Rock"];
    б)  [ ["Mallory", "Everest", "Mont Blanc", "Pillar Rock"] ]
*/

//массив, на котором тестировал
var explorers =  [  
    ["Mallory", "Everest", "Mont Blanc", "Pillar Rock"],  
    ["Mawson", "South Pole", "New Hebrides"],  
    ["Hillary", "Everest", "South Pole"]  
];

var firstExplorer = function (arr) {
    let finalArr = [];
    for (i = 1; i < arr[0].length; i++) {
        let newToponym = [];
        newToponym.push(arr[0][i],arr[0][0]);
        finalArr.push(newToponym);
    };
    return finalArr
}

var checkToponyms = function (arr,toponym,explorer) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] === toponym) {
            arr[i].push(explorer);
            count++
            return arr
        }
    };
    if (count === 0) {
        let newToponym = [];
        newToponym.push(toponym,explorer)
        arr.push(newToponym);
        return arr
    };    
};

var otherExplorers = function (inputArr,firstArr) {
    for (let i = 1; i < inputArr.length; i++) {
        for (let j = 1; j < inputArr[i].length; j++) {
            checkToponyms(firstArr,inputArr[i][j],inputArr[i][0])
        };
    };
    return firstArr
};
var oneExplorer = function(arr) {
    let finalArr = [];
    for (i = 1; i < arr.length; i++) {
        let newToponym = [];
        newToponym.push(arr[i],arr[0]);
        finalArr.push(newToponym);
    };
    return finalArr
};

if (explorers[1]) {
    if (explorers[1][1].length === 1) {
        console.log(oneExplorer(explorers));
    } else {console.log(otherExplorers(explorers,firstExplorer(explorers)));}
} else {
    console.log(otherExplorers(explorers,firstExplorer(explorers)));
};