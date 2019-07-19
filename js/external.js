const localStorageVar = 'contents';

/**
 * Saves to local storage the JSON representing user's bookmarks.
 */
function setLocalStorage(obj) {
  localStorage.setItem(localStorageVar, JSON.stringify(obj));
}

/**
 * Retrieves the Object representing user's bookmarks from local storage.
 */
function getLocalStorage() {
  return JSON.parse(localStorage.getItem(localStorageVar));
}

/**
 * Populates the HTML page with contents from user's bookmarks.
 */
function constructFolders() {
  clearFolders();
  const bookmarksObj = getLocalStorage();

  for (let [catTitle, catContents] of Object.entries(bookmarksObj)) {
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
 * Parse the HTML page for user's bookmarks, returning them as an Object.
 */
function foldersToObj() {
  let bookmarksObj = {};

  const foldersDOM = document.getElementsByClassName('folder');
  for (let folder of foldersDOM) {
    const title = folder.firstChild.innerText;
    bookmarksObj[title] = {};

    const linksDOM = folder.lastChild;
    for (let linkElementHTML of linksDOM.childNodes) {
      const link = linkElementHTML.firstChild;
      bookmarksObj[title][link.innerText] = link.href;
    }
  }

  return bookmarksObj;
}

/**
 * Clears the HTML page of user's bookmarks.
 */
function clearFolders() {
  document.getElementById('folders').innerHTML = '';
}
