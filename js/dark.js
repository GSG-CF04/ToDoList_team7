
// Dark Mode Code

let dark = document.getElementsByClassName('moon-img')
let bg = document.getElementsByClassName('section-todo')
let task = document.getElementsByClassName('task-to-do')
let heading = document.getElementsByClassName('list-p')
let photo = document.getElementsByClassName('moon-img')
let situation = 0

dark.onclick=function (){

if(situation == 0){
body.classList.add('dark-mode-bg')
task.classList.add('dark-mode')
heading.classList.add('dark-mode')
photo.setAttribute('src', 'img/ic_baseline-light-mode.png')
section.classList.add('dark-mode-bg')
para.classList.add('dark-mode')

situation++
}
else{
body.classList.remove('dark-mode-bg')
task.classList.remove('dark-mode')
heading.classList.remove('dark-mode')
photo.setAttribute('src', 'img/Vector.png')
section.classList.remove('dark-mode-bg')
para.classList.remove('dark-mode')

situation--
}

}