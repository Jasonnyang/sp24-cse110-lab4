1. It prints 3 because i is a var variable and can be accessed anywhere in the function and 3 is what i is set to after when it is logged 
2. It prints 150 because discountedPrice is a var variable and can be accessed anywhere in the function and 150 is the last value of discountedPrice before it is logged 
3. It prints 150 because final price is a var variable and can be accessed anywhere in the function and 150 is the last value of finalPrice before it is logged 
4. It returns [50, 100, 150] because that is what each of the finalPrices were equal to which got pushed into the array to be returned by the function 
5. It errors because i is a let and is only defined within the for loop but we are trying to access it outside of that for loop so it is not defined
6. It errors because discountedPrice is defined using let and is only accessible within the for loop 
7. It prints 150 because final price is defined outside of the loop and therefore it can be accessed when we want to log it
8. [50, 100, 150] because it takes each of the final prices and puts it into the discounted array which is printed out 
9. It errors because i is a let variable and it is not in scope when we are trying to log it to the console
10. 3 it prints out the length of prices and it is a const that is never changed so there is no issue
11. [50, 100, 150] it still calculates the discounted prices and doesn't use any out of scope variables
12. A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]
13. A. '32' 2 is converted into a string and concatenated 
    B. 1    3 is turned into an integer and then subtracted 
    C. 3    null becomes 0 and nothing is added to 3 
    D. '3null'  null turns into a string and is concatenated 
    E. 4    true has a value of 1 and is added to 3 
    F. 0    null has a value of 0 and false has a value of 0 and they are added
    G. '3undefined' undefined becomes a string and then concatenated
    H. NaN     undefined because you can't subtract a string and undefined
14. A. True     the value of 2 is greater than 1 
    B. False    the string 2 comes after 12 in alphabetical order 
    C. True     after 2 is converted into a string, both are equal
    D. False    they are not equal before typecasting 
    E. False    true has a value of 1 which is not equal to 2 even if you typecast 
    F. True     if you typecast 2 into a boolean then it becomes true 
15. The == operator compares after performing type conversion but === compares without performing type conversion
16. See js file 
17. modifyArray is called with [1, 2, 3] and the function doSomething. For each of the elements in the array, doSomething is called on the value and multiplies each input by 2 and puts it into newArr. Then the array [2, 4, 6] is returned. 
18. See js file 
19. 1 4 3 2 