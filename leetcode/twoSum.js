/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const hashTable = {}
    const targetIndices = []

    for(let i = 0; i < nums.length; i++) {
        const number = nums[i];
        const number2 = target - number
        
        if(hashTable[number2] !== undefined) {
            targetIndices.push(i, hashTable[number2])
            break
        }

        hashTable[number] = i
    }

    return targetIndices
};

console.log(twoSum([2,7,11,15], 9))

