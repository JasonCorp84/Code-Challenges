// complete the function so that it conversts dash-delimited('kebab' case) & underscore-delimited ('snake' case) words into camel casing
// the first word within the output should be capitalized only if the original word was capitalized

function toCamelCase(str) {
  if (!str) {
    return ''
  } else {
    let replaced = str.replace(/- | _/g, '').split('')
    let solution = [replaced[0]]

    for (let i = 1; i < replaced.length; i++) {
      solution.push(replaced[i].substring(0,1).toUpperCase()+replaced[i].substring(1).toLowerCase())
    }
  }
  return solution.join('')
}

// another one
function toCamelCase(str) {
  let arr = str.split('')
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '-' || arr[i] === '_') {
      arr[i+1] = arr[i+1].toUpperCase()
      arr.splice(i, 2, arr[i+1].toUpperCase())
    }
  }
  return arr.join('')
}

// love that regex
function toCamelCase(str) {
  return str.replace(/([-_]\w)/g, (sel)=>{return sel[i].toUpperCase()})
}
