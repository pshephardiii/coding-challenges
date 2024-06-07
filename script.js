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

// Challenge 4

function aVeryBigSum(ar) {
    let sum = 0
    for (let i = 0; i < ar.length; i++) {
        sum = sum + ar[i]
    }
    return sum
}

// Challenge 5

function diagonalDifference(arr) {
    let n = arr[0].length
    let topLeft = arr[0][0]
    let bottomLeft = arr[n-1][0]
    let topRight = arr[0][n-1]
    let bottomRight = arr[n-1][n-1]
    
    let sum1 = topLeft + bottomRight
    let sum2 = topRight + bottomLeft
    
    let diagUpRight = 0
    let diagUpLeft = 0
    
    for (let i = 1; i < n-1; i++) {
        diagUpRight = diagUpRight + arr[n-(i+1)][i]
        diagUpLeft = diagUpLeft + arr[i][i]
    } 
    sum1 = sum1 + diagUpLeft
    sum2 = sum2 + diagUpRight
    
    let absDiff = sum1 - sum2
    if (absDiff < 0) {
        absDiff = absDiff * -1
    }
    
    return absDiff
}

// Challenge 6

function plusMinus(arr) {
    let ratioPos = 0
    let ratioNeg = 0
    let ratioZero = 0
    let numPos = 0
    let numNeg = 0
    let numZero = 0
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0){
            numPos++
        } else if (arr[i] < 0){
            numNeg++
        } else {numZero++}
    }
    
    ratioPos = numPos/arr.length
    ratioNeg = numNeg/arr.length
    ratioZero = numZero/arr.length
    let ratioPosPrec = ratioPos.toPrecision(6)
    let ratioNegPrec = ratioNeg.toPrecision(6)
    let ratioZeroPrec = ratioZero.toPrecision(6)
    console.log(ratioPosPrec)
    console.log(ratioNegPrec)
    console.log(ratioZeroPrec)
}

// Challenge 7

function staircase(n) {
    let stairs = ''
    for (let i = 1; i < n + 1; i++) {
        if (i === (n)) {
            stairs = stairs.concat(''.padStart(n, "#"))
        } else {
            let add = ''
            let space = add.padStart(n - i, ' ')
            let pad = space.padEnd(n, '#')
            let newLine = pad.padEnd(n + 1, '\n')
            stairs = stairs.concat(newLine)
        }
    }
    console.log(stairs)
}

// Challenge 8: miniMaxSum

function miniMaxSum(arr) {
    let sumArr = []
    let n = arr.length
    
    for (let i = 0; i < arr.length; i++) {
        let overArr = arr.slice(i + 1, arr.length)
        let underArr = arr.slice(0, i)
        let newArr = overArr.concat(underArr)
        let sum = newArr[0] + newArr[1] + newArr[2] + newArr[3]
        sumArr.push(sum)
    }
    
    let maxSum = Math.max(...sumArr)
    let minSum = Math.min(...sumArr)
    let final = minSum + " " + maxSum
    console.log(final)
}

// Challenge 9

function birthdayCakeCandles(candles) {
    let maxHeight = Math.max(...candles)
    let num = candles.filter((candle) => candle === maxHeight)
    return num.length
}

// Challenge 10

function timeConversion(s) {
    let arrReview = []
    let arr = s.split('')
    if (s.includes('P')) {
        if (arr[0] != '1' || arr[1] != '2') {
            let strArr = [arr[0], arr[1]]
            let str = strArr.join('')
            let num = parseInt(str)
            let newNum = num + 12
            let newStr = newNum.toString()
            let newStrArr = newStr.split('')
            let arrRest = arr.slice(2)
            arrReview = newStrArr.concat(arrRest)
        } else {arrReview = arr}
    } else if (s.includes ('A')) {
        if (arr[0] == '1' && arr[1] == '2') {
            let str = '00'
            let newStrArr = str.split('')
            let arrRest = arr.slice(2)
            arrReview = newStrArr.concat(arrRest)
        } else {arrReview = arr}
    }
    arrReview.pop()
    arrReview.pop()
    let newS = arrReview.join('')
    return newS
}

// Challenge 11

function gradingStudents(grades) {
  
    for (let i = 0; i < grades.length; i++) {
        if ((grades[i] % 5 > 2) && (grades[i] > 37)) {
            if (grades[i] % 5 === 3) {
                grades[i] = grades[i] + 2
            } else if (grades[i] % 5 === 4) {
                grades[i]++
            }
        }
    }
    return grades
}

// Challenge 12

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    
    let appleSum = 0
    let orangeSum = 0
    let maxArr = Math.max(apples.length, oranges.length)
   
    for (let i = 0; i < maxArr; i++) {
        let appleLanding = a + apples[i]
        let orangeLanding = b + oranges[i]
        if (appleLanding >= s && appleLanding <= t) {
            appleSum++
        }
        if (orangeLanding >= s && orangeLanding <= t) {
            orangeSum++
        }
    }
    console.log(appleSum)
    console.log(orangeSum)
}

// Challenge 13

function kangaroo(x1, v1, x2, v2) {
    let sum1 = x1
    let sum2 = x2
    let max = 0
    
    if (x1 > x2) {
        max += x1
    } else if (x2 > x1) {
        max += x2
    } else { return 'YES' }
    
    if (x1 > x2 && v1 >= v2) {
        return 'NO'
    } else if (x2 > x1 && v2 >= v1) {
        return 'NO'
    }
    
    while (max >= sum1 && max >= sum2) {
        if (max == sum1) {
            max += v1
        } else if (max == sum2) {
            max += v2
        }
        sum1 += v1
        sum2 += v2
        if (sum1 == sum2) {
            return 'YES'
        } 
    }
    return 'NO'
}

// Challenge 14 - I'm sure there's a more elegant way to do this one!

function getTotalX(a, b) {
    
    let bMin = Math.min(...b)
    let aMax = Math.max(...a)

    let intArr = []
    let firstReqArr = []
    let bothReqArr = []

    for (let i = aMax; i <= bMin; i++) {
        intArr.push(i)
    }

    for (let i = 0; i < intArr.length; i++) {
  
        for (let j = 0; j < a.length; j++) {
            if (intArr[i] % a[j] === 0) {
                if (j + 1 === a.length) {
                    firstReqArr.push(intArr[i])
                } else if (j + 1 !== a.length) {
                    continue
                }
            } else {break}
        }
    }

    for (let i = 0; i < firstReqArr.length; i++) {
  
        for (let j = 0; j < b.length; j++) {
            if (b[j] % firstReqArr[i] === 0) {
                if (j + 1 === b.length) {
                    bothReqArr.push(firstReqArr[i])
                } else if (j + 1 !== b.length) {
                    continue
                }
            } else {break}
        }
    }

    return(bothReqArr.length)
}

// Challenge 15

function breakingRecords(scores) {
    let max = scores[0]
    let min = scores[0]
    
    let countMax = 0
    let countMin = 0
    
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > max) {
            countMax++
            max = scores[i]
        } else if (scores[i] < min) {
            countMin++
            min = scores[i]
        }
    }
    
    let returnArr = [countMax, countMin]
    return returnArr
}

// Challenge 16

function birthday(s, d, m) {

    let count = 0
    
    function sumArr(arr) {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum = sum + arr[i]
        }
        return sum
    }
    
    for (let i = 0; i < s.length; i++) {
        if (m > s.length) {
            break
        }
        let subArr = s.slice(i, m)
        let total = sumArr(subArr)
        if (total === d) {
            count++
            m++
        } else { 
            m++
            continue 
        }
    }

    return count
}

// Challenge 17

function divisibleSumPairs(n, k, ar) {
    
    let count = 0
    
    for (let i = 0; i < ar.length; i++) {
        
        for (let j = i + 1; j < ar.length; j++) {
            let sum = ar[i] + ar[j]
            if (sum % k === 0) {
                count++
            }
        }
    }
    
    return count
}

// Challenge 18 - needed some help to get the runtime down

function climbingLeaderboard(ranked, player) {
  
    let rankingArr = []
    let uniqueRanks = [ranked[0]]
    
    for (let i = 1; i< ranked.length; i++) {
        if (ranked[i] !== uniqueRanks[uniqueRanks.length-1]) {
            uniqueRanks.push(ranked[i])
        }
    }
    
    let index = uniqueRanks.length - 1
    
    for (let i = 0; i < player.length; i++) {

        while (player[i] >= uniqueRanks[index]) {
            index--
        }
        let rank = index + 2
        rankingArr.push(rank)
    }
    return rankingArr
}

// Challenge 19

function dayOfProgrammer(year) {
    
    if (year === 1918) {
        return '26.09.1918'
        
    } else if (year <= 1917) {
        
        if (year % 4 === 0) {
            return `12.09.${year}`
        } else {
            return `13.09.${year}`
        }
        
    } else if (year >= 1919) {
        
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            return `12.09.${year}`
        } else {
            return `13.09.${year}`
        }
    }
}

// Challenge 20

function bonAppetit(bill, k, b) {
    
    function fullSum(arr) {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum
    }
    
    function difference (n1, n2) {
        let diff = n1 - n2
        if (diff < 0) {
            diff = diff * -1
        }
        return diff
    }
    
    let billSum = fullSum(bill)
    let fairInt = (billSum - bill[k]) / 2
    
    if (fairInt < b) {
        console.log(difference(fairInt, b))
    } else {
        console.log('Bon Appetit')
    }
}

// Challenge 21

function sockMerchant(n, ar) {
    
    let counter = {}
    let pairs = 0
    
    for (let i = 0; i < ar.length; i++) {
        let num = ar[i]
        counter[num] = (counter[num] || 0) + 1
    }
    
    for (let key in counter) {
        let div = counter[key] / 2
        pairs += Math.floor(div)
    }
    
    return pairs
}

// Challenge 22

function migratoryBirds(arr) {
    
    let counter = {}
    let max = 0
    let maxKey = 0
    
    for (let int of arr) {
        counter[int] = (counter[int] || 0) + 1
    }
    
    for (let key in counter) {

        if (counter[key] > max) {
            max = counter[key]
            maxKey = key
        }

        if (counter[key] === max) {
            if (key < maxKey) {
                maxKey = key
            }
        }
    }
    
    return maxKey
}

// Challenge 23

function pageCount(n, p) {
    
    let frontFlip = 0
    let backFlip = 0
    
    for (let i = 0; i <= n; i = i + 2) {
        if (i === p || i + 1 === p) {
            break
        } else {
            frontFlip++
        }
    }
    
    for (let i = n; i >= 0; i = i - 2) {

        if (n % 2 === 0) {
            if (i === p || i + 1 === p) {
                break
            } else {
                backFlip++
            }

        } else {
            if (i === p || i - 1 === p) {
                break
            }
            else {
                backFlip++
            }
        }
    }
    
    let minFlip = Math.min(frontFlip, backFlip)
    return minFlip
}

