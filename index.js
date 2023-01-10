function introduce(name = '홍길동', birth = 1443) {
    console.log(`안녕하세요 저는 ${name}입니다.`);
    console.log(`${birth}년에 태어났습니다.`);
  }
  
  introduce('장동건');          // 장동건, 1443
  introduce('Joy', null);      // Joy, null
  introduce(undefined, 2090);  // 홍길동, 2090