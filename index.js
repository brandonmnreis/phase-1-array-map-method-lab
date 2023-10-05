function toTitleCase(str) {
  return str.split(' ').map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }).join(' ')
}

const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
]

const titleCased = () => {
  return tutorials.map(tutorial => toTitleCase(tutorial))
 }


// const titleCased = () => {
//  return tutorials.map(toTitleCase)
// }

// function title (tutorials) {
//   const titleCased = tutorials.map((tutorial) => tutorial.toTitleCase())
//     return tutorials
// }

// const titleCased = tutorials.map(toTitleCase);
// console.log(titleCased)