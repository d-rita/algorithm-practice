#### Most Free Time

Have the function MostFreeTime(strArr) read the _strArr_ parameter which will represent a full day and will be filled with events that span from time _X_ to time _Y_ in the day. The format of each event will be __hh:mmAM/PM-hh:mmAM/PM__. 

For example, strArr may be ["10:00AM-12:30PM", "02:00PM-02:45PM", "09:10AM-09:50AM"]. The program will have to output the longest amount of free time available between the start of the first event and the end of the last event in the format _hh:mm_.
The start event should be the earliest event in the day and the last event should be the latest event in the day.
The output for the previous input would therefore be _01:30_(with the earliest event in the day starting at 09:10AM and the latest event ending at 02:45PM). The input will contain at least 3(three) events, and the events may be out of order. 

##### Examples:

Input: newString[]
{"12:15PM-02:00PM", "09:00AM-10:00AM", "10:30AM-12:00PM"}
__Output__: _00:30_

Input: newString[]
{"12:15PM-02:00PM", "09:00AM-12:11PM", "02:02PM-04:00PM"}
__Output__: _00:04_
