window.onload = () => {
    const toggle = document.querySelector('#toggle')
    const menu = document.querySelectorAll('.item')

    toggle.addEventListener('click', () => {
        [...menu].map(item => {
            if (item.classList.contains('active')){
                item.classList.remove('active')
            }
            else{
                item.classList.add('active')
            }
        })
    })

}
