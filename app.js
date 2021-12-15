let inp = document.querySelector('.inp')
let btn = document.querySelector('.btn')
let tasks = document.querySelector('.tasks')

let taskArr = []

btn.addEventListener('click', () => {
    taskArr.push({checkbox: false, name: inp.value, flaginp: false})
    tasks.innerHTML = ''
    inp.value = ''
    renderTasks()
})

const renderTasks = () => {
    taskArr.forEach((elem) => {
        // const inpCheckbox = document.createElement('input')
        const p = document.createElement('p')
        const inpEdit = document.createElement('input')
        const btnDel = document.createElement('button')
        const btnEdit = document.createElement('button')
        const div = document.createElement('div')
        // inpCheckbox.type = 'checkbox'
        // inpCheckbox.classList.add('checkbox')
        btnEdit.classList.add('btn-edit')
        btnDel.classList.add('btn-del')
        inpEdit.classList.add('inp-edit')
        div.classList.add('task')
        // inpCheckbox.addEventListener ('click', () => changeCheckbox(elem))
        btnEdit.addEventListener ('click', () => EditTasks(elem))
        btnDel.addEventListener ('click', () => deletTasks(elem))

        // if (elem.checkbox) {
        //     p.style.textDecoration = 'line-through'
        //     div.append(p)
        // }else {
        //     p.style.textDecoration = 'none'
        //     div.append(p)
        // }

        if(elem.flaginp) {
            inpEdit.value = elem.name
            inpEdit.addEventListener('keyup', (event) => changeInp(event.target.value, elem))
            div.append(inpEdit)
        }else {
            p.innerHTML = elem.name
            // div.append(inpCheckbox)
            div.append(p)
        }

        div.append(btnEdit)
        div.append(btnDel)
        tasks.append(div)
    })
}

// function changeCheckbox(elem) {
//     taskArr[taskArr.indexOf(elem)].checkbox = !taskArr[taskArr.indexOf(elem)].checkbox
//     console.log(taskArr)
// }

function changeInp(value, elem) {
    taskArr[taskArr.indexOf(elem)].name = value
}

function EditTasks(elem) {
    taskArr[taskArr.indexOf(elem)].flaginp = !taskArr[taskArr.indexOf(elem)].flaginp
    tasks.innerHTML = ''
    renderTasks()
}

function deletTasks(elem) {
    taskArr.splice(taskArr.indexOf(elem), 1)
    tasks.innerHTML = ''
    renderTasks()
}

