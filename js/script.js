const btn = document.getElementById('btn-list-here');
let text = document.getElementById('write-text')
let reset = document.getElementById('text-rest')
let eDiv = document.querySelector('#list-order')
let section, para, edit, erase, check, cDiv


btn.addEventListener('click', list)
text.addEventListener('keydown',(e)=>{
    if(e.code ==='Enter'){
     
        list();
    }
});
let arr = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];


function list(){
  
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
arr.push({item:para.innerText,checked:false,index:arr.length})

        localStorage.setItem('items', JSON.stringify(arr));
        document.getElementById('write-text').value = "" 
     console.log(arr)
 


}
function deleteList(event){
   
        let value = event.target.parentNode.parentNode.textContent
        console.log(value)
        arr.splice(arr.findIndex(i => i.item === value), 1); 
        localStorage.setItem('items',JSON.stringify(arr))
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
                para.innerText = arr[i].item
    
                cDiv = document.createElement('div')
                cDiv.setAttribute('class','two-buttons')
    
    
                check = document.createElement('input')
                check.setAttribute('src','img/check.png')
                check.setAttribute('type','image')
                check.setAttribute('id','check')
                check.setAttribute('alt','check')
                check.setAttribute("onclick","**")
    
                erase = document.createElement('input')
                erase.setAttribute('src','img/delete.png')
                erase.setAttribute('type','image')
                erase.setAttribute('id','del')
                erase.setAttribute('alt','delete')
                erase.setAttribute("onclick","deleteList()")
    
                section.appendChild(para)
                cDiv.appendChild(check)
                cDiv.appendChild(erase)
                section.appendChild(cDiv)
                eDiv.insertBefore(section,eDiv.children[0])
                console.log(eDiv.children[0])
    
    }
    }
    }