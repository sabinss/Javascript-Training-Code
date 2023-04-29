/**
 * 3 state of Promises
    unresolved -> waiting for something to finish
    resolved -> something finished and it went ok
    rejected -> something finisihed and something went wrong
 */

// Resolved-> callback=> then
// rejected-> callback -> catch

const promise = new Promise((resolved, reject) => {
  reject(true);
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos").then((res) => {
    console.log(res);
  });
};
fetchData();
