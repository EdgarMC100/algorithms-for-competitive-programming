# Subsegment Reverse

| Time Limit | Memory Limit |
|------------|--------------|
|    2sec    |     1024MB   |

## Problemnt Statement
You are given positive integers N, L and R.
For a sequence A = (1,2,....,N) of length N, an operation of reversing the L-th through R-th elements was performed once.
Print the sequence after this operation.

## Constraints
- All input values are integers.
- 1 <= L <= R <= N <= 100

---

## Input
The inputs is given from Standard input in the following format:
```
N  L  R
```

## Output
Let A' = (A'~1, A'~2,...,A'~N) be the sequence after the operation. Print it in the following format: 
```
A'~1, A'~2,...,A'~N
```

Samples
<details>
<summary><b>Sample 1</b></summary>
Input

```
5  2  3
```

Output
```
1  3  2  4  5
```
Initially, A = (1,2,3,4,5).
After reversing the second through third elements, the sequence becomes (1,3,2,4,5), which should be printed.

</details>