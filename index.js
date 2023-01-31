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

// POST request
const newMember = {
    name: 'Jerry',
    email: 'jerry@codeitmmall.kr',
    department: 'engineering',
};

fetch('https://learn.codeit.kr/api/members', {
    method: 'POST',
    body: JSON.stringify(newMember),   // pasre 메서드와 반대
})
    .then((response) => response.text())
    .then((result) => {console.log(result);});

// PUT request
const Member = {
    name: 'Alice',
    email: 'alice@codeitmmall.kr',
    department: 'marketing',
};

fetch('https://learn.codeit.kr/api/members/2', {
    method: 'PUT',
    body: JSON.stringify(Member),   // string 객체로 변환
})
    .then((response) => response.text())
    .then((result) => {console.log(result);});

// DELETE request
fetch('https://learn.codeit.kr/api/members/2', {
    method: 'DELETE',     // DELETE 리퀘스트는 바디 필요 X
})
    .then((response) => response.text())
    .then((result) => {console.log(result);});

console.log('Start!');

fetch('https://learn.codeit.kr/api/members')
    .then((response) => response.text())
    .then((result) => {console.log(result);});

console.log('End!');

async function fetchAndPrint() {
    console.log(2);
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(7);
    const result = await response.text();
    console.log(result);
}

console.log(1);
fetchAndPrint();
console.log(3);
console.log(4);
console.log(5);
console.log(6);
