class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error();
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let encryptedArray = [];
    let messageArray = message.toUpperCase().split("");
    let keyArray = key.toUpperCase().split("");
    // making key as long as message
    if (messageArray.length > keyArray.length) {
      for (
        let i = 0;
        i < Math.floor(messageArray.length / keyArray.length);
        i++
      ) {
        keyArray = keyArray.concat(keyArray);
      }
      for (let i = 0; i < messageArray.length / keyArray.length; i++) {
        keyArray.push(keyArray[i]);
      }
    }

    messageArray.forEach((element, index) => {
      if (letters.indexOf(element) == -1) {
        encryptedArray.push(element);
        keyArray.splice(index, 0, element);
      } else
        encryptedArray.push(
          letters[letters.indexOf(keyArray[index]) + letters.indexOf(element)]
        );
    });
    return this.direct
      ? encryptedArray.join("")
      : encryptedArray.reverse().join("");
    // remove line with error and write your code here
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error();
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let decryptedArray = [];
    let messageArray = encryptedMessage.toUpperCase().split("");
    let keyArray = key.toUpperCase().split("");
    // making key as long as message
    if (messageArray.length > keyArray.length) {
      for (
        let i = 0;
        i < Math.floor(encryptedMessage.length / key.length) - 1;
        i++
      ) {
        keyArray = keyArray.concat(key.toUpperCase().split(""));
      }
      for (let i = 0; i < messageArray.length / keyArray.length; i++) {
        keyArray.push(keyArray[i].toUpperCase());
      }
    }

    messageArray.forEach((element, index) => {
      if (letters.indexOf(element) == -1) {
        decryptedArray.push(element);
        keyArray.splice(index, 0, element);
      } else
        decryptedArray.push(
          letters[
            letters.indexOf(element) +
              letters.length / 2 -
              letters.indexOf(keyArray[index])
          ]
        );
    });
    return this.direct
      ? decryptedArray.join("")
      : decryptedArray.reverse().join("");
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;

