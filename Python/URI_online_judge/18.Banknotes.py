cash_in = int(input())
print(cash_in)
change = [100, 50, 20, 10, 5, 2, 1]

def mouney_counter(given_money, money_ammount):
    counter = 0
    while given_money >= money_ammount:
        given_money -= money_ammount
        counter += 1
    return counter,given_money

for x in change:
    f,z = mouney_counter(cash_in, x)
    print("{} nota(s) de R$ {},00".format(f,x))
    cash_in = z




