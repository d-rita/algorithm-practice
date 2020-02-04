#### Error Digit Range

A system reconstructs an integer that is input into it but by possibly misinterpreting any of the digits(from 0-9) in the input. for example, if the digit misinterpreted as 9, and the input being 11891, the system would reconstruct it as 99899. Given an input integer *num*, find the difference between the maximum and minimum possible reconstructions. 

Note:
- Any reconstruction cannot change the number of significant digits in the integer. 
- The first digit of the number can't be interpreted to be 0.


##### Function Description

Complete the *findRange* function. The function must return a long integer denoting the difference between the maximum and minimum possible reconstructions. 

*findRange* has the following parameter(s):
    *num*: An integer, which is the integer input to the system.


##### Constraints:

- *1 <= num <= 10^9*

