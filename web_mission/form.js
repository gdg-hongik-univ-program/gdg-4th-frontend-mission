// 1. 인사 버튼 클릭 시 콘솔에 인삿말 출력
document.getElementById('helloBtn').addEventListener('click', function () {
  console.log('안녕하세요!');
});

// 2. 폼 제출 시 입력값 콘솔에 출력
document.getElementById('inputForm').addEventListener('submit', function (event) {
  event.preventDefault(); // 폼 제출 시 새로고침 방지
  const inputValue = document.getElementById('textInput').value;
  console.log(inputValue);
});