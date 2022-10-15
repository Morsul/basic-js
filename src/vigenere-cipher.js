const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(value = true) {
    this.direct = value;
  }

  testInput(t, k){
    if(!t || !k ){
      throw new Error('Incorrect arguments!')
    }
  }

  encrypt(t, k) {
    this.testInput(t, k)
    let text =''
    let dl = 0
    for (let i = 0; i<t.length; i++){
      let plain = t.toUpperCase().charCodeAt(i)-65;
      let key = k.toUpperCase().charCodeAt(dl)-65;
      let shift = plain + key;
      if(plain<0 || plain > 26 ){
        text += t.charAt(i)
        continue
      }
      if (shift > 25){
        shift = shift -26
      }
      dl = dl >= k.length-1 ? 0 : dl+1
      text += String.fromCharCode(shift+65);
    }
    return this.direct ? text : text.split('').reverse().join("")
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt(t, k) {
    this.testInput(t, k)
    let dl = 0
    let text= "";
    for (let i = 0; i<t.length; i++){

      let plain = t.toUpperCase().charCodeAt(i)-65;
      let key = k.toUpperCase().charCodeAt(dl)-65;
      let shift = plain - key;
      if(plain<0 || plain > 26 ){
        text += t.charAt(i)
        continue
      }
      if (shift < 0){
        shift = 26+shift
      }
      dl = dl >= k.length-1 ? 0 : dl+1
      text += String.fromCharCode(shift+65);
    }
    return this.direct ? text : text.split('').reverse().join("")
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
