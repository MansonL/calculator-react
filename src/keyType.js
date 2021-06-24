function isNumber(key) {
    return Number.isInteger(parseInt(key));
  }

export const keyType = (key,calculation) => {
    const length = calculation.length - 1;
    const error = (isNumber(calculation[length]) && isNumber(key)) || (!isNumber(calculation[length]) && !isNumber(key))
    const operator = /[/*-+]/.test(key)
    const operating = /\d/.test(key)
    switch (key){
        case 'Escape': return 'delete'
        case 'Backspace': return 'erase'
        case 'Enter':  return 'enter'
        default: return error ? 'none' :
        operator ? 'updateDisplay' :
        operating ? 'updateDisplay' : 'none'
    }
    
}