function setLocalStorage(json) {
    localStorage.setItem("contents", JSON.stringify(json));
    // localStorage.setItem("contents", str);
}

function getLocalStorage() {
    return JSON.parse(localStorage.getItem("contents"));
}

function constructFolders() {
  clearFolders();
  const json = getLocalStorage();

  for (const category in json) {
      const div = document.createElement("div");
      div.className = "folder";
      document.getElementById('folders').appendChild(div);

      const title = document.createElement("h6");
      title.innerHTML = category;
      div.appendChild(title);
      div.appendChild(document.createElement('br'));

      const ul = document.createElement("ul");
      div.appendChild(ul);

      for (const linkName in json[category].links) {
          const li = document.createElement("ul");
          ul.appendChild(li);

          const hyperLink = document.createElement("a");
          hyperLink.textContent = linkName;
          hyperLink.href = json[category].links[linkName];
          li.appendChild(hyperLink);
      }

  }

}

function clearFolders() {
    document.getElementById('folders').innerHTML = '';
}
