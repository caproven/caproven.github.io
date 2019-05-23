function setJsonLocalStorage(str) {
    //localStorage.setItem("contents", JSON.stringify(json));
    localStorage.setItem("contents", str);
}

function getJsonLocalStorage() {
    let json = JSON.parse(localStorage.getItem("contents"));

    clearFolders();

    for (let category in json) {
        let div = document.createElement("div");
        div.className = "folder";

        let title = document.createElement("h6");
        title.innerHTML = category;

        let ul = document.createElement("ul");

        for (let linkName in json[category].links) {
            let li = document.createElement("ul");

            let hyperLink = document.createElement("a");
            hyperLink.textContent = linkName;
            hyperLink.href = json[category].links[linkName];

            li.appendChild(hyperLink);
            ul.appendChild(li);
        }

        div.appendChild(title);
        div.appendChild(document.createElement('br'));
        div.appendChild(ul);
        document.getElementById("folders").appendChild(div);
    }

    return localStorage.getItem("contents");
}

function clearFolders() {
    let currentFolders = document.getElementById("folders");
    currentFolders.innerHTML = "";
}
