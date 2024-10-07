MyMovies.sort((a, b) => a.Title.localeCompare(b.Title));

const lookup = MyMovies.reduce((a, e) => {
  a[e.Title] = ++a[e.Title] || 0;
  return a;
}, {});

console.log(MyMovies.filter((e) => lookup[e.Title]));

const container = document.getElementById("Container");
for (const MyMovie of MyMovies) {
  const div = document.createElement("div");
  div.classList.add("Item");
  div.innerHTML = `
            <div class="ItemTitle" id="${MyMovie.Title}">${MyMovie.Title}</div>
            <div class="ItemIMG"><img src="${MyMovie.IMG}" alt="${MyMovie.Title}"></div>
            <div class="Container2">
            <div class="ItemFormat">${MyMovie.Format}</div>
            <div class="ItemSize">${MyMovie.Size}</div>
            <div class="ItemStored">${MyMovie.Stored}</div>
            </div>
    `;
  container.appendChild(div);
}
const searchtitle = () => {
  const searchBox = document.getElementById("search-title").value.toUpperCase();
  const product = document.querySelectorAll(".Item");
  const pname = document.querySelectorAll(".ItemTitle");

  for (let i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByClassName("ItemTitle")[0];

    if (match) {
      let textValue = match.textContent || match.innerHTML;

      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};
const searchformat = () => {
  const searchBox = document
    .getElementById("search-format")
    .value.toUpperCase();
  const product = document.querySelectorAll(".Item");
  const pname = document.querySelectorAll(".ItemFormat");

  for (let i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByClassName("ItemFormat")[0];

    if (match) {
      let textValue = match.textContent || match.innerHTML;

      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
};
const container2 = document.getElementById("Counter");
container2.innerHTML = MyMovies.length + " Total Movies ";
