function longestPalindrome(s: string): string {
    let res = ""
    let count = 0
    
    for(let i = 0; i<s.length; i++) {
        let left = i
        let right = i
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            if(right - left + 1 > count) {
                res = s.slice(left, right+1)
                count = right - left + 1
            }
            left--
            right++
        }
        
        left = i
        right = i+1
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            if(right - left + 1 > count) {
                res = s.slice(left, right+1)
                count = right - left + 1
            }
            left--
            right++
        }
    }
        
    return res
};