// fetch('https://learn.codeit.kr/api/topics')
//     .then((response) => response.text())
//     .then((result) => { console.log(result) })

// '초급'에 해당하는 토픽들만 불러오기 
fetch('https://learn.codeit.kr/api/topics')
  .then((response) => response.text())
  .then((result) => {
    const topics = JSON.parse(result);
    const beginnerLevelTopics = topics.filter((topic) => topic.difficulty === '초급');
    console.log(beginnerLevelTopics);
  });