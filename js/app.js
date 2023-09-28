let btn=document.getElementById('btn')
let count=0
btn.onclick=()=>{
    let cnt=document.getElementById('count')
    count++
    cnt.innerHTML=count
    let inpt=document.querySelector('#inpt').value
    let div = document.createElement('div')
    let h3 = document.createElement('h3')
    let btn2=document.createElement('button')
    div.appendChild(h3)
    div.appendChild(btn2)
    div.setAttribute('class','box')
    h3.innerHTML = inpt
    btn2.textContent="Delete"
    btn2.style.width="90px"
    btn2.style.padding="10px 20px"
    btn2.style.marginTop="20px"
    div.style.padding="50px"
    div.style.backgroundColor="rgb(165, 143, 185)"
    div.style.textAlign="center"
    div.style.borderRadius="30px"
    document.querySelector('.all').appendChild(div)
    btn2.onclick=()=>{
        div.style.display="none"
    }


}
