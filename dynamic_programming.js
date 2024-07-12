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

// Problem without dynamic programming:

// calculating fibonacci numbers with recursion

function fibBad(n) {
    if (n <= 2) return 1
    return fibBad(n-1) + fibBad(n-2)
}

// Big O of simple recursion solution

// it's very slow!
// O(2 ^ N)... even worse than quadratic!

// What's the problem?
// Spoiler: we aren't reusing solutions to subproblems (we are calculating fib(5) a TON to get to, say, fib(30))

// MEMOIZATION

// storing the results of expensive function calls and returning the cached result when the same inputs occur again

function fib(n, memo=[]) {
    // we have saved results from previous subproblems, so check if we have solved a problem and return the solution if we have
    if(memo[n] !== undefined) return memo[n]
    // the first two fib numbers are 1, so return 1 if n is either
    if (n <= 2) return 1
    // define res as the addition of two previous fib numbers, but input the current memo so that we can check if for stored solutions for those numbers
    let res = fib(n - 1, memo) + fib(n - 2, memo)
    // set the memo at the index of the current n to be res, which triggers the recursive calling of the function on the two previous fib numbers, checking the memo for their solutions, and on and on
    memo[n] = res
    // we return res, which won't happen until all of the solutions to the subproblems have been recorded in memo along with the overarching solution for our original input
    return res
}

// Big O:
// O(N)... much better