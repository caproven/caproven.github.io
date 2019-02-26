function setJsonLocalStorage(str) {
    //localStorage.setItem("contents", JSON.stringify(json));
    localStorage.setItem("contents", str);
}

function getJsonLocalStorage() {
    var json = JSON.parse(localStorage.getItem("contents"));

    clearFolders();

    for (var category in json) {
        var div = document.createElement("div");
        div.className = "folder";

        var title = document.createElement("h6");
        title.innerHTML = category;

        var ul = document.createElement("ul");

        for (var linkName in json[category].links) {
            var li = document.createElement("ul");

            var hyperLink = document.createElement("a");
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
    var currentFolders = document.getElementById("folders");
    currentFolders.innerHTML = "";
}
