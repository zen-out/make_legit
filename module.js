/**
 * 描述
 * @author zen-out
 * @date 2022-03-03
 * @param {any} "format_date_time_moment/node"
 * @returns {any}
 */
const { formatDateTime } = require("format_date_time_moment/node")
const cleanDeep = require('clean-deep')
const check = require("check-types")

/**
 * getType(data)
 * @date 2022-03-03
 * @param {any} data
 * @returns {string} data, number, array, string object, boolean undefined
 */
function getType(data) {
    if (data instanceof Date) {
        return "date"
    } else
    if (check.number(data)) {
        return "number"
    } else if (check.array(data)) {
        return "array"
    } else if (check.string(data)) {
        return "string"
    } else if (check.object(data)) {
        return "object"
    } else if (check.boolean(data)) { return "boolean" } {
        return undefined;
    }
}

/**
 * clean(data)
 * 
 * @date 2022-03-03
 * @param {any} data
 * @returns {any}
 */
function clean(data) {
    let type = getType(data)
    console.log("🚀 ~ file: module.js ~ line 27 ~ clean ~ type", type)
    switch (type) {
        case "array":
            return trimArr(data)
        case "object":
            let trimmed = trimObj(data)
            return trimmed;
        case "string":
            return data.trim()
        default:
            return data;
    }
}

/**
 * format(data, type)
 * @date 2022-03-03
 * @param {any} data
 * @param {string} date, string, array, object, boolean or number
 * @returns {any}
 */
function format(data, type) {
    let whatsThis = getType(data)
    if (whatsThis === type) {
        return clean(data);
    } else {
        if (type === "date") {
            return formatDate(data, type)
        } else if (type === "string") {
            return formatString(data, type)
        } else if (type === "array") {
            let arr = formatArray(data, type)
            return clean(arr)
        } else if (type === "object") {
            let obj = formatObject(data, type)
            return clean(obj)
        } else if (type === "boolean") {
            return formatBoolean(data, type)
        } else if (type === "number") {
            return formatNumber(data, type)
        } else {
            return undefined
        }
    }

}


/**
 * trimObj(obj)
 * @author zen-out
 * @date 2022-03-03
 * @param {any} obj
 * @returns {any}
 */
function trimObj(obj) {
    console.log("trim obj")
    if (obj instanceof Date) {
        return obj;
    }
    obj = cleanDeep(obj)
    console.log("🚀 ~ file: module.js ~ line 72 ~ trimObj ~ obj", obj)
    for (const [key, value] of Object.entries(obj)) {
        if (typeof value === "string") {
            let trimmed = value.trim()
            obj[key] = trimmed;
        }
    }
    return obj;
}

/**
 * trimArr(arr)
 * @author zen-out
 * @date 2022-03-03
 * @param {any} arr
 * @returns {array}
 */
function trimArr(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let type = getType(arr[i])
        if (type === "string") {
            arr[i] = arr[i].trim()
            newArr.push(arr[i])
        } else if (type === "object") {
            let trimmed = trimObj(arr[i])
            newArr.push(trimmed)
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr;
}

/**
 * formatDate(data)
 * @author zen-out
 * @date 2022-03-03
 * @param {any} data
 * @returns {date}
 */
function formatDate(data) {
    let whatsThis = getType(data)
    if (whatsThis === "string") {
        let formatDate = formatDateTime.formatDateToPost(data)
        return formatDate
    } else if (whatsThis === "object") {
        let formatDate = formatDateTime.formatDateToPost(data)
        return new Date(formatDate)
    } else {
        return undefined
    }
    // array  
}



/**
 * formatNumber(data)
 * @author zen-out
 * @date 2022-03-03
 * @param {any} data
 * @param {any} type
 * @returns {number}
 */
function formatNumber(data) {
    // string 
    let whatsThis = getType(data)
    if (whatsThis === "string") {
        return parseInt(data)
    } else if (whatsThis === "array") {
        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            console.log(data[i])
            if (typeof data[i] === "number") {
                sum += data[i]
                console.log("🚀 ~ file: playground.js ~ line 86 ~ formatNumber ~ sum", sum)
            }
        }
        return sum;
    } else if (whatsThis === "date") {
        let formatDate = formatDateTime.format(data, "YYYYMMDDHHMMSS")
        let parsed = parseInt(formatDate)
        return parsed;
    } else {
        return undefined
    }
    // array  

}

/**
 * formatArray(data)
 * @author zen-out
 * @date 2022-03-03
 * @param {any} data
 * @returns {array}
 */
function formatArray(data) {
    // string 
    let newArr = []
    let whatsThis = getType(data)
    if (whatsThis === "string") {
        newArr.push(data)
        return newArr;

    } else if (whatsThis === "number") {
        newArr.push(data)
        return newArr;
    } else if (whatsThis === "object") {
        let item = ""
        let keys = Object.keys(data)
        let values = Object.values(data)
        for (let i = 0; i < keys.length; i++) {
            item += keys[i].toString() + ": " + values[i].toString()
            newArr.push(item)
        }
        return newArr;
    } else if (whatsThis === "date") {
        let formatted = formatDateTime.format(data, "ll")
        newArr.push(formatted)
        return newArr;
    } else if (whatsThis === "boolean") {
        newArr.push(data)
        return newArr;

    } else {
        return undefined
    }
    // array  

}

/**
 * formatObject(data)
 * @date 2022-03-03
 * @param {any} data
 * @returns {object}
 */
function formatObject(data) { // string 
    let newObj = {}
    let whatsThis = getType(data)
    if (whatsThis === "array") {
        for (let i = 0; i < data.length; i++) {
            newObj[i] = data[i]
        }
        return newObj;
    } else {
        return undefined
    }
}
/**
 * formatString(data)
 * @date 2022-03-03
 * @param {any} data
 * @returns {string}
 */

function formatString(data) {
    // string 
    let whatsThis = getType(data)
    if (whatsThis === "number") {
        return data.toString()
    } else if (whatsThis === "array") {
        let stringed = ""
        for (let i = 0; i < data.length; i++) {
            if (typeof data[i] === "object") {
                stringed += JSON.stringify(data[i])
            } else {
                stringed += data[i]
            }
        }
        return stringed;
    } else if (whatsThis === "object") {

        return JSON.stringify(data)
    } else if (whatsThis === "date") {
        return formatDateTime.format(data, "ll")
    } else if (whatsThis === "boolean") {
        return data.toString()
    } else {
        return undefined
    }
}


/**
 * formatBoolean(data)
 * @author zen-out
 * @date 2022-03-03
 * @param {any} data
 * @returns {boolean}
 */
function formatBoolean(data) {
    // string 
    let whatsThis = getType(data)
    if (whatsThis === "string") {
        return data.toString()
    } else {
        return undefined
    }
}


module.exports = { format, getType, clean, trimArr, formatDate, formatNumber, formatArray, formatObject, formatString, formatBoolean, trimObj }