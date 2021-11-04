def quick(arr):
  right=[]
  left = []
  
  if len(arr) <=1:
    return arr
  
  ref = arr[0]
  ref_count = 0
  
  for ele in arr:
    if ele < ref:
      left.append(ele)
    elif ele > ref:
      right.append(ele)
    else:
      ref_count +=1
    
  left = quick(left)
  right = quick(right)
  
  return left + [ref]*ref_count + right


import random

ram = [random.randint(0,1000) for i in range(30)]
print(ram)
print(quick(ram))