function checkPossibility(nums: number[]): boolean {
    let count = 0
    let last = nums[0]
    
    for(let i = 0; i < nums.length - 1; i++) {
        if(count > 1) {
            return false
        }
        
        const left = nums[i]
        const right = nums[i+1]
        
        if(left > right) {
            count++
            if(right >= last || i === 0) {
                nums[i] = right
            } else {
                nums[i+1] = left
            }
        }
        
        last = nums[i]
    }
    
    return count <= 1
};
