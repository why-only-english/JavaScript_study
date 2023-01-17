function createUser(email, birthdate) {
    const user = {
        email: email,           // 프로퍼티 파라미터 이름 같으면 생략 가능
        birthdate: birthdate,
        buy(item) {
            console.log(`${this.email} buys ${item.name}`);
        },
    };
    return user;
}

const user1 = createUser('6813821@tukorea.ac.kr', '2000-08-19');
const user2 = createUser('7813822@tukorea.ac.kr', '2000-08-11');
const user3 = createUser('8813823@tukorea.ac.kr', '2000-08-12');

const item = {
    name: '스웨터',
    price: 30000,
};

console.log(user1.email);
console.log(user2.email);
console.log(user3.email);

user1.buy(item);
user2.buy(item);
user3.buy(item);