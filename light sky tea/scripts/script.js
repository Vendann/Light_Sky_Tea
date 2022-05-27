let form = document.querySelector('form');
form.onsubmit = function() {
    var text = document.getElementById("email").value;
    alert('Отправить заявку для ' + text + ' ?');    
    console.log('Форма отправлена!');
};