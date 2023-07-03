function print(event){
    let first_name=fname.value
    let middle_name=document.getElementById('mname').value
    let last_name=document.getElementById('lname').value
    let e_mail=document.getElementById('addr').value
    let birthday=document.getElementById('b-day').value
    let password=document.getElementById('pass').value
    let country=document.getElementById('std').value
    let mobile_no=document.getElementById('ph-no').value
    /*document.write(`your name is ${first_name} ${middle_name} ${last_name}<br>`)
    document.write(`your phone number is ${mobile_no}<br>`)
    document.write(`your birthday is ${birthday}<br>`)
    document.write(`your e-mail is ${e_mail}<br>`)
    document.write(`your password is ${password}<br>`)*/


event.preventDefault()
//console.log(event)
console.log(first_name)
/*console.log(middle_name)
console.log(last_name)
console.log(e_mail)
console.log(birthday)
console.log(password)
console.log(mobile_no)
}*/
}