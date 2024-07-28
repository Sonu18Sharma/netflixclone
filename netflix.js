// FAQ
document.querySelectorAll('.faq-item h3').forEach(item => {
    item.addEventListener('click', () => {
        const sibling = item.nextElementSibling;
        const toggleSign = item.querySelector('.toggle-sign');
        sibling.style.display = sibling.style.display === 'none' || sibling.style.display === '' ? 'block' : 'none';
        toggleSign.textContent = toggleSign.textContent === '+' ? 'x' : '+';
    });
});



document.getElementById('a').addEventListener('click',function(){
    var email =document.getElementById('email-id').value;
    if(email){
        document.querySelector('.container').style.display = 'none';
        document.getElementById('userEmail').textContent = email;
        document.getElementById('login').style.display = 'block';

    }
    else{
        alert('please enter a valid email !')
    }
})







