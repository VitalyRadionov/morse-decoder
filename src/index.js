const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let newMorseTable = {};
    let res = '';
    let dash = '11';
    let dot = '10';

    expr = [...expr];
    for (const key in MORSE_TABLE) {
        newMorseTable[[key.toString()].map((element) => {

            let nullArray = [];
            let nullArrayLength = 10 - (key.length * 2);

            for (let index = 0; index < nullArrayLength; index++) {
                nullArray[index] = '0';
            }

            element.replace(/(-)|(.)/gi, function (match, p1, p2) {
                if (p1) {
                    nullArray.push(dash);
                }
                if (p2) {
                    nullArray.push(dot);
                }
            });
            return nullArray.join('');
        })] = [MORSE_TABLE[key]];
    };

    console.log(newMorseTable);

    for (let index = 0; index <= expr.length - 10; index = index + 10) {
        let letter = expr.slice(index, index + 10).join('');

        if (letter == '**********') {
            res += ' ';
        } else {
            res += newMorseTable[letter][0];
        }
    }
    // console.log(res);
    return res;
}

module.exports = {
    decode
}