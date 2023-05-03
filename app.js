let users = [];

// let debounceTrigger = true;

// let timeoutRef;

// function debounceSearch(searchValue) {
//   clearTimeout(timeoutRef);

//   timeoutRef = setTimeout(() => {
//     const copyUsers = [...users];
//     const filterData = copyUsers.filter((x) => {
//       if (x.title.includes(searchValue)) {
//         return x;
//       }
//     });
//     console.log(filterData);
//     display(filterData);
//   }, 1000);
// }

const userInput = document
  .getElementById("search")
  .addEventListener("input", function (event) {
    let copyUsers = [...users];
    let filteredData = copyUsers.filter((x) => {
      if (x.title.includes(event.target.value)) {
        return true;
      }
    });
    display(filteredData);
    // if (event.target.value) {
    //   debounceSearch(event.target.value);
    // } else {
    //   display(users);
    // }
  });

const fetchData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      users = [...data.slice(0, 10)];
      display(users);
    });
};
function display(users) {
  document.querySelector("ul").innerHTML = "";
  for (let user of users) {
    const liEl = document.createElement("li");
    liEl.innerHTML = user.title;
    document.querySelector("ul").appendChild(liEl);
  }
}
fetchData();
