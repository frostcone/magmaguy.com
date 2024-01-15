document.addEventListener('DOMContentLoaded', function () {
    if (window.location.hash === "") {
        window.location.hash = "#en+main_info.md"
        LanguageSwitch("en")
        ArticleClick('$language$/main_info.md')
    } else {
        let hash = window.location.hash
        let identifier = hash.replaceAll("+", "/").replaceAll("#", "/").replace("/", "")
        GlobalArticleChange(identifier).then(response => {
            setTimeout(function () {
                for (let elementsByClassNameKey in document.getElementsByClassName("language-option")) {
                    let flagSrc = document.getElementsByClassName("flag-icon")[elementsByClassNameKey].src
                    if (flagSrc === undefined) continue
                    let flagLanguage = flagSrc.split("/")[flagSrc.split("/").length - 1].split(".")[0]
                    if (flagLanguage === window.location.hash.split("+")[0].replace("#", '')) {
                        ChangeFlag(document.getElementsByClassName("flag-icon")[elementsByClassNameKey].parentElement)
                        return
                    }
                }
            }, 10)
        })
    }
})

function LanguageSwitch(language, element) {
    let hash = window.location.hash
    let identifier
    if (hash.split("+").length > 2) {
        identifier = "#" + language
        for (let i = 0; i < hash.split("+").length; i++) if (i > 0) identifier += "+" + hash.split("+")[i]
    } else {
        identifier = "#" + language + "+main_info.md"
    }
    GlobalArticleChange(identifier)

    if (element !== undefined) {
        ChangeFlag(element);
    }
}

function ChangeFlag(languageChildNode) {
    let currentLanguageDisplay = document.getElementById("active-language");
    let currentChildren = Array.from(currentLanguageDisplay.children).map(child => {
        if (child.tagName !== "IMG") {
            return child.cloneNode(true);
        } else {
            return undefined;
        }
    });
    currentLanguageDisplay.innerHTML = languageChildNode.innerHTML;
    currentChildren.forEach(child => {
        if (child) currentLanguageDisplay.appendChild(child);
    });
}

function ArticleClick(identifier, element) {
    if (document.getElementById("active-selection") !== null) document.getElementById("active-selection").id = ""
    element.id = "active-selection"
    identifier = identifier.replace("$language$", "#" + window.location.hash.split("#")[1].split("+")[0])
    GlobalArticleChange(identifier)
}

function GlobalArticleChange(articleURL) {
    let identifier = "wiki/" + articleURL.replaceAll("+", "/").replaceAll("#", "")
    let pageSection = undefined
    if (identifier.includes("%")) {
        pageSection = identifier.split("%")[1]
        identifier = identifier.split("%")[0]
    }
    return fetch(identifier)
        .then(response => {
            if (!response.ok) {
                window.location.hash = identifier.replace("wiki/", "").replaceAll("/", "+")
                let currentLanguage = window.location.hash.split("+")[0]
                let newHash = window.location.hash.replace(currentLanguage, "#en")
                GlobalArticleChange(newHash)
            }
            return response.text()
        })
        .then(data => {
            document.getElementById('article-container').innerHTML = marked.parse(data);
            window.location.hash = identifier.replace("wiki/", "").replaceAll("/", "+")
            for (let elementsByTagNameElement of document.getElementById('article-container').getElementsByTagName("a")) {
                if (elementsByTagNameElement.href.includes("#") && elementsByTagNameElement.href.split("#")[0] === window.location.href.split("#")[0] && !elementsByTagNameElement.href.includes("+")) {
                    elementsByTagNameElement.addEventListener('click', function (event) {
                        ScrollEventIntoPageSection(event, elementsByTagNameElement)
                    })
                }
            }
            if (pageSection !== undefined) {
                window.location.hash += "%" + pageSection;
                ScrollIntoPageSection(pageSection)
            }

            GenerateIndexOnClick()
        })
        .catch(error => {
            console.error('Error:', error)
        });
}

function GenerateIndexOnClick(pageSection){
    if (document.getElementById("generated-index") !== null)
        document.getElementById("generated-index").remove()
    let newContainer = document.createElement("div")
    newContainer.id = "generated-index"
    let sidebarElement
    for (let elementsByTagNameElement of document.getElementsByTagName("a")) {
        if (elementsByTagNameElement.onclick === undefined || elementsByTagNameElement.onclick === null) continue
        if (!elementsByTagNameElement.onclick.toString().includes("$language$")) continue
        let url = elementsByTagNameElement.onclick.toString().split("'")[1].split("$")[2]
        let currentURL = window.location.hash.split("%")[0].replaceAll("+","/")
        if (!currentURL.includes(url)) continue
        sidebarElement = elementsByTagNameElement
        break
    }

    if (sidebarElement === undefined) {
        console.log("couldn't find it")
        return
    }

    sidebarElement.appendChild(newContainer)

    let listOfHeaders = []
    ScanForHeader(document.getElementById('article-container'), listOfHeaders)

    for (let elementsByTagNameElement of listOfHeaders) {
        let newElement = elementsByTagNameElement.cloneNode(true)
        newElement.classList.add("generated-index-element")
        newElement.innerHTML = "→ " + newElement.innerHTML
        newContainer.appendChild(newElement)
    }

    //newContainer.innerHTML = "test"
}

function ScanForHeader(element, list) {
    console.log(element.tagName)

    if (element.tagName === "H1" ||
        element.tagName === "H2" ||
        element.tagName === "H3" ||
        element.tagName === "H4" ||
        element.tagName === "H5") {
        console.log("adding")
        list.push(element)
    }

    // Now process all of its child elements
    for (let i = 0; i < element.children.length; i++) {
        ScanForHeader(element.children[i], list);
    }
}

function ScrollEventIntoPageSection(event, link) {
    event.preventDefault()
    let headerName = link.href.split("#")[1]
    ScrollIntoPageSection(headerName)
}

function ScrollIntoPageSection(headerName) {
    let target = undefined
    target = CrawlThroughHeaders("h1", headerName)
    if (target === undefined) target = CrawlThroughHeaders("h2", headerName)
    if (target === undefined) target = CrawlThroughHeaders("h3", headerName)
    if (target === undefined) target = CrawlThroughHeaders("h4", headerName)
    if (target === undefined) target = CrawlThroughHeaders("h5", headerName)
    if (target !== undefined) {
        target.scrollIntoView({
            behavior: 'smooth', block: 'start'
        })
        if (window.location.hash.includes("%")) {
            window.location.hash.replace(window.location.hash.split("%")[1], headerName)
        }
        else {
            window.location.hash += "%" + headerName;
        }
    } else console.log("Failed to find header for " + headerName)
}

function CrawlThroughHeaders(headerTagName, targetHeader) {
    for (let elementsByTagNameElement of document.getElementById('article-container').getElementsByTagName(headerTagName)) {
        {
            console.log("searching for " + targetHeader + " found " + TurnHeaderIntoLink(elementsByTagNameElement.innerText))
            if (TurnHeaderIntoLink(elementsByTagNameElement.innerText) === targetHeader) return elementsByTagNameElement
        }
    }
    return undefined
}

function TurnHeaderIntoLink(headerText) {
    return headerText.toLowerCase()
        .replaceAll("(", "-")
        .replaceAll(")", "-")
        .replaceAll("&", "-")
        .replaceAll("'", "-")
        .replaceAll('"', "-")
        .replaceAll("!", "-")
        .replaceAll(" ", "-")
        .replaceAll("/", "-")
        .replaceAll("!", "-")
}