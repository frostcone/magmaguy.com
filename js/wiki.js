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
    if (element !== undefined) element.id = "active-selection"
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
                if (window.location.hash.includes("#en")) return
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
            CustomMarkdownPostProcessor()
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

function CustomMarkdownPostProcessor() {
    //This allows the page to scroll to a specific element when clicking on a button that refers to that section
    for (let elementsByTagNameElement of document.getElementById('article-container').getElementsByTagName("a")) {
        if (elementsByTagNameElement.href.includes("#") && elementsByTagNameElement.href.split("#")[0] === window.location.href.split("#")[0] && !elementsByTagNameElement.href.includes("+")) {
            elementsByTagNameElement.addEventListener('click', function (event) {
                ScrollEventIntoPageSection(event, elementsByTagNameElement)
            })
        }
    }

    //This applies custom arrows to the summary tag
    for (let elementsByTagNameElement of document.getElementById('article-container').getElementsByTagName("summary")) {
        let summaryTextElement
        if (elementsByTagNameElement.getElementsByTagName("b").length > 0) {
            summaryTextElement = elementsByTagNameElement.getElementsByTagName("b")[0]
        } else {
            summaryTextElement = elementsByTagNameElement
        }
        summaryTextElement.innerHTML = "↪" + summaryTextElement.innerHTML
        elementsByTagNameElement.parentElement.onclick = function () {
            if (summaryTextElement.innerHTML.includes("↪")) {
                summaryTextElement.innerHTML = summaryTextElement.innerHTML.replace("↪", "🞃")
            } else {
                summaryTextElement.innerHTML = summaryTextElement.innerHTML.replace("🞃", "↪")
            }
        }
    }

    //This encapsulates the contents of <details> into a new div that has the details-content class for easy css styling
    for (let elementsByTagNameElement of document.getElementById('article-container').getElementsByTagName("details")) {
        let htmlContents = elementsByTagNameElement.innerHTML.split("</summary>")[1]
        let detailsContent = document.createElement("div")
        detailsContent.classList.add("details-content")
        detailsContent.innerHTML = htmlContents;
        htmlContents = elementsByTagNameElement.innerHTML.split("</summary>")[0] + "</summary>"
        elementsByTagNameElement.innerHTML = htmlContents
        elementsByTagNameElement.appendChild(detailsContent)
    }

    //This inserts the pre->code header that allows easy copying
    for (let elementsByTagNameElement of document.getElementById('article-container').getElementsByTagName("pre")) {
        for (let codeElement of elementsByTagNameElement.getElementsByTagName("code")) {
            let newHeader = document.createElement("div")
            newHeader.classList.add("code-header")
            let leftDiv = document.createElement("div")
            let rightDiv = document.createElement("a")
            rightDiv.onclick = function () {
                CopyClipboard(this)
            }
            leftDiv.classList.add("code-header-left")
            rightDiv.classList.add("code-header-right")
            let leftDivText;
            codeElement.classList.forEach(function (iteratedClass) {
                if (iteratedClass.includes("language-")) leftDivText = iteratedClass.split("language-")[1]
            })
            leftDiv.innerText = leftDivText
            rightDiv.innerText = "📋 Copy"
            newHeader.appendChild(leftDiv)
            newHeader.appendChild(rightDiv)
            elementsByTagNameElement.insertBefore(newHeader, codeElement)
        }
    }

    //Inserts the raw data from the code blocks into the container as a data property because the highlighter will destroy the ability to easily get this data
    for (let elementsByTagNameElement of document.getElementById('article-container').getElementsByTagName("pre")) {
        for (let codeElement of elementsByTagNameElement.getElementsByTagName("code")) {
            codeElement.setAttribute("data-rawyaml", codeElement.textContent)
        }
    }

    //Apply highlighting on the whole page
    hljs.highlightAll()

    //Add click to link for headers in article
    AddLinkToHeader()

}

function AddLinkToHeader() {
    let headers = [];
    let container = document.getElementById('article-container');

    headers = headers.concat(Array.from(container.getElementsByTagName("h1")));
    headers = headers.concat(Array.from(container.getElementsByTagName("h2")));
    headers = headers.concat(Array.from(container.getElementsByTagName("h3")));
    headers = headers.concat(Array.from(container.getElementsByTagName("h4")));
    headers = headers.concat(Array.from(container.getElementsByTagName("h5")));

    for (let header of headers) {
        let originalText = header.innerText;
        header.innerText = "🔗 " + header.innerText;
        header.onclick = function (){
            if (window.location.hash.includes("%")) {
                window.location.hash = window.location.hash.split("%")[0] + "%" + TurnHeaderIntoLink(originalText)
            }
            else {
                window.location.hash = window.location.hash + "%" + TurnHeaderIntoLink(originalText)
            }
            header.scrollIntoView({
                behavior: 'smooth', block: 'start'
            })
        }
    }
    console.log("size " + headers.length);
}


function CopyClipboard(copyButton) {
    let textToCopy = copyButton.parentElement.parentElement.getElementsByTagName("code")[0].getAttribute("data-rawyaml")
    let tempTextArea = document.createElement("textarea")
    tempTextArea.textContent = textToCopy
    tempTextArea.select()
    tempTextArea.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(tempTextArea.innerHTML).then(rsp => {
        tempTextArea.remove()
        let originalText = copyButton.innerHTML
        copyButton.innerHTML = "✔ Copied!"
        setTimeout(function () {
            copyButton.innerHTML = originalText
        }, 1000)
    })

}

function GenerateIndexOnClick() {
    if (document.getElementById("generated-index") !== null) document.getElementById("generated-index").remove()
    let newContainer = document.createElement("div")
    newContainer.id = "generated-index"
    let sidebarElement
    for (let elementsByTagNameElement of document.getElementsByTagName("a")) {
        if (elementsByTagNameElement.onclick === undefined || elementsByTagNameElement.onclick === null) continue
        if (!elementsByTagNameElement.onclick.toString().includes("$language$")) continue
        let url = elementsByTagNameElement.onclick.toString().split("'")[1].split("$")[2]
        let currentURL = window.location.hash.split("%")[0].replaceAll("+", "/")
        if (!currentURL.includes(url)) continue
        sidebarElement = elementsByTagNameElement
        break
    }

    if (sidebarElement === undefined) {
        return
    }

    sidebarElement.parentElement.appendChild(newContainer)

    let listOfHeaders = []
    ScanForHeader(document.getElementById('article-container'), listOfHeaders)

    for (let elementsByTagNameElement of listOfHeaders) {
        let newElement = elementsByTagNameElement.cloneNode(true)
        newElement.classList.add("generated-index-element")
        newElement.innerHTML = "→ " + newElement.innerHTML.replaceAll("🔗 ", "")
        newContainer.appendChild(newElement)
        newElement.onclick = function () {
            IndexClick(this)
        }
    }
}

function IndexClick(clickedElement) {
    if (clickedElement === undefined || clickedElement.innerHTML === undefined) return
    if (window.location.hash.includes("%")) window.location.hash = window.location.hash.split("%")[0]
    window.location.hash += "%" + TurnHeaderIntoLink(clickedElement.innerHTML.replace("→ ", "").replaceAll("🔗 ", ""))
    GlobalArticleChange(window.location.hash)
}

function ScanForHeader(element, list) {
    if (element.tagName === "H1" || element.tagName === "H2" || element.tagName === "H3" || element.tagName === "H4" || element.tagName === "H5") {
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
        } else {
            window.location.hash += "%" + headerName;
        }
    } else console.log("Failed to find header for " + headerName)
}

function CrawlThroughHeaders(headerTagName, targetHeader) {
    for (let elementsByTagNameElement of document.getElementById('article-container').getElementsByTagName(headerTagName)) {
        let cleanLink = elementsByTagNameElement.innerHTML.replace("🔗 ", "")
        if (TurnHeaderIntoLink(cleanLink) === targetHeader) return elementsByTagNameElement
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
        .replaceAll("🔗 ","")
}