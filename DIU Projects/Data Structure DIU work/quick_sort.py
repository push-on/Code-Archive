def partition(arr, low, high):
    i = low - 1
    pivot = arr[high]
    if x == 1:
        for j in range(low, high):
            if arr[j] < pivot:
                i = i + 1
                arr[i], arr[j] = arr[j], arr[i]
        arr[i + 1], arr[high] = arr[high], arr[i + 1]
        return i + 1
    elif x == 2:
        for j in range(low, high):
            if arr[j] > pivot:
                i = i + 1
                arr[i], arr[j] = arr[j], arr[i]
        arr[i + 1], arr[high] = arr[high], arr[i + 1]
        return i + 1
    else:
        print("---Error---")

def quickSort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)

        quickSort(arr, low, pi - 1)
        quickSort(arr, pi + 1, high)


arr = []
inp = int(input("Enter the Number of items and the list: "))
for i in range(inp):
    p = int(input())
    arr.append(p)
x = int(input("for ascending order press 1\n for descending order press 2\n>>>"))
n = len(arr)
quickSort(arr, 0, n - 1)
print("Sorted List is: ")
for i in range(n):
    print(arr[i], end=" ")
