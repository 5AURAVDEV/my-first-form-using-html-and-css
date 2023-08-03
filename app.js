/*function print(event){
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
    document.write(`your password is ${password}<br>`)


event.preventDefault()
//console.log(event)
console.log(first_name)
console.log(middle_name)
console.log(last_name)
console.log(e_mail)
console.log(birthday)
console.log(password)
console.log(mobile_no)
}*/



/*function print_details(event){
    event.preventDefault()
    localStorage.setItem('first_name',document.getElementById('fname').value)
    localStorage.setItem('middle_name',document.getElementById('mname').value)
    localStorage.setItem('last_name',document.getElementById('lname').value)
    localStorage.setItem('bithday_name',document.getElementById('b-day').value)
    localStorage.setItem('e-mail',document.getElementById('addr').value)
}*/

let myform=document.getElementById("myform")
myform.addEventListener("submit",print_details)

function print_details(event){
    event.preventDefault()
    let user={
        first_name:document.getElementById('fname').value,
        last_name:document.getElementById('lname').value,
        email:document.getElementById('addr').value
    }
    let userdetails=JSON.stringify(user)
    localStorage.setItem(`${user.email}`,userdetails)

    let x=document.getElementById("added")
    let li=document.createElement("li")
    li.className="newadd"
    li.innerText=userdetails
    let btn=document.createElement("button")
    btn.setAttribute("type","button")
    btn.className="xxx"
    btn.innerText="del"
    li.appendChild(btn)
    x.appendChild(li)
    btn.addEventListener("click",remove_details)
}
/*let a=document.getElementById("added")
a.addEventListener("click",function (event){
    if(event.target.className.includes("xxx")){
        remove_details(event)
    }
})*/
function remove_details(event) {
    let b=event.target.parentElement
    let key=b.innerText.replace("del","")
    let detail=JSON.parse(key)
    let k=detail.email
    localStorage.removeItem(k)
    b.style.display="none"
}