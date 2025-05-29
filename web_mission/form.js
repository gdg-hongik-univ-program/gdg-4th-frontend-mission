// 인사하기 버튼 클릭 시 실행되는 함수
function sayHello() {
    console.log("안녕하세요! 반갑습니다!");
}

// 폼 제출 시 실행되는 함수
function handleSubmit(event) {
    event.preventDefault();
    const input = event.target.querySelector('input');
    console.log(input.value);
    input.value = '';
}