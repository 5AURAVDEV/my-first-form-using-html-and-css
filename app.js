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
    let editbtn=document.createElement("button")
    editbtn.setAttribute("type","button")
    editbtn.innerText="edit"
    editbtn.className="EDIT"
    editbtn.style.backgroundColor="yellow"
    li.appendChild(editbtn)
    x.appendChild(li)
    editbtn.addEventListener("click",change_details)
}
/*let a=document.getElementById("added")
a.addEventListener("click",function (event){
    if(event.target.className.includes("xxx")){
        remove_details(event)
    }
})*/
function remove_details(event) {
    let b=event.target.parentElement
    let key=b.innerText.slice(0,b.innerText.length-7)
    console.log(b)
    let detail=JSON.parse(key)
    let k=detail.email
    localStorage.removeItem(k)
    b.style.display="none"
}

function change_details(event){
    let b=event.target.parentElement
    let key=b.innerText.slice(0,b.innerText.length-7)
    let detail=JSON.parse(key)
    document.getElementById("fname").value=detail.first_name
    document.getElementById("lname").value=detail.last_name
    document.getElementById("addr").value=detail.email
    let k=detail.email
    localStorage.removeItem(k)
    b.style.display="none"
}