#### Compliance Crawler Directory Reset

A compliance crawler utility is used to search out for compliance issues in the file system of any computer starting from the main directory. 

A logger logs every time a move operation is performed by the utility. The operations that the utility can perform are given below:-

1. *"../"*: move to the parent folder of the current folder
2. *"./"*: Remain in the same folder
3. *"/x"*: Move to the child folder named *x*


The crawler now has to go back to the main directory as part of a reset operation. Find the minimum steps required to go back to the main directory from the current folder(the folder reached after all the moves have been performed). The logged sequence of operations performed by the utility after entering the main directory is provided. 

NOTE: The crawler never tries to go the parent of the main directory. 

##### Function Description

Complete the *__minimumSteps__* function in the editor below. **The function must return an integer denoting the minimum number of moves.**
