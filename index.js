const macbook = {
  title: '맥북 프로 air',
  price: 369000,
  memory: '16GB',
  storage: '1TB SSD 저장 장치',
  display: '16형 Retina 디스플레이',
  'serial-num': 'ABCD',
};

// const title = macbook.title;
// const price = macbook.price;
const { title: product, 'serial-num': serialNum } = macbook;

console.log(product);
console.log(serialNum);
console.log(macbook);