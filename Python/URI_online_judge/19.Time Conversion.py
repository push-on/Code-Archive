t = int(input())

h = t // 3600
r = t % 3600
m = r // 60
t = r % 60

print("{}:{}:{}".format(h,m,t))
