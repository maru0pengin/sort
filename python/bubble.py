import random

ram = [random.randint(0, 1000) for i in range(100)]

for i in range(len(ram)):
    for j in range(len(ram)-1-i):
        if ram[j] > ram[j+1]:
            tem = ram[j]
            ram[j] = ram[j+1]
            ram[j+1] = tem

print(ram)
