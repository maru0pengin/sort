if (require.main === module) {
  main()
}

function quick(arr) {
  let right = []
  let left = []
  if (arr.length <= 1) {
    return arr
  }
  let ref = arr[0]
  let ref_count = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < ref) {
      left.push(arr[i])
    } else if (arr[i] > ref) {
      right.push(arr[i])
    } else {
      ref_count++
    }
  }
  left = quick(left)
  right = quick(right)

  ref_array = []

  for (let i = 0; i < ref_count; i++) {
    ref_array.push(ref)
  }

  tem = ref_array.concat(right)

  tem2 = left.concat(tem)

  return tem2
}

function main() {
  let ram = []
  for (let i = 0; i < 10; i++) {
    ram[i] = Math.floor(Math.random() * 100)
  }
  console.log(ram)
  console.log(quick(ram))
}
