const localStorageVar = "contents";

function setLocalStorage(json) {
    localStorage.setItem(localStorageVar, JSON.stringify(json));
    // localStorage.setItem("contents", str);
}

function getLocalStorage() {
    return JSON.parse(localStorage.getItem(localStorageVar));
}

function constructFolders() {
  clearFolders();
  const json = getLocalStorage();

  for (let [catTitle, catContents] of Object.entries(json)) {
      const div = document.createElement("div");
      div.className = "folder";
      document.getElementById('folders').appendChild(div);

      const title = document.createElement("h6");
      title.innerHTML = catTitle;
      div.appendChild(title);
      div.appendChild(document.createElement('br'));

      const ul = document.createElement("ul");
      div.appendChild(ul);

      for (let [linkTitle, linkURL] of Object.entries(catContents.links)) {
          const li = document.createElement("ul");
          ul.appendChild(li);

          const hyperLink = document.createElement("a");
          hyperLink.textContent = linkTitle;
          hyperLink.href = linkURL;
          li.appendChild(hyperLink);
      }

  }

}

function clearFolders() {
    document.getElementById('folders').innerHTML = '';
}
