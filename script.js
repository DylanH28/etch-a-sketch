const container = document.querySelector('#grid');

for (let i = 0; i <= 256; i++) {
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'text';
    content.style.border = "thin solid black"

    grid.appendChild(content);
}
//console.log(grid.innerHTML)