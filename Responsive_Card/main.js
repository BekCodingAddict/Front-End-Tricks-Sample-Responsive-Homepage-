const toggle_btn=document.querySelector('.toggle_btn')
const toggle_btnIcon=document.querySelector('.toggle_btn a')
const dropDownMenu=document.querySelector('.dropdown_menu')

toggle_btn.onclick=function(){
    dropDownMenu.classList.toggle('open');
    const isOpen=dropDownMenu.classList.contains('open')

    toggle_btnIcon.classList=isOpen?'bi bi-list':'bi bi-list'
}

