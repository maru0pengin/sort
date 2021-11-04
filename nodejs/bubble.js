if (require.main === module) {
  main()
}

function bubble(arr) {
  let change = true
  while (change) {
    change = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        tem = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = tem
        change = true
      }
    }
  }
  return arr
}

function main() {
  ram = []
  for (let i = 0; i < 100; i++) {
    Math.random()
    ram[i] = Math.floor(Math.random() * 1000)
  }
  console.log(ram)
  console.log(bubble(ram))
}
