def insertionSort(arr):
    p = int(input("for ascending order press 1\nfor descending order press 2\n>>>"))
    if p == 1:
        for i in range(1, inp):
            key = arr[i]
            j = i - 1
            while j >= 0 and key < arr[j]:
                arr[j + 1] = arr[j]
                j -= 1
            arr[j + 1] = key
    elif p == 2:
        for i in range(1, inp):
            key = arr[i]
            j = i - 1
            while j >= 0 and key > arr[j]:
                arr[j + 1] = arr[j]
                j -= 1
            arr[j + 1] = key
    else:
        print("---- Error ----")


arr = []
inp = int(input("Enter the Number of items and the list: "))
for i in range(inp):
    p = int(input())
    arr.append(p)
insertionSort(arr)
for i in range(len(arr)):
    print(arr[i], end=" ")
