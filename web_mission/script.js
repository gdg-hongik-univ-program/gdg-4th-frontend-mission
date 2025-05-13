function sayHello() {
  console.log("안녕하세요! 만나서 반가워요 😊");
}

function handleSubmit(event) {
  event.preventDefault(); // 새로고침 막기
  const input = document.getElementById("userInput").value;
  console.log("입력한 값:", input);
}


