const form=document.querySelector('form')
form.addEventListener('submit',display)

const displayFirstName=document.querySelector('.display')

function display (e){
    e.preventDefault()
    const form= e.currentTarget
    const data=new FormData(form)
    displayFirstName.innerHTML=data.get('firstname')
    const input =document.querySelector('input')
    input.value=''

}

