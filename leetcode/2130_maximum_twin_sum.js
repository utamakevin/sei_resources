function maxTwinSum(head) {
    let twinSums = []

    for (i = 0; i <= (head.length / 2) - 1; i++) {
        twinSums.push(head[i] + head[head.length - 1 - i])
    }
    
    return Math.max(...twinSums)
}

console.log(
    maxTwinSum([5, 4, 2, 1]),
    maxTwinSum([4, 2, 2, 3]),
    maxTwinSum([1, 100000]),
    maxTwinSum([4, 2, 2, 3, 6, 6]),
)