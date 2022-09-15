const sentence = prompt("Type a message");
const upperSentence = sentence.toUpperCase();
const lowerSentence = sentence.toLowerCase();

if (sentence === upperSentence) {
    console.log('YELLING')
} else if (sentence === lowerSentence) {
    console.log('whispering')
} else {
    console.log('neither')
}