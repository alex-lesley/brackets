function brec(string, count=0) {
    if(string.length==0) {
        return (count==0) 
    }
    if(count<0) {
        return false
    } 
    if(string[0]=="(") {
        count++
    } else if(string[0]==")") {
        count--
    }
    return brec(string.substring(1), count)
}

console.log(brec("(sdf() sfdg(dfdsa)dsfasdf)"))