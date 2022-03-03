const t = require("node_basetest")
describe("get type", () => {
    it("should accurately return type", () => {

        let array = getType([2, 3, 4])
        t.HAS(array, "array")
        console.log("🚀 ~ file: playground.js ~ line 31 ~ array", array)
        let string = getType("hello")
        t.HAS(string, "string")
        console.log("🚀 ~ file: playground.js ~ line 33 ~ string", string)
        let boolean = getType(true)
        t.HAS(boolean, "boolean")
        console.log("🚀 ~ file: playground.js ~ line 35 ~ boolean", boolean)
        let number = getType(3)
        t.HAS(number, "number")
        console.log("🚀 ~ file: playground.js ~ line 37 ~ number", number)
        let object = getType({ hello: "whatsup" })
        t.HAS(object, "object")
        console.log("🚀 ~ file: playground.js ~ line 39 ~ object", object)
    })

    it("should pass the type in the correct function", () => {

    })
    it("should clean arrays", () => {

        let trimthis = trimArr(["asdfad 3rr", "fasdf"])
        console.log("🚀 ~ file: playground.js ~ line 102 ~ trimthis", trimthis)
        let trim2 = trimArr([{
            hi: "23aksdflkj ",
            no: null,
            empty: [],
            clean: "asdfasdfaf "
        }, {
            hi: "23aksdflkj ",
            what: undefined,
            clean: "asdfasdfaf "
        }])
        console.log("🚀 ~ file: playground.js ~ line 110 ~ trim2", trim2)
        console.log("🚀 ~ file: playground.js ~ line 110 ~ trim2", trim2)


    })
    it("should clean objects", () => {

        let object = {
            hi: "23aksdflkj ",
            clean: "asdfasdfaf "
        }
        let trim1 = trimObj(object)
        console.log("🚀 ~ file: playground.js ~ line 90 ~ trim1", trim1)

    })
    it("formats to object", () => {

        let obj1 = formatObject([2, 3, 4])
        console.log("🚀 ~ file: playground.js ~ line 150 ~ obj1", obj1)

    })
    it("formats to date", () => {
        let formatsToString = formatDate("March 20, 2022", "string")
        console.log("🚀 ~ file: playground.js ~ line 72 ~ formatsToString", formatsToString)

        let formatsToObject = formatDate("March 20, 2022", "object")
        console.log("🚀 ~ file: playground.js ~ line 75 ~ formatsToObject", formatsToObject)
    })

    it("formats to string", () => {
        let shouldBeStringed = formatString(2)
        console.log("🚀 ~ file: playground.js ~ line 153 ~ shouldBeStringed", shouldBeStringed)
        let stringed1 = formatString([2, 4, ])
        console.log("🚀 ~ file: playground.js ~ line 155 ~ stringed1", stringed1)
        let stringed2 = formatString({ hello: "whatsup" })
        console.log("🚀 ~ file: playground.js ~ line 157 ~ stringed2", stringed2)
        let stringeed4 = formatString(new Date())
        console.log("🚀 ~ file: playground.js ~ line 159 ~ stringeed4", stringeed4)
        let stringed5 = formatString(true)
        console.log("🚀 ~ file: playground.js ~ line 160 ~ stringed5", stringed5)
    })
    it("formats to number", () => {

        let num1 = formatNumber("3")
        console.log("🚀 ~ file: playground.js ~ line 101 ~ num1", num1)
        let num2 = formatNumber([2, 3])
        console.log("🚀 ~ file: playground.js ~ line 103 ~ num2", num2)
        let num3 = formatNumber(new Date())
        console.log("🚀 ~ file: playground.js ~ line 105 ~ num3", num3)

    })
    it("formats to number", () => {
        let arr1 = formatArray(1)
        console.log("🚀 ~ file: playground.js ~ line 137 ~ arr1", arr1)
        let arr2 = formatArray("hi")
        console.log("🚀 ~ file: playground.js ~ line 139 ~ arr2", arr2)
        let arr3 = formatArray({ hi: "whatsup" })
        console.log("🚀 ~ file: playground.js ~ line 141 ~ arr3", arr3)
        let arr4 = formatArray(new Date())
        console.log("🚀 ~ file: playground.js ~ line 143 ~ arr4", arr4)
        let arr5 = formatArray(true)
        console.log("🚀 ~ file: playground.js ~ line 145 ~ arr5", arr5)
    })
})