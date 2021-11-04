def bubble(arr):
  change = True
  while change:
    change = False
    for i in range(len(arr)-1):
      if arr[i] > arr[i+1]:
        arr[i],arr[i+1] = arr[i+1],arr[i]
        change = True
  return arr
  
import random
ram = [random.randint(0, 1000) for i in range(100)]

print(bubble(ram))