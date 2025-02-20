let target = document.querySelector("#dynamic");

function randomString(){
    let stringArr = ["Learn to HTML", "Learn to CSS",
    "Learn to Javascript", "Learn to Python", "Learn to Ruby"];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");

    return (selectStringArr);
}

//타이핑 리셋
function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}

//한 글자씩 텍스트를 출력하는는 함수
function dynamic(randomArr){
    
    if(randomArr.length > 0){
        target.textContent += randomArr.shift(); // shift함수는 배열의 제일 앞에 것부터 빼냄
        setTimeout(function(){
            dynamic(randomArr);
        }, 80);
    }
    else{
        setTimeout(resetTyping, 1000);
    }
}

dynamic(randomString());

//커서 깜빡임 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500); // 0.5초 간격으로 blink 실행

