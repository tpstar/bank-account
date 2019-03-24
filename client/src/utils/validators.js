export const required = value => (value ? undefined : 'This field is required.')

export const validateRoutingNumber = rawNumber => {
  const error = 'The input is not a valid bank routing number.'
  // console.log((typeof rawNumber) === "string")
  let number = rawNumber.trim()

  if (!number) { //empty spaces
    return error;
  }

  while (number.length < 9) {
    number = '0' + number //in case the user skip zeros in the front digits, make it a nine digit number
  }

  const isNineDigits = number.match("^\\d{9}$")

  if (!isNineDigits) {
    return error;
  }

  // The first two digits of the nine digit ABA routing transit number (RTN) must be in the ranges 00 through 12, 21 through 32, 61 through 72, or 80.
  const fistTwoDigits = parseInt(number.slice(0, 2))

  const between = (x, min, max) => (x >= min && x <= max)

  const validateFistTwoDigits = between(fistTwoDigits, 0, 12) || between(fistTwoDigits, 21, 32) || between(fistTwoDigits, 61, 72) || (fistTwoDigits === 80)
  if (!validateFistTwoDigits) {
    return error;
  }

  // checksum test: The following condition must hold; 3(d1 + d4 + d7) + 7(d2 + d5 + d8) + (d3 + d6 + d9) % (modulo) 10 = 0
  const weights = [3, 7, 1]
  let sum = 0;
  for (let i=0; i<9; i++) {
    sum += parseInt(number[i]) * weights[i%3]
  }

  if ((sum % 10) !== 0) {
    return error;
  }

  return undefined;
}
