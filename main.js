// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((users) => {
//     const lastUser = users[users.length - 1];
//     return lastUser.id;
//   })
//   .then((id) => fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`))
//   .then((response) => response.json())
//   .then((posts) => {
//     const lastPost = posts[posts.length - 1];
//     console.log(lastPost);
//   });

// async/await 구문으로 실행 코드 작성(비동기 실행)
async function getTheLastPostOfTheLastUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  const lastUser = users[users.length - 1];
  const { id } = lastUser;
  const postsJSON = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  const posts = await postsJSON.json();
  const lastPost = posts[posts.length - 1];
  return lastPost;
}

getTheLastPostOfTheLastUser().then((lastPost) => {
  console.log(lastPost);
});
