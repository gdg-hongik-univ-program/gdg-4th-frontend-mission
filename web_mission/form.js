function first(){
    console.log("안녕하세요! 전 컴퓨터공학과 3학년 김채민입니다. 잘 부탁드려요 !");
}


const form = document.getElementById('totalUserInput');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const value = document.getElementById('userName').value;
    console.log(value);
});