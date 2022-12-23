const n = 10
let output = ""
for (let i = 0; i < n; i++) {
  if (i % 2) {
    output += " "
  }
  for (let j = 0; j < n; j++) {

    output += "# "
  }
  output += "\n"
}
console.log(output)