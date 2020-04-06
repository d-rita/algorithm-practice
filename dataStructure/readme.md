#### New Data Structure

__Implement a data structure that supports the following operations.__

_Note_: assume K provides good hashCode()

__void evict()__: Remove the eldest entry(the least recently accessed(add or get) entry).
__void add(K key, V value)__: Add items that match the key and value to the data structure.
__V get(K key)__: Returns the value of the item that matches the key. An exception occurs if no item is found.
__V remove(K key)__: Returns the value of the item that matches the key and then removes it from the data structure. An exception occurs if no item is found.

Each line of the input represents the commands that operate on the data structure. Parameters can be added to each command by separating them with a blank space. (Undefined commands are ignored until the next valid command.)
_evict_: Performs the evict operation described above. 
_add_: Performs the add operation described above. The first parameter represents the key, and the second parameter represents the value.
_get_: Performs the get operation using the first parameter as a key. Outputs the acquired results. If an exception occurs or no item is found, "-1" will be displayed.
_remove_: Performs the remove operation using the first parameter as a key. Outputs the acquired results. If an exception occurs or no item is found, "-1" will be displayed.
_exit_: Stops receiving new inputs, displays final output and quits.

You may be given an input as follows:
**_input_**
add 5 3
add 1 2
get 5
evict
get 1
remove 5
exit

output
Output the results of the processed commands. Results for each command are displayed on separate lines. 
Your program should output the following result when given the sample input above.
3
-1
3
