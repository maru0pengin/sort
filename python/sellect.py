def sellect(arr):
  for i in range(len(arr)):
    _min = 9999999
    index = -1
    for j in range(i,len(arr)):
      if arr[j] < _min:
        index = j
        _min = arr[j]
    arr[i],arr[index] = arr[index],arr[i]
  return arr  

import random

ram = [random.randint(0,1000) for i in range(100)]

print(sellect(ram))