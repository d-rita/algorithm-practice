#### CountMoves exercise
jessica has an array of numbers consisting of n integers. She  plays a game with the array where, in each move, she selects (n-1) elements and  increments their value  by 1. She wants to  know the minimum number of moves required to make all the  array elements equal. 

For example, if n = 5, and her array is [3,4,6,6,3], she chooses 4 of the  5 elements during each move and increments each of their values by one. Indexing starts at 1

| Iteration  | |
|------------|-------------|
| 0 | [3,4,6,6,3] |
| 1 | [4,5,7,6,4] |
| 2 | [5,6,7,7,5] |
| 3 | [6,7,8,7,6] |
| 4 | [7,8,8,8,7] |
| 5 | [8,9,9,8,8] |
| 6 | [9,10,9,9,9] |
| 7 | [10,10,10,10] |

#### Function Description 
Complete the function countMoves(). It must return an integer denoting the minimum  number of moves required to make the elements equal. 

countMoves() has the following parameters:
numbers[num[0],....num[n-1]]: an array of integers

Constraints:
- 1 <= n <= 10^5
- 1 <= numbers[i] <=10^6

