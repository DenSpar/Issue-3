/*
это задание не прошел, на 5 тесте выпадает ошибка runtime-error	344ms / 11.18Mb, остальные тесты выполнены успешно. Не понимаю в чем дело. Возможно в именах ключей (они написаны в кавычках), не успел проверить этот кейс, но очень врядли
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
const data2 = [
    {"geometry": [10, 20],
    "text": "James"},
    {"geometry": [20, 40],
    "text": "Bond"},
    {"geometry": [5, 40],
    "text": "Bond"}
]
const dictionary = ['James', 'Bond', 'Fuck'];
const dictionary2 = ["James", "Bond"];

var moduleExports = function (inputData, inputDictionary) {
    var qsort = (arr) => {
        let median = 0;
        arr.map(item => {median += item["geometry"][0]});
        median = Math.floor(median/2);
        let less = arr.filter(item => item["geometry"][0] <= median);
        let more = arr.filter(item => item["geometry"][0] > median);
        less.sort(( a, b ) =>  a["geometry"][0] - b["geometry"][0]);
        more.sort(( a, b ) =>  a["geometry"][0] - b["geometry"][0]);
        return [...less, ...more]
    };

    let isAbsentWords = function () {
        for (let i = 0; i < inputData.length-1; i++) {            
            let found = false;
            for (let j = 0; j < inputDictionary.length; j++) {
                if (inputData[i]["text"] === inputDictionary[j]) {
                    found = true;
                    break
                };
            };           
    
            if (!found) {
                return true
            };
        };
        return false
    }; 

    if (isAbsentWords()) {
        return "Unreadable message";
    } else {
        return qsort(inputData)
        .map(item => item["text"])
        .join(' ');
    };
};

console.log(moduleExports(data, dictionary));