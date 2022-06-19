def insertionSort(arr):
    order = int(input("for ascending order press 1\nfor descending order press 2\n>>>"))
    if order == 1:
        for i in range(1, 7):
            key = arr[i]
            j = i - 1
            while j >= 0 and key < arr[j]:
                arr[j + 1] = arr[j]
                j -= 1
            arr[j + 1] = key
            print(arr)
            print(arr[j], arr[i])

    elif order == 2:
        for i in range(1, 7):
            key = arr[i]
            j = i - 1
            while j >= 0 and key > arr[j]:
                arr[j + 1] = arr[j]
                j -= 1
            arr[j + 1] = key
            print(arr)
            print(arr[j], arr[i])
    else:
        print("---- Error ----")


arr = [10, 6, 15, 20, 2, 16, 8]


insertionSort(arr)
# for i in range(len(arr)):
#     print(arr[i], end=" ")
