/**
 * Create an array of words and use filter to find words with more than 5 letters.
 */

const words = ['Charm', 'Sling', 'Juna', 'Terrapin', 'Bags', 'Amoeba', 'Reaper', 'Nomad', 'Echo', 'Partrige', 'Bambi', 'Management'];
const moreThanFive = words.filter((word) => {
    return word.length > 5;
});
moreThanFive.forEach((word) => {
    console.log(word);
});
