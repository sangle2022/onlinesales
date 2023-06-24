#!/bin/bash
N=$1
if [ "$N" -lt 10 ]
then
        OUT=$((N*N))
elif [ "$N" -lt 20 ]
then
        OUT=1
        LIM=$((N - 10))
        for (( i=1; i<=LIM; i++ ))
        do
                OUT=$((OUT * i))
        done
else
        LIM=$((N - 20))
        OUT=$((LIM * (LIM + 1) / 2))
fi
echo $OUT




# Script (Python)

def compute(n):
    if n < 10:
        out = n ** 2
    elif n < 20:
        out = 1
        for i in range(1, n - 10 + 1):
            out *= i
    else:
        lim = n - 20
        out = lim * (lim + 1) // 2
    print(out)


n = int(input("Enter an integer: "))
compute(n)
