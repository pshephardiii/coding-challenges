// Challenge 1

function solveMeFirst(a, b) {
  if (a >= 1 && a <= 1000 && b >= 1 && b <= 1000) {
      return a + b
  }
}

// Challenge 2

function simpleArraySum(ar) {
    let sum = 0
    for (let i = 0; i < ar.length; i++){
        sum = sum + ar[i]
    }
    return sum
}

// Challenge 3

function compareTriplets(a, b) {
    let finalArr = [0, 0]
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            finalArr[0]++
        } else if (b[i] > a[i]) {
            finalArr[1]++
        } else {continue}
    }
    return finalArr
}