const fruit = require('./fruit.json')
const adjectives = require('./adjectives.json')

const pick = (array) => {
  const index = Math.floor(Math.random()*array.length)
  return array[index]
}

const generateFruit = () => `${pick(adjectives)} ${pick(fruit)}`
const generateTweet = () => `Sir Richard Burton described the taste of the jujube as "like ${generateFruit()}, ${generateFruit()} and ${generateFruit()}."`

module.exports = generateTweet
