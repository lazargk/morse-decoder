const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // write your solution here

  let dic = {};
  for (key in MORSE_TABLE) {
    let word = "";
    let numberWord = "";
    for (let i = 0; i <= key.length - 1; i++) {
      if ("-" == key[i]) {
        numberWord = numberWord + "11";
      } else {
        numberWord = numberWord + "10";
      }
    }
    word = numberWord;
    for (let i = 0; i < 10 - numberWord.length; i++) {
      word = "0" + word;
    }
    dic[word] = key;
  }

  res = "";

  for(let i =0; i < expr.length/10; i++){
      let sub = expr.substr(i*10, 10);
    if("**********"== sub){
        res = res + " ";
    } else {
        res = res + MORSE_TABLE[dic[sub]];
    }
  }

  return res;

}

module.exports = {
  decode,
};
