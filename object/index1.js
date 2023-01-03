// 객체 (object)
let codeit = {
    name: '코드잇',
    bornyear: 2017,
    isVeryNice: true,
    worstCourse: null,
    bestcourse: {
        title: '자바스크립트 프로그래밍 기초',
        langauge: 'JavaScript'
    }
};

console.log(codeit.name);
codeit.name = 'codeit';
console.log(codeit.name);

console.log(codeit.name !== undefined);

// in 연산자
// 안전, if 문의 조건문에도 활용 가능
console.log('name' in codeit);  

for (let key in codeit) {
    console.log(key);
    console.log(codeit[key]);
}

let myAccount = {
    'KBank': 1116000,
    'JBank': 1005000,
    'CBank': 618000,
   };
   
   let b=5;
   for (let bank in myAccount) {
     b += myAccount[bank]
   }
   
   console.log(b);
