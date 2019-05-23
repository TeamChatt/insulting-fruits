const Twit = require('twit')
const config = require('./config')
const generate = require('./generate')

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
setInterval(tweet, ONE_DAY)
