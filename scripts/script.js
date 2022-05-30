let form = document.querySelector('form');
form.onsubmit = function() {
    let text = document.getElementById("email").value;
    alert('Отправить заявку для ' + text + ' ?');    
    alert('Форма отправлена!');
};
