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

// a problem where the optimal solution can be constructed from optimal solutions of its subproblems
// ex. fibonnaci
// to get fib(5), you need the optimal solutions for fib(4), fib(3), etc... that is, you can use the optimal solutions of the subproblems to get the solution for the problem itself

// another example: shortest path
// To get the shortest path from A to E, you need to start by finding the shortest path to, say, A to B, then B to some other node, ending at E.  It works like the loop in Dijkstra's algorith... to find the shortest overall path, need to find shortest path for every step along the way

