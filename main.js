// 새 직원 정보를 추가한 후에, 전체 직원 정보를 조회하는 코드
// 새 직원 정보는 원하는 대로 작성하세요
const newMember = {
  name: 'jg',
  email: 'jg@codeitmall.kr',
	department: 'engineering',
};


fetch('https://learn.codeit.kr/api/members', {
  method: 'POST',
  body: JSON.stringify(newMember),  // 직렬화
})
  .then(() => {
    fetch('https://learn.codeit.kr/api/members')
      .then((response) => response.text())
      .then((result) => {
        const members = JSON.parse(result);  // 역직렬화 
        // 가장 마지막에 존재하는(가장 최근에 추가된) 직원 정보
        console.log(members[members.length - 1]);  
      });
  });