#### Maximum Reach 

You are given _N_ buildings and the height for each building. The height of the _i <sup>th</sup>_ building is denoted by by _h <sub>i</sub>_.

For each building, starting from _i_ = 1, your task is to determine the value of *max_reach*. To compute *max_reach* for a building, you must perform the following steps:

1. For building _i_, find the first building to the right which has a height higher than _h <sub>i</sub>_.
2. Move to that building and count it as one move.
3. Repeat step 1 and 2 until there are no buildings higher than the current one.
4. *max_reach* is the sum of all the moves from 1 to 3. 

__Input Format__

- First line: An integer _N_ denoting the number of buildings. 
- Next line: _N_ space-separated integers denoting the heights of buildings. 

__Output Format__

Print _N_ space-separated integers, where the _i <sup>th</sup>_ integer denotes *max_reach* of the _i <sup>th</sup>_ building. 

__Constraints__

- 1 <= _N_ <= 10<sup>5</sup>
- 1 <= _h <sub>i</sub>_ <= 10<sup>9</sup>
- 1 <= _i_ <= _N_

__Sample Input__

- 5
- 1 2 2 3 1

__Sample Output__

- 2 1 1 0 0

__Explanation__

__For building 1__: the first higher building height on the right is 2 with index 2(1 based indexing) and you move to  that building and count it as one move. The next higher building height on the right is 3 with index 4. You move there and count it as another move. After this building, there is no building higher than this, so you stop there. Since the total number of moves is 2, the answer is 2. 

__For buildings 2 and 3__: the first higher building on the right with height 3 is at index 4. The move to this building adds one to the count. Since there is no higher building than this, you stop here. Since there is only one move, the answer is one. 

__For building 4__: there is no building with height greater than 3, so there are no valid moves. The answer is 0. 

__For building 5__: there is no building to the right, so the answer is 0. 

