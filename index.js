function printMembers(members) {
  try {
    for (const member of members) {
      console.log(member);
    }
  } catch (err) {
    console.error(err);
    alert(`${err.name}가 발생했습니다. 콘솔창을 확인해 주세요.`);
  }
}

const teamA = ['상혜', '혜진', '지혜', '혜선']
printMembers(teamA);

const codeit = {name: 'codeit'};
printMembers(codeit);

const teamB = ['영훈', '재훈', '종훈', '정훈']
printMembers(teamB);