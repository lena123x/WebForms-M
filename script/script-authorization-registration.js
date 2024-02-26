const RegisterLink = document.querySelector('.register-link');
const InputLink = document.querySelector('.input-link');
const wrapper = document.querySelector('.wrapper');

InputLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

RegisterLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});



// Находим кнопку по id и добавляем обработчик события нажатия

document.getElementById("add-card-button").addEventListener("click", function() {

    // Создаем копию шаблона карточки
  
    var card = document.getElementById("card").cloneNode(true);
  
    
  
    // Добавляем карточку на страницу
  
    document.getElementById("cards-container").appendChild(card);
  
  });