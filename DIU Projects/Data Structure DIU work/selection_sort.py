def selection(A):
    x = int(input("for ascending order press 1\nfor descending order press 2\n>>>"))
    if x == 1:
        for i in range(len(A)):
            min_idx = i
            for j in range(i + 1, len(A)):
                if A[min_idx] > A[j]:
                    min_idx = j
                    A[i], A[min_idx] = A[min_idx], A[i]
                print(A)
                print(A[j], A[i])
    elif x == 2:
        for i in range(len(A)):
            min_idx = i
            for j in range(i + 1, len(A)):
                if A[min_idx] < A[j]:
                    min_idx = j
                    A[i], A[min_idx] = A[min_idx], A[i]
    else:
        print("---- Error ----")

    print("Sorted List is: ")
    # Sorted List
    for i in range(len(A)):
        print(A[i], end=" ")

A = [10, 6, 15, 20, 2, 16, 8]

selection(A)
