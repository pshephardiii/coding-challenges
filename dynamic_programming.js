// just a light introduction

// method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions

// "dynamic programming" is a very misleading terms... just focus on the above

// only useful with an optimal substructure and overlapping subproblems

// OVERLAPPING SUBPROBLEMS

// a problem that can be broken down into subproblems which are reused several times
// example: fibonacci sequenece
// if you want fib(5), you need to add fib(4) and fib(3).  However, to get fib(4), you need to calculate fib(3) as it is part of the sum that results in fib(4).  So, you'd have to calculate fib(3) more than once, thus the overlapping of the subproblems
// MergeSort... no overlapping subproblems (unless there are exact repeating halves)

// OPTIMAL SUBSTRUCTURE