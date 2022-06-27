// Erros
const { BadRequestError } = require("../utils/errors");

class GiftExchange {
    static pairs(names) {
        if (!names) {
            throw new BadRequestError();
        }
        if (names.length % 2 == 1) {
            throw new BadRequestError();
        }

        let newNames = [];
        let auxNames = names;
        // Durstenfeld shuffle algorithm
        for (let i = auxNames.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = auxNames[i];
            auxNames[i] = auxNames[j];
            auxNames[j] = temp;
        }

        for (let i = 0; i < auxNames.length; i += 2) {
            newNames = [...newNames, [auxNames[i], auxNames[i + 1]]]
        }

        return newNames;
    }
    static traditional(names) {
        if (!names) {
            throw new BadRequestError();
        }

        let leftIndex = Math.floor(Math.random() * names.length);
        let prevIndexes = [];
        let newNames = [];

        while (prevIndexes.length < names.length - 1) {
            let rightIndex = Math.floor(Math.random() * names.length);

            while ([...prevIndexes, leftIndex].includes(rightIndex)) {
                rightIndex = Math.floor(Math.random() * names.length);
            }
            newNames = [...newNames, `${names[leftIndex]} is giving a gift to ${names[rightIndex]}`];
            prevIndexes = [...prevIndexes, leftIndex];
            leftIndex = rightIndex;
        }
        newNames = [...newNames, `${names[leftIndex]} is giving a gift to ${names[prevIndexes[0]]}`];
        return newNames;
    }
}

module.exports = GiftExchange;