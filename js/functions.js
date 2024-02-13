const button = document.querySelector('button')
const table = document.querySelector('table')
const p = document.querySelector('p')
let rivit = 0

const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * max) + min;
};

document.querySelector('button').addEventListener('click',() => {
    const row = table.insertRow()
    for(let i = 0;i < 7;i++) {
        const col = row.insertCell()
        col.innerHTML = getRandomIntNumberInRange(1, 9)
    }
    rivit++
    p.innerHTML = 'Valmiita rivejä' + ' ' + rivit
})