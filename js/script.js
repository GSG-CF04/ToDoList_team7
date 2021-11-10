const btn = document.getElementById('btn-list-here');
let text = document.getElementById('write-text')
let reset = document.getElementById('text-rest')
let eDiv = document.querySelector('#list-order')
let section, para, edit, erase, check, cDiv


btn.addEventListener('click', list)
 
function list(){
    if(text.value){
        console.log(text.value)

section = document.createElement('section')
section.setAttribute('class', 'container')

para = document.createElement('p')
para.setAttribute('class','para-text')
para.innerText = text.value

cDiv = document.createElement('div')
cDiv.setAttribute('class','two-buttons')


check = document.createElement('input')
check.setAttribute('src','img/check.png')
check.setAttribute('type','image')
check.setAttribute('id','check')
check.setAttribute('alt','check')
check.setAttribute("onclick","******************")

erase = document.createElement('input')
erase.setAttribute('src','img/delete.png')
erase.setAttribute('type','image')
erase.setAttribute('id','del')
erase.setAttribute('alt','delete')
erase.setAttribute("onclick","******************")

section.appendChild(para)
cDiv.appendChild(check)
cDiv.appendChild(erase)
section.appendChild(cDiv)
console.log(section)
console.log(eDiv)
eDiv.appendChild(section);

}
else{
        alert("This a blank list, please type something");

    }
}

