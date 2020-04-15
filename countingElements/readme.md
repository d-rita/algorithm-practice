#### Counting Elements

Given an integer array _arr_, count element _x_ such that _x + 1_ is also in arr.
If there're duplicates in arr, count them separately.

__Example 1:__

Input: arr = [1,2,3]
Output: 2
Explanation: 1 and 2 are counted cause 2 and 3 are in arr.


__Example 2:__

Input: arr = [1,1,3,3,5,5,7,7]
Output: 0
Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.


__Example 3:__

Input: arr = [1,3,2,3,5,0]
Output: 3
Explanation: 0, 1 and 2 are counted cause 1, 2 and 3 are in arr.


__Example 4:__

Input: arr = [1,1,2,2]
Output: 2
Explanation: Two 1s are counted cause 2 is in arr.
 

__Constraints:__

1 <= arr.length <= 1000
0 <= arr[i] <= 1000

__Hint #1__: Use hashset to store all elements.

__Hint #2__: Loop again to count all valid elements.
