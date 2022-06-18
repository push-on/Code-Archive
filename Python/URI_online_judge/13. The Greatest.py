numbers = input().split(" ")
x, y, z = numbers
a = int(x)
b = int(y)
c = int(z)

p = ((a + b) + abs(a - b)) / 2
q = ((p + c) + abs(p - c)) / 2

print(int(q),"eh o maior")
