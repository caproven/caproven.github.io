const localStorageVar = 'contents';

/**
 * Saves to local storage the stringified JSON representing user's bookmarks.
 */
function setLocalStorage(json) {
  localStorage.setItem(localStorageVar, JSON.stringify(json));
}

/**
 * Retrieves the JSON representing user's bookmarks from local storage.
 */
function getLocalStorage() {
  return JSON.parse(localStorage.getItem(localStorageVar));
}

/**
 * Populates the HTML page with contents from user's bookmarks.
 */
function constructFolders() {
  clearFolders();
  const json = getLocalStorage();

  for (let [catTitle, catContents] of Object.entries(json)) {
    const div = document.createElement('div');
    div.className = 'folder';
    document.getElementById('folders').appendChild(div);

    const title = document.createElement('h6');
    title.className = 'title';
    title.innerHTML = catTitle;
    div.appendChild(title);
    div.appendChild(document.createElement('br'));

    const ul = document.createElement('ul');
    ul.className = 'bookmarks';
    div.appendChild(ul);

    for (let [linkTitle, linkURL] of Object.entries(catContents.links)) {
      const li = document.createElement('li');
      ul.appendChild(li);

      const hyperLink = document.createElement('a');
      hyperLink.textContent = linkTitle;
      hyperLink.href = linkURL;
      li.appendChild(hyperLink);
    }
  }
}

/**
 * Parse the current HTML page for user's bookmarks, returning them as in JSON.
 */
function foldersToJson() {
  let json = {};

  const foldersDOM = document.getElementsByClassName('folder');
  for (let folder of foldersDOM) {
    const title = folder.firstChild.innerText;
    json[title] = {};

    const linksDOM = folder.lastChild;
    for (let link of linksDOM.childNodes) {
      json[title][link.firstChild.innerText] = link.firstChild.href;
    }
  }

  return json;
}

/**
 * Clears the HTML page of user's bookmarks.
 */
function clearFolders() {
  document.getElementById('folders').innerHTML = '';
}
