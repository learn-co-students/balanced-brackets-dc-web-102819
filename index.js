function isBalanced(string) {

    let open = []

    const chars = string.split('')

    let i = 0
    while (i < chars.length) {
        // debugger
        switch (chars[i]) {
            case '(':
                open.push(chars[i])
                break;
            case ')':
                if (open[open.length - 1] === '(') {
                    open.pop()
                    break;
                } else {
                    return false
                }
            case '{':
                open.push(chars[i])
                break;
            case '}':
                if (open[open.length - 1] === '{') {
                    open.pop()
                    break;
                } else {
                    return false
                }
            case '[':
                open.push(chars[i])
                break;
            case ']':
                if (open[open.length - 1] === '[') {
                    open.pop()
                    break;
                } else {
                    return false
                }
        }
        // console.log(char[i], open)
        i++
    }

    if (open.length === 0) {
        return true
    } else {
        return false
    }
}