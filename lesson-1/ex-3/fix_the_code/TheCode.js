// TODO: Fix the errors in the functions below!

const functions = {
    sum: function (a, b) {
        return a + b;
    },

    doubleNumbersInArray: function (array) {
        // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
        return array.map(element => element * 2)
    },

    noBadWordsPlease: function (input) {
        // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
        if (!input.includes("crap")) {
            // nothing happens
        } else {
            throw Error("Bad word detected");
        }
    },

    createCounterFunction(start) {
        let count = start;
        return () => {
            count += 1;
            return count;
        }
    },

    createHelloMessage: function (name) {
        // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
        return `Hello ${name}. Are you well?`;
    },

    nameOfWeekDay: function (index) {
        let days = ["Monday", 'Tuesday', "Wednesday", "Thursday", "Friday",
            "Saturday", "Sonday"
        ];
        return days[index];
    },

    sortNumbers: function (array) {
        // Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        return array.sort((a, b) => a > b ? 1 : -1);
    },

    callTheCallback: function (callback) {
        // Docs: https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
        callback(1, 2);
        // callback();
    },

    combineArrays: function (array1, array2) {
        return [...array1, ...array2];
    },

    promiseMeMoney: function () {
        return new Promise((resolve, reject) => {
            resolve("money");
        });
    }
};

module.exports = functions;