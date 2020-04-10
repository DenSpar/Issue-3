/*
это задание не прошел, начиная с 4 теста время выполнения программы превышало лимит
удалил строки с 9 по 12 из исходного файла - специально оставленная бага
не догадался сразу, что надо сначала проверить data на наличие слов, отсутствующих в dicionary, а потом уже сортировать по координатам

выкладываю исправленную программу
P.S. все лежит в 1 функции потому, что так удобнее было переносить в окно ввода ответа
*/

//массивы, на которых тестировал
const data = [  
    {geometry: [10, 20],  
    text: 'James'},
    
    {geometry: [20, 40],  
    text: 'Bond'},
    
    {geometry: [5, 40],  
    text: 'Bond'},
    
    {geometry: [10, 75],  
        text: 'Fuck'}
];  
const dictionary = ['James', 'Bond', 'Fuck'];

var moduleExports = function (inputData, inputDictionary) {
    function sortByCoordinates(arr) {
        for (var i = 0, endI = arr.length - 1; i < endI; i++) {
            for (var j = 0, endJ = endI - i; j < endJ; j++) {
                let thisX = arr[j].geometry[0];
                let nextX = arr[j + 1].geometry[0];
                if (thisX > nextX) {
                    var swap = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = swap;
                }
            }
        }
        return arr;
    } ; 

    var textMessages = function (arr) {
        let textMessagesArr = [];
        for (let i = 0; i < arr.length; i++) {
            textMessagesArr.push(arr[i].text);
        };
        return textMessagesArr.join(' ')
    };    
    
    let getAbsentWords = function () {
        let arr = [];
        for (let i = 0; i < inputData.length; i++) {            
            let found = false;
            for (let j = 0; j < inputDictionary.length; j++) {
                if (inputData[i].text === inputDictionary[j]) {
                    found = true;
                };
            };           
    
            if (!found) {
                arr.push(inputData[i].text);
            };
        };
        return arr
    };    
    
    let absentWords = getAbsentWords();    
    
    if (absentWords.length) {
        return "Unreadable message";
    } else {
        sortByCoordinates(inputData);
        let resultMessage = textMessages(inputData);        
        return resultMessage;
    };         
};

console.log(moduleExports(data, dictionary));