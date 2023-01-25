fetch('https://www.google.com')
    .then((response) => response.text())
    .then((result) => {console.log(result);});

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.text())
    .then((result) => {console.log(result);});

// JSON 데이터를 객체로 변환하기, 배열의 총 길이 출력 
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.text())
    .then((result) => { 
        const users = JSON.parse(result);  // 자바스크립트 객체로 변환
        console.log(users.length);
        users.forEach(user => {
            console.log(user.name)
        });
    });

// GET request
fetch('https://learn.codeit.kr/api/members')
    .then((response) => response.text())
    .then((result) => {console.log(result);});