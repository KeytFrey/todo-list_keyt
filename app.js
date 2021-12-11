let inp = document.querySelector('.inp')
let btn = document.querySelector('.btn')
let tasks = document.querySelector('.tasks')


let taskArr = []

btn.addEventListener('click', () => {
    taskArr.push(inp.value)
    tasks.innerHTML = ''
    inp.value = ''
    renderTasks()
})



const renderTasks = () => {
    taskArr.forEach((elem) => {
        const p = document.createElement('p')
        const btnDel = document.createElement('button')
        btnDel.innerHTML = 'удалить'
        p.innerHTML = elem
        tasks.append(p)
        p.append(btnDel)

        btnDel.addEventListener ('click', () => {
            taskArr.splice(p, 1)
            console.log(taskArr)
        })
    })
}
