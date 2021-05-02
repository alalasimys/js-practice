const postToAdd = {
  author: "Mango",
  content: "CRUD is awesome",
};
// CREATE (POST)
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(postToAdd),
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((post) => console.log(post, "---post"))
  .catch((error) => console.log(error));

// READ (GET)
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => console.log(posts, "---запрос на все посты"))
  .catch(console.error());

const postId = 1;

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then((response) => response.json())
  .then((post) => console.log(post, "---один пост по id"))
  .catch((error) => console.log(error));

//UPDATE, PUT и PATCH
const postToUpdate = {
  content: "CRUD is really awesome",
};

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
  method: "PATCH",
  body: JSON.stringify(postToUpdate),
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((post) => console.log(post, "---UPDATED POST"))
  .catch((error) => console.log("ERROR" + error));

//DELETE
const postIdToDelete = 1;

fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
  method: "DELETE",
})
  .then(() => console.log("success"))
  .catch((error) => console.log("ERROR" + error));

//ASYNC AWAIT
/*
const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = response.json();

  return users;
};

getUsers().then((users) => console.log(users, "---ASYNC"));
*/
//TRY CATCH
const getUsers = async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(result, "---TRY");
  } catch (err) {
    throw err;
  }
};

getUsers()
  .then((users) => console.log(users))
  .catch((error) => console.log(error));
