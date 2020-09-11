#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Python Built-In Functions / Methods Cheatsheet

Source: Introduction to Computation and Programming Using Python 
        (2nd edition) by John V. Guttag -- used in MIT 6.0001(OCW)

@author: Ellie Nguyen github.com/ellienguyendev
"""

# ***** note: output of each method based on original assignment ***** #


############## STRINGS ############## 

s = 'hello this is me'
s1 = 'e'

old = s1
new = 'E'

s.count(s1)  # counts how many times the string s1 occurs in s
             # Out: 2

s.find(s1)   # returns the index of the first occurence of the substring s1 in s, if not found returns -1
             # Out: 1
             
s.rfind(s1)  # same as find, but starts from the end of s
             # Out: 15
             
s.index(s1)  # same as find, but raises and exception if s1 is not in s
                
s.rindex(s1) # same as index, but starts from the end of s

s.lower()    # converts all uppercase letters in s to lowercase 

s.rstrip()   # removes trailing white space from s 

s.split('d') # splits s into a list of substrings using d as a delimeter. If d is omitted, the substrings are separated by whitespace characters
             # Out: ['hello', 'this', 'is', 'me']
 
s.replace(old, new) # replaces all occurances of the string old in s with the string new
                    # Out: 'hEllo this is mE'
        

############## LISTS ############## 

L = [1,2,3,4,4]
L1 = [5,5,5]
e = 4
i = 0

L.append(e)   # adds the object e to the end of L
              # Out: [1,2,3,4,4,4]

L.count(e)    # returns the number of times that e occurs in L
              # Out: 2
             
L.insert(i,e) # inserts the object e into L at index i
              # Out: [4,1,2,3,4,4]
              
L.extend(L1)  # adds the items in list L1 to the end of L
              # Out: [1,2,3,4,4,5,5,5]
              
L.remove(e)   # deletes the first occurance of e from L
              # Out: [1,2,3,4]
              
L.index(e)    # returns the index of the first occurance of e in L, raises an exception if e is not in L
              # Out: 3
              
L.pop(i)      # removes and returns the item at index i in L, raises an exception if L is empty
              # if i is omitted, it defaults to -1 to remove and return the last element of L
              # Out: [1,2,3,4]
              
L.sort()      # sorts the elements of L in ascending order

L.reverse()   # reverses the order of the elements in L
              # Out: [4,4,3,2,1]
              
'g'.join(L)   # joins elememnts of list together as a string using g as a glue. If g is omitted, elements are joined together with nothing in between
              # Out: '*'.join(L1) --> '555'
              
############## OTHER ############## 

L2 = [1,2,3]
L3 = [4,5,6]

map(lambda x,y: x*y, L2, L3) # Out: [4,10,18]

""" seq represents strings, lists, tuples, or ranges """

seq[i]          # returns the ith element in the sequence

len(seq)        # returns the length of the sequence

seq1 + seq2     # returns the concatenation of the two sequences (not available for ranges)

n*seq           # returns a sequence that repeats seq n times (not available for ranges)

seq[start:end]  # returns a slice of the sequence 

e in seq        # is True if e is contained in the sequence and False otherwise

e not in seq    # is True if e is not in the seequence and False otherwise

for e in seq    # iterates over the elements of the sequence

