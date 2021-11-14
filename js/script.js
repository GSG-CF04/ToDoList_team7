const btn = document.getElementById('btn-list-here');
let text = document.getElementById('write-text')
let reset = document.getElementById('text-rest')
let eDiv = document.querySelector('#list-order')
let section, para, edit, erase, check, cDiv
let arr = []

btn.addEventListener('click', list)
 
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));

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
erase.setAttribute("onclick","deleteList(event)")

section.appendChild(para)
cDiv.appendChild(check)
cDiv.appendChild(erase)
section.appendChild(cDiv)
//eDiv.appendChild(section)
eDiv.insertBefore(section,eDiv.children[0])

console.log(eDiv.children[0])

itemsArray.push(text.value);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        document.getElementById('write-text').value = "" 
        arr.push({item:para.innerText,checked:false,index:arr.length})
     console.log(arr)

}

else{
        alert("This a blank list, please type something");

    }
}
function deleteList(event){
   
        let value = event.target.parentNode.parentNode.textContent
        itemsArray.splice(itemsArray.indexOf(value), 1); 
        localStorage.setItem('items',JSON.stringify(itemsArray))
        event.target.parentNode.parentNode.remove()
    }


  
window.onload = function()  {
    console.log(localStorage.getItem('items'))
    if(localStorage.getItem('items')){
    itemsArray=JSON.parse(localStorage.getItem('items'))
        for(let i=0; i<itemsArray.length;i++){

            section = document.createElement('section')
            section.setAttribute('class', 'container')
            
            para = document.createElement('p')
            para.setAttribute('class','para-text')
            para.innerText = itemsArray[i]
            
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
            eDiv.insertBefore(section,eDiv.children[0])
            console.log(eDiv.children[0])
            
}
}
}

