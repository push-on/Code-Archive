p1 = input().split(" ")
c1 = input().split(" ")

code1, num1, price1 = p1
code2, num2, price2 = c1

payment = (int(num1) * float(price1)) + (int(num2) * float(price2))

print("VALOR A PAGAR: R$ %.2f" % payment)

