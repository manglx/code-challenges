/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanValues = {
        I: {
            value: 1,
            subtractTo: ["V", "X"]
        },
        V: {
            value: 5,
            subtractTo: []
        },
        X: {
            value: 10,
            subtractTo: ["L", "C"]
        },
        L: {
            value: 50,
            subtractTo: []
        },
        C: {
            value: 100,
            subtractTo: ["D", "M"]
        },
        D: {
            value: 500,
            subtractTo: []
        },
        M: {
            value: 1000,
            subtractTo: []
        }
    };
    let result = 0

    for(let i = 0; i < s.length; i++) {
        if(romanValues[s.charAt(i)].subtractTo.length === 0) {
            result += romanValues[s.charAt(i)].value
            continue
        }

        if(romanValues[s.charAt(i)].subtractTo.includes(s.charAt(i+1))) {
            result += romanValues[s.charAt(i+1)].value - romanValues[s.charAt(i)].value
            i++
            continue
        }

        result += romanValues[s.charAt(i)].value
    }

    return result
};

console.log(romanToInt("MCMXCIV"))