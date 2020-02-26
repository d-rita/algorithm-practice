#### Students and Pencils

There are _N_ students in a class. They are seated on benches which are numbered from 1 to _N_. The student on the _i<sup>th</sup>_ be bench is _S<sub>i</sub>_. Each student is asked to bring a pencil. There are three different types of pencil brands: _P<sub>1</sub>_, _P<sub>2</sub>_ and _P<sub>3</sub>_. The prices of these pencils vary when each student visits the dealer to buy a pencil. So, when the student _S<sub>i</sub>_  visits the dealer, the prices of the pencils are _C<sub>i1</sub>_, _C<sub>i2</sub>_ and _C<sub>i3</sub>_ for _P<sub>1</sub>_, _P<sub>2</sub>_ and _P<sub>3</sub>_, respectively. 

__Note:__ Two neighbouring students cannot buy the same pencil. Two students are considered to be neighbours if their bench numbers differ by atmost 1. 

Your task is to determine the pencil that a student can buy such that the total cost is minimised. _Also_, print the total minimum cost of all pencils at the end. 

__Input Format__

- _First line_: _N_ denoting the total number of students.
- Next _N_ lines: Three space-separated integers _C<sub>i1</sub>_, _C<sub>i2</sub>_ and _C<sub>i3</sub>_ denoting the cost of pencils when the student _S<sub>i</sub>_ visits the dealer. 

__Output Format__

Print one integer denoting the minimum total cost of all the pencils. 

__Constraints__

- 1 <= _N_ <= 10<sup>5</sup>
- 1 <=  _C<sub>ij</sub>_ <= 100 where 1 <= _i_ <= _N_ and 1 <= _j_ <= 3. 


__Sample Input__

- 2 
- 2 1 1
- 3 2 2

__Sample Output__

3

__Explanation__

Student _S<sub>1</sub>_ buys pencil _P<sub>2</sub>_ for _C<sub>12</sub>_ =  1, and _S<sub>2</sub>_ buys pencil _P<sub>3</sub>_ for _C<sub>23</sub>_ =  2. So, total _C<sub>12</sub>_ + _C<sub>23</sub>_  = 3. 
