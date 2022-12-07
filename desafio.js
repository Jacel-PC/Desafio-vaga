const text =
  'AcoDQeYjrSlByFtyzQhvjoCNVpsaLeQPtGUjQHVzbgabjuAiMHDxwfkNvCwlGmZCTinlSikvRKxAGzjsgmPeUBAReDzmLzqgjgrXobzfoWiWvRPdFgjzlkSojscWtVdEbulRyhXOdHkayBdFiMHSyziJtmGMhjTiFBaDizrngCngdSnngUHFWpQpCwElHxunYWsiXKvFokntcAHiXopTglKkeovoLrBlPTtMfqTTAgnejUPgKeBsolCtAAjNtKBjf'

function sequenciaDeFibonacci(n) {
  var fibonacci = []
  fibonacci.push(0)
  fibonacci.push(1)
  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]
  }
  const email = []
  const removeSameFibonacciNumbers = fibonacci.filter(
    (item, index) => fibonacci.indexOf(item) === index
  )
  for (const number of removeSameFibonacciNumbers) {
    if (number !== 0) {
      email.push(text[number])
    }
  }
  const tranformLettersArrayInString = email.toString()
  const emailWithoutChoma = tranformLettersArrayInString.replaceAll(',', '')
  const firstPart = emailWithoutChoma.slice(0, 5)
  const secondPart = emailWithoutChoma.slice(5, 10)
  const emailFounded = `${firstPart.toString().toLowerCase()}.${secondPart
    .toString()
    .toLowerCase()}`
  console.log('The result is:', emailFounded)
}

sequenciaDeFibonacci(12)
