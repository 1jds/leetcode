# This Repo Contains Some Notes and Practice Solutions to Leet Code Questions

## NOTES

### Problem 88. Merge Sorted Array

- For this problem of merging sorted arrays, one can work 'forwards' (i.e. 'left-to-right' or with a ++ increment) and add items from the two arrays in numerical ascending order to a third array which contains the final set of values to be returned.
- Alternatively, to facilitate sorting the arrays into the one larger array in place, one can work 'backwards' and put the largest value at the end of the longer array and work 'backwards' ( i-- ) from there.
