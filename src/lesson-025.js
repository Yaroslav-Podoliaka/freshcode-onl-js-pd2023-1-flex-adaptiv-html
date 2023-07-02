'use strict';
// AJAX - Async
// // XMLHttpRequest
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.responseType = 'json';
// xhr.send();
// xhr.onload = () => {
//   console.log(xhr.response);
//   console.log(xhr.status);
//   localStorage.setItem('users', JSON.stringify(xhr.response));
// }
// Fetch API
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
// .then()



const requestSrs = 'users';
const myReques = new Request(`https://jsonplaceholder.typicode.com/${requestSrs}`);
fetch(myReques)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((json) => {
    console.log(json);
    localStorage.setItem(requestSrs, JSON.stringify(json));
  });
const users = JSON.parse(localStorage.getItem(requestSrs))
console.log(users);
users.forEach((user) => console.log(
  `Name is: ${user.name},
  email is: ${user.email},
  pone is ${user.phone}
  ====================================`
));
// POST
const sendPostRequest = async () => {
  const url = `https://jsonplaceholder.typicode.com/users`;
  const body = {
    name: 'Jhon Doe',
    username: 'Jhon',
    email: 'jhon@example.com',
  }
  const headers = new Headers();
  headers.append('Contend-Type', 'application/json; charset=UTF-8');
  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers,
  }
  const request = new Request(url, options);
  try {
    const response = await fetch(request);
    if (!response.ok) throw new Error(response.status);
    const json = await response.json();
    localStorage.setItem('postUser', JSON.stringify(json));
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
sendPostRequest();
// PUT
const sendPutRequest = async () => {
  const url = `https://jsonplaceholder.typicode.com/users/1`;
  const body = {
    id: 1,
    name: "Jane Smith",
    username: "Jane",
    email: "jane@example.com",
  };
  const headers = new Headers();
  headers.append("Contend-Type", "application/json; charset=UTF-8");
  const options = {
    method: "PUT",
    body: JSON.stringify(body),
    headers,
  };
  const request = new Request(url, options);
  try {
    const response = await fetch(request);
    if (!response.ok) throw new Error(response.status);
    const json = await response.json();
    console.log(json)
  } catch (error) {
    console.log(error);
  }
}
sendPutRequest();

// O(n)
const arrNumbers = [];
let start = Date.now();
const limit = 1e6;
const value = 5000;
const createArrNumbers = (limit) => {
  for (let i = 0; i < limit; i++)
  {
    arrNumbers.push(Math.round(Math.random() * 10000));
  }
  console.log(`Create array for ${Date.now() - start} ms`);
  return arrNumbers;
}
createArrNumbers(limit);

arrSortNumb = createArrNumbers(limit).sort((a, b) => a - b);

const linearSearch = (arr, value) => {
  for (let i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      console.log(`Find number for ${Date.now() - start} ms`);
      return i;
    }
  }
  return -1;
};
console.log(linearSearch(arrSortNumb, value));

const binarySearch = (arr, value) => {
  let bedinning = 0;
  let end = arr.length - 1;
  let middle;
  while (bedinning <= end) {
    middle = Math.round((bedinning + end) / 2);
    if (arr[middle] === value) {
      console.log(`Find number by binary for ${Date.now() - start} ms`);
      return middle;
    }
    if (arr[middle] > value) {
      end = middle - 1;
    } else {
      bedinning = middle + 1;
    }
  }
  return -1;
}
console.log(binarySearch(arrSortNumb, value));

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++){
    for (j = 0; j < n - 1; j++){
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j] = [arr[j], arr[j + 1]]];
      }
    }
  }
  console.log(`Sort by bubble for ${Date.now() - start} ms`);
  return arr;
}
bubbleSort(arrNumbers)





