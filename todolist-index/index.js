// init
let list = document.querySelector('#my-todo')
const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']
for (let todo of todos) {
  addItem(todo)
}

function addItem (text) {
  let newItem = document.createElement('li')
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  list.appendChild(newItem)
}

// write your code here
const addBtn = document.querySelector('#addBtn')

addBtn.addEventListener('click', function () {
  // console.log(this)
  // console.log(event.target)
  let inputValue = document.querySelector('#newTodo').value
  console.log(inputValue)
  // 如果 input 還沒有輸入內容，不會產生新的 todo
  if(inputValue.trim()){
    addItem(inputValue)
    document.querySelector('#newTodo').value="" 
  }
  
})
// 按下 Enter 鍵時，一樣可以新增 todo
const addEnter = document.querySelector('#newTodo')
addEnter.addEventListener('keypress',function(){
  let inputValue = document.querySelector('#newTodo').value
  if (event.keyCode === 13 && inputValue.trim()) {
    addItem(inputValue)
    document.querySelector('#newTodo').value="" 
    }
  
})

let list_title=document.createElement('h4')
list_title.innerHTML="Todo"

list.before(list_title)
// 新增doneList
let todo_list=document.querySelector("#todo-list")
let done_list=document.querySelector("#done-list")
let doneList=document.createElement('ol')
doneList.innerHTML=""
done_list.append(doneList)

let done_title=document.createElement('h4')
done_title.innerHTML="Done"
doneList.before(done_title)


// Delete
// list.addEventListener('click', function (event) {
//   console.log(this)
//   console.log(event.target)
//   // console.log(event.target.classList)
//    let li = event.target.parentElement
//   if (event.target.classList.contains('delete')) {  // add this
//     li.remove()
//   }else if (event.target.tagName === 'LABEL') {event.target.classList.toggle('checked')
  
//   li.remove()
//   doneList.append(li)                    
//   }
// })


// doneList.addEventListener('click', function (event) {
//   console.log(this)
//   console.log(event.target)
//   let li = event.target.parentElement
//    if (event.target.classList.contains('delete')) {
//     li.remove()
//   }else if (event.target.tagName === 'LABEL') {event.target.classList.toggle('checked')
//   li.remove()
//   list.append(li)                    
//   }
// })

//將list與donelist都綁定監聽器
function add_clickEventListener(node,othernode){
  node.addEventListener('click', function (event) {
  console.log(this)
  console.log(event.target)
  let li = event.target.parentElement
   if (event.target.classList.contains('delete')) {
    li.remove()
  }else if (event.target.tagName === 'LABEL') {event.target.classList.toggle('checked')
  li.remove()
  othernode.append(li)                    
  }
})
}

add_clickEventListener(list,doneList)
add_clickEventListener(doneList,list)