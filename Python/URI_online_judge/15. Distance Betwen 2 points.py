from math import sqrt

input_1 = input().split(" ")
input_2 = input().split(" ")

a, b = input_1
c, d = input_2

x1 = float(a)
y1 = float(b)
x2 = float(c)
y2 = float(d)

distance = sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2))

print("%.4f" % distance)
