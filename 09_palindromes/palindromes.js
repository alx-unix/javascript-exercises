const palindromes = function (phrase) {
    const alphanum = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanPhrase = phrase
        .toLowerCase()
        .split('')
        .filter((char) => alphanum.includes(char))
        .join('');
    
    const reversePhrase = cleanPhrase.split('').reverse().join('');

    return cleanPhrase === reversePhrase;
};
// Do not edit below this line
module.exports = palindromes;
