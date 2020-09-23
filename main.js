// Defer until all the html elements are loaded
window.onload = () => {
    const toggle = document.querySelector('#toggle')
    const icon = toggle.querySelector('a')
    const menu = document.querySelectorAll('.item')

    const barHtml = '<i class="fas fa-bars"></i>'

    const lineHtml = '<i class="fas fa-grip-lines"></i>'

    // Adds or removes the active class to every .item element
    toggle.addEventListener('click', () => {
        menu.forEach(item => {
            if (item.classList.contains('active')){
                item.classList.remove('active')
                icon.innerHTML = barHtml
            }
            else{
                item.classList.add('active')
                icon.innerHTML = lineHtml
            }
        })
    })

}
