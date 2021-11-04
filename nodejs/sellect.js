if (require.main === module) {
  main()
}

function select(arr) {
  for (let i = 0; i < arr.length; i++) {
    let index = -1
    let min = 9999999999
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        index = j
        min = arr[j]
      }
    }
    tem = arr[index]
    arr[index] = arr[i]
    arr[i] = tem
  }
  return arr
}

function main() {
  ram = []
  for (let i = 0; i < 10; i++) {
    ram[i] = Math.floor(Math.random() * 100)
  }
  console.log(ram)
  console.log(select(ram))
}
