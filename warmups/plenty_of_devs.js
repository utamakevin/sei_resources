/*
online dating service plentyofdevs.com was recently hacked and a list of its members was leaked on the interwebs.

dt
aden
allison
bern
callum
cath
felipe
jian
jimmy
linda
matt
naveen
ned
peter
sam
sannan
sara
stephen
stuart
tom
step 1
pick a reasonable data type to store this list in your program

step 2
dt prefer to use his "real" name misty rose. write code to replace dt in the list with misty rose

step 3
dt was the one who leaked the list. Naturally he removed himself from the list. use a built in array function to remove the first element from the list.

step 4
using a while loop iterate through the members list and console log each member with names that are 3 or 6 characters long each on a new line

*/



let arr = ["dt",
"aden", 
"allison", 
"bern", 
"callum", 
"cath", 
"felipe", 
"jian", 
"jimmy", 
"linda", 
"matt", 
"naveen", 
"ned", 
"peter", 
"sam", 
"sannan", 
"sara", 
"stephen", 
"stuart", 
"tom", 
]

arr[arr.indexOf("dt")] = "misty rose"

arr.shift()

let i = 0

while (i < arr.length) {
    if (arr[i].length === 3 || arr[i].length === 6) {
        console.log(arr[i])
    }
    i++
}

