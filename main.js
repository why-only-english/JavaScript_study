function bmiCalculator(name, weight, heigth) {
    console.log(name + '님의 체질량지수는 ' + weight/(heigth*heigth/10000) + '입니다.')
  };
  
  
  // 테스트 코드
  bmiCalculator('홀쭉이', 43.52, 160);
  bmiCalculator('코린이', 61.25, 175);
  bmiCalculator('통통이', 77.76, 180);