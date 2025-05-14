function sayHello() {
  console.log("안녕하세요! 콘솔에 인사가 출력되었습니다.");
}

function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("userInput").value;
  console.log("입력한 이름:", name);
}