//Project: Mini Linter from Codecademy Iterator project

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//the spilt method converts strings to arrays. .split() converts the whole string to an 1 array item, .split('') converts each letter in the string to an array item, while .split(' ') (there is a space between the quotation) coverts each word in a string to an array item.
const storyWords = story.split(' ')

//finds the number of words in the story and log it to the console
console.log('Word count: ' + storyWords.length)

//filters out unnecessary words from the array leaving behind betterWords
const betterWords = storyWords.filter(unnecessary => {
  return !unnecessaryWords.includes(unnecessary)
})
 //console.log(betterWords.length)

//count the number of times overused words appear
let rcount = 0
let vcount = 0
let bcount = 0

for (word of betterWords) {
  if (word == 'really') {
    rcount++
  } else if (word == 'very') {
    vcount++
  } else if (word == 'basically') {
    bcount++
  }
}
console.log('Used \'really\':',rcount, ' times')
console.log('Used \'basically\':',bcount, ' times')
console.log('Used \'very\':',vcount, ' times')

//counts the number of sentences by counting the number of words that end with '.' or '!'
let sentences = 0
for (word of betterWords) {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences++
  }
}
 console.log('Sentence count:', sentences)
