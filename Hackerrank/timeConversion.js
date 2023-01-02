//Parse all the times in AM/PM to normal time. 

function timeConversion(s) {
    // Write your code here
    let change = /PM/.test(s)
    let m = s.slice(0,8).split(":")
    m.forEach(i => parseInt(i))
    
    if (m[0]==12){
        m[0]="00"
    }
    if (change){
        m[0]=Number(parseInt(m[0])+12)
    }
    console.log(m.join(":"))
    return m.join(":")
    
}
