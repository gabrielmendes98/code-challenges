// function removeDuplicates(s: string, k: number): string {
//     let count = 0
//     let last = null
    
//     for(let i=0;i<s.length;i++) {
//         if(last === s[i]) {
//             count++
//         } else {
//             last = s[i]
//             count = 1
//         }
        
//         if(count === k) {
//             if(i < k) {
//                 s = s.slice(k)
//             } else {
//                 s = s.slice(0, i-k+1) + s.slice(i+1)
//             }
//             count = 0
//             last = null
            
//             const offset = i-k-(k-1)
            
//             if(offset < -1) {
//                 i=-1
//             } else {
//                 i=offset
//             }
//         }
        
//     }
    
//     return s
// };

function removeDuplicates(s: string, k: number): string {
    const stack: {val: string, count: number}[] = []
    
    for(let c of s.split('')) {
        const lastIndex = stack.length - 1
        if(stack[lastIndex]?.val === c) {
            stack[lastIndex].count++ 
        } else {
            stack.push({val: c, count: 1})
        }
        
        if(stack[lastIndex]?.count === k) {
            stack.pop()
        }
    }
    
    const result: string[] = []
    
    for(let item of stack) {
        result.push(item.val.repeat(item.count))
    }
    
    return result.join('')
};

