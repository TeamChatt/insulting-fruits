const Twit = require('twit')
const generate = require('./generate')
require('dotenv').config()

const config = {
  consumer_key:         process.env.CONSUMER_KEY,
  consumer_secret:      process.env.CONSUMER_SECRET,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
}

const T = new Twit(config)

const ONE_DAY = 1000 * 60 * 60 * 24

function tweet() {
  const myTweet = generate()

  console.log(myTweet)
  T.post('statuses/update', { status: myTweet }, (err, reply) => {
    if (err) {
      console.log('error:', err)
    }
    else {
      console.log('reply:', reply)
    }
  })
}

tweet()
setInterval(tweet, ONE_DAY/3) // Tweet three times a day
