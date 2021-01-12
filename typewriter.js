const sentence = "hello there from lighthouse labs";

const typewriter = function (sentence) {
  // we need to stagger them, one at a time by 50ms
  // we need to gradually increase the lenght of the timeout
  // start a variable at zero abd use that as the default setTimeout number
  let timer = 0

  for (const char of sentence) {

    setTimeout(function () {
      process.stdout.write(char)
    }, timer)
    // increse the accumulator by 50 everytime we loop through the string
    timer += 50
  }
  
  // use scentence length to know when to stop, and do another setTimeout

  setTimeout(function () { (process.stdout.write('\n')) }, 50 * sentence.length)
}


typewriter(sentence)




// letters are appearing dealyed, but  all at the same time

// can we change the interval incrementally
// need a newline after 
