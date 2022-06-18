let num = 123456789,
	sdigits = num.toString(),
	digits = []

for (let entry of sdigits) {
    digits.push(Number(entry))
}
console.log()