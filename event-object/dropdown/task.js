const buttonsDropdown = document.querySelectorAll('.dropdown__value');
Array.from(buttonsDropdown).forEach((button) => {
  button.addEventListener('click', () => {
    const dropdown = button.closest('.dropdown'); 
    dropdown.querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
  })
})

const dropdownItems = document.querySelectorAll('.dropdown__item');
Array.from(dropdownItems).forEach((item) => {
  item.addEventListener('click', (event) => {
    item.closest('.dropdown__list').classList.remove('dropdown__list_active');  
    const dropdown = item.closest('.dropdown'); 
    dropdown.querySelector('.dropdown__value').textContent = item.textContent;
    event.preventDefault(); 
  })
})