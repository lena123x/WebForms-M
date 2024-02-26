function addForm() {
    const formsContainer = document.getElementById('formsContainer');

    
    // Создаем новую форму
    const form = document.createElement('div');
    form.innerHTML = `
        <form>
        <label for="name">Имя:</label>
        <input type="text" id="name" name="name" required>
        
        <label for="signature">Подпись:</label>
        <textarea id="signature" name="signature" rows="4" required></textarea>
        
        <input type="submit" value="Отправить">
        </form>
    `;

    // Добавляем новую форму на страницу
    formsContainer.appendChild(form);
    }


	// Поменять цвет темы
	const container = document.querySelector('.form-container');
	const changeColorBtn = document.getElementById('changeColorBtn');

	changeColorBtn.addEventListener('click', () => {
		const randomColor = Math.floor(Math.random()*16777215).toString(16);
		container.style.backgroundColor = `#${randomColor}`;
	});


	

