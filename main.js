
function AddExpence(){
let btn=document.getElementById('btn')
btn.addEventListener('click',function Add(){
    let Obj={
         Expence:document.querySelector('#Price').value,
         Cateagory:document.querySelector('select').value,
         desc:document.querySelector('#desc').value,
    }
    localStorage.setItem(Obj.Cateagory,JSON.stringify(Obj))

    let ul=document.getElementById('items')
    let li=document.createElement('li')
    li.className='list-group-item'
    let litext=document.createTextNode(Obj.Cateagory)
    li.appendChild(litext)

    let EditBtn=document.createElement('button')
    EditBtn.className='btn btn-warning  btn-sm float-right edit'
    let EditText=document.createTextNode('Edit Expence')
    EditBtn.appendChild(EditText)
    li.appendChild(EditBtn)

    let Delbtn=document.createElement('button')
    Delbtn.className='btn btn-danger  btn-sm float-right delete'
    let DelText=document.createTextNode('Delete Expence')
    Delbtn.appendChild(DelText)
    li.appendChild(Delbtn)

    ul.appendChild(li)


})
}
AddExpence()

function EditExpence(){
    let list=document.getElementById('items')
    list.addEventListener('click',function Edit(e){
       if(e.target.classList.contains('edit')){
        var li = e.target.parentElement // because we want to delete the li and e(event) has li as parent element
        var editCat=document.getElementById('Category')
        editCat.value=li.firstChild.textContent //we have to update the value  in input box
        list.removeChild(li)
  
        var deleteObj = JSON.parse(localStorage.getItem(li.firstChild.textContent)) //finding the text content as object
        localStorage.removeItem(deleteObj.Cateagory)
       }
    })   
}
EditExpence()


function DeleteExpence(){
    let list=document.getElementById('items')
    list.addEventListener('click',function del(e){
        if(e.target.classList.contains('delete')){
            let li=e.target.parentElement
            list.removeChild(li)

        var deleteObj = JSON.parse(localStorage.getItem(li.firstChild.textContent)) //finding the text content as object
        localStorage.removeItem(deleteObj.Cateagory)
        }
    })
}
DeleteExpence()

