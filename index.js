
function miniMaxSum(nums) {
    nums.sort((a, b) => a - b);

    const { min, max } = nums.reduce((sum, cur, idx) => {
        if (idx === 0)
            sum.min += cur
        else if (idx === 4)
            sum.max += cur
        else {
            sum.min += cur
            sum.max += cur
        }


        return sum
    }, { min: 0, max: 0 })
    console.log(min, max);

    nums.forEach((x, _, arr) => {
        const tempArr = arr.filter(y => y !== x)
        console.log(`${x}: If we sum everything except ${x}, our sum is: ${tempArr.join(' + ')} = ${tempArr.reduce((s, cur) => s += cur, 0)}`)
    })
}

miniMaxSum([1, 2, 3, 4, 9]);
