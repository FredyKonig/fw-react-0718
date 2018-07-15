
let testData = {
    fruit : [ "pears","peaches","plums","pineapples"],
    size : [ "small", "medium","large","huge" ],
    nation : [ "English","French","Italian","Spanish" ],
    type : [ "Organic","Local","Economy","Seasonal" ]
}

let getFruit = () => {

    let fruit =
        testData.type[ Math.floor(Math.random() * testData.fruit.length) ] + " " +
        testData.size[ Math.floor(Math.random() * testData.fruit.length) ] + " " +
        testData.nation[ Math.floor(Math.random() * testData.fruit.length) ] + " " +
        testData.fruit[ Math.floor(Math.random() * testData.fruit.length) ]

    return fruit;

}

export { getFruit }
