/**
 * This function is called when the DOM is fully loaded. It determines which language and article to load based on the URL hash.
 */
document.addEventListener('DOMContentLoaded', function () {
    if (window.location.hash === "") SetPageHash()
    LoadPageHash()
    SwitchSidebar()
})

function GetPageLanguage() {
    let language = GetWindowElement("lang");
    if (language === undefined) return "en";
    if (language === "$language$") return "en";
    return language;
}

function GetPageArticle() {
    let article = GetWindowElement("article");
    if (article === undefined) return "main_info.md"
    return article;
}

function GetPageSection() {
    return GetWindowElement("section")
}

function GetWindowElement(key) {
    let value = undefined;
    window.location.hash.split("&").forEach(segment => {
        if (segment.includes(key + "=")) value = segment.split(key + "=")[1];
    })
    return value
}

function SetPageHash(language, article, section, update) {
    if (language === undefined) language = GetPageLanguage();
    if (article === undefined) article = GetPageArticle();
    if (section === undefined) {
        history.pushState(null, null, "wiki.html#lang=" + language + "&article=" + article.replaceAll("/", "+"));
    } else {
        history.pushState(null, null, "wiki.html#lang=" + language + "&article=" + article.replaceAll("/", "+") + "&section=" + section);
    }
    if (update) LoadPageHash()
}

function SetPageHashFromPseudoDirectory(url){
    if (url === undefined) {
        SetPageHash();
        return;
    }
    if (url.includes("$language$/"))
        url = url.split("$language$/")[1];
    else if (url.includes("magmaguy.com/"))
        url = url.split("magmaguy.com/")[1];
    let section = undefined;
    if (url.includes("%")) {
        section = url.split("%")[1];
        url = url.split("%")[0];
    }
    console.log("url: " + url + " section: " + section)
    SetPageHash(undefined, url, section, true);
}

function LoadPageHash() {
    let lang = GetPageLanguage();
    let article = GetPageArticle().replaceAll("+", "/");
    let section = GetPageSection();
    let directory = "wiki/" + lang + "/" + article;
    return fetch(directory)
        .then(response => {
            if (!response.ok) {
                SetPageHash("en", "main_info.md", undefined)
                return reportError
            }
            return response.text()
        })
        .then(data => {
            document.getElementById('article-container-contents').innerHTML = marked.parse(data);
            CustomMarkdownPostProcessor(document.getElementById('article-container-contents'))
            if (section != null) ScrollIntoPageSection(section)
            GenerateIndexOnClick()
            IncrementViewCounter()
        })
        .catch(error => {
            console.error('Error:', error)
        });
}

function IncrementViewCounter() {
    fetch('https://magmaguy.com:40000/increment-page-view-counter')
        .then(res => res.json())
        .then(data => {
            document.getElementById("view-counter").innerText = data.count
            console.log(`Updated page view count: ${data.count}`)
        })
        .catch(err => console.error('Failed to update page view count:', err));
}

function SwitchSidebar() {
    let url = "wiki-sidebar.html"
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("sidebar").innerHTML = data;
        })
        .catch(function () {
            console.log("Failed to find url " + url);
        });
}

window.addEventListener('popstate', function (event) {
    LoadPageHash()
});

function LanguageSwitch(language, element) {
    SetPageHash(language, undefined, undefined, true)
    if (element !== undefined) ChangeFlag(element);
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

function ArticleClick(article, element) {
    if (document.getElementById("active-selection") !== null) {
        document.getElementById("active-selection").id = "";
    }
    if (element !== undefined) {
        element.id = "active-selection";
    }
    article = article.replace("$language$/", "")
    SetPageHash(undefined, article, undefined, true)
}

function CustomMarkdownPostProcessor(container) {
    //This allows the page to scroll to a specific element when clicking on a button that refers to that section
    container.querySelectorAll('a').forEach(function (elementsByTagNameElement) {  // selecting all 'a' elements
        if (elementsByTagNameElement.href === undefined) return;
        if (elementsByTagNameElement.href.includes("#") && elementsByTagNameElement.href.split("#")[0] === window.location.href.split("#")[0] && !elementsByTagNameElement.href.includes("+")) {
            elementsByTagNameElement.addEventListener('click', function (event) {
                event.preventDefault();  // prevent the default browser action
                ScrollEventIntoPageSection(event, elementsByTagNameElement);  // call your custom function
            });
        }
        if (elementsByTagNameElement.href.includes("$language$")) {
            elementsByTagNameElement.addEventListener('click', function (event) {  // adding event listener on click
                event.preventDefault();  // stop the actual linking to happen
                SetPageHashFromPseudoDirectory(elementsByTagNameElement.href);  // call your function
            });
        }
    });

    //This applies custom arrows to the summary tag
    for (let elementsByTagNameElement of container.getElementsByTagName("summary")) {
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
    for (let elementsByTagNameElement of container.getElementsByTagName("details")) {
        let htmlContents = elementsByTagNameElement.innerHTML.split("</summary>")[1]
        let detailsContent = document.createElement("div")
        detailsContent.classList.add("details-content")
        detailsContent.innerHTML = htmlContents;
        htmlContents = elementsByTagNameElement.innerHTML.split("</summary>")[0] + "</summary>"
        elementsByTagNameElement.innerHTML = htmlContents
        elementsByTagNameElement.appendChild(detailsContent)
    }

    //This inserts the pre->code header that allows easy copying
    for (let elementsByTagNameElement of container.getElementsByTagName("pre")) {
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
    for (let elementsByTagNameElement of container.getElementsByTagName("pre")) {
        for (let codeElement of elementsByTagNameElement.getElementsByTagName("code")) {
            codeElement.setAttribute("data-rawyaml", codeElement.textContent)
        }
    }

    //Highlights things in code boxes
    hljs.highlightAll()

    if (container.id !== undefined && container.id === "article-container-contents") {
        //Add click to link for headers in article
        AddLinkToHeader()
    }

}

/**
 * Adds clickable link icons to headers in the article.
 */
function AddLinkToHeader() {
    let headers = [];
    let container = document.getElementById('article-container-contents');

    headers = headers.concat(Array.from(container.getElementsByTagName("h1")));
    headers = headers.concat(Array.from(container.getElementsByTagName("h2")));
    headers = headers.concat(Array.from(container.getElementsByTagName("h3")));
    headers = headers.concat(Array.from(container.getElementsByTagName("h4")));
    headers = headers.concat(Array.from(container.getElementsByTagName("h5")));

    for (let header of headers) {
        let originalText = header.innerText;
        if (header.querySelector("a")) {
            continue
        }
        header.innerText = "🔗 " + header.innerText;
        header.onclick = function () {
            SetPageHash(undefined, undefined, TurnHeaderIntoLink(originalText), false);
            header.scrollIntoView({
                behavior: 'smooth', block: 'start'
            })
        }
    }
}

/**
 * Copies the raw text of a code block to clipboard.
 * @param {HTMLElement} copyButton - The clicked copy button.
 */
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

/**
 * Generates an index of the headers in the article and appends it to the sidebar.
 */
function GenerateIndexOnClick() {
    if (document.getElementById("generated-index") !== null) {
        document.getElementById("generated-index").remove();
    }
    let newContainer = document.createElement("div")
    newContainer.id = "generated-index"

    let sidebarElement
    for (let elementsByTagNameElement of document.getElementsByTagName("a")) {
        if (elementsByTagNameElement.onclick === undefined || elementsByTagNameElement.onclick === null) continue
        if (!elementsByTagNameElement.onclick.toString().includes("$language$")) continue
        let url = elementsByTagNameElement.onclick.toString().split("'")[1].split("$")[2].replace("/","")
        let currentURL = GetPageArticle().replaceAll("+", "/");
        if (!currentURL.includes(url)) continue
        sidebarElement = elementsByTagNameElement
        break
    }

    if (sidebarElement === undefined) {
        return
    }

    sidebarElement.parentElement.appendChild(newContainer)

    let listOfHeaders = []
    ScanForHeader(document.getElementById('article-container-contents'), listOfHeaders)

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
    SetPageHash(undefined, undefined, TurnHeaderIntoLink(clickedElement.innerHTML.replace("→ ", "").replaceAll("🔗 ", "")), true);
}

/**
 * Recursively scans a DOM tree for headers.
 * @param {HTMLElement} element - The element to start the scan from.
 * @param {Array} list - The list to put the found headers in.
 */
function ScanForHeader(element, list) {
    if (element.tagName === "H1" || element.tagName === "H2" || element.tagName === "H3" || element.tagName === "H4" || element.tagName === "H5") {
        list.push(element)
    }

    // Now process all of its child elements
    for (let i = 0; i < element.children.length; i++) {
        ScanForHeader(element.children[i], list);
    }
}

/**
 * Scrolls the page to a header when a link is clicked.
 * @param {Event} event - The click event object.
 * @param {HTMLAnchorElement} link - The link that was clicked.
 */
function ScrollEventIntoPageSection(event, link) {
    event.preventDefault()
    let headerName = link.href.split("#")[1]
    ScrollIntoPageSection(headerName)
}

/**
 * Scrolls the page to a given header.
 * @param {string} headerName - The name of the header to scroll to.
 */
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

/**
 * Scrolls the page to a header when a link is clicked.
 * @param {Event} event - The click event object.
 * @param {HTMLAnchorElement} link - The link that was clicked.
 */
function CrawlThroughHeaders(headerTagName, targetHeader) {
    for (let elementsByTagNameElement of document.getElementById('article-container-contents').getElementsByTagName(headerTagName)) {
        let cleanLink = elementsByTagNameElement.innerHTML.replace("🔗 ", "")
        if (TurnHeaderIntoLink(cleanLink) === targetHeader) return elementsByTagNameElement
    }
    return undefined
}

/**
 * Converts the text of a header to an identifier suitable for use in a URL.
 * @param {string} headerText - The text of the header.
 * @returns {string} The identifier.
 */
function TurnHeaderIntoLink(headerText) {
    const charactersMap = new Map();
    charactersMap.set("(", "-");
    charactersMap.set(")", "-");
    charactersMap.set("&", "-");
    charactersMap.set("'", "-");
    charactersMap.set('"', "-");
    charactersMap.set("!", "-");
    charactersMap.set(" ", "-");
    charactersMap.set("/", "-");
    charactersMap.set("!", "-");
    charactersMap.set("🔗 ", "");

    let identifier = headerText.toLowerCase();

    for (const [character, replacement] of charactersMap) {
        identifier = identifier.replaceAll(character, replacement);
    }

    return identifier;
}

document.addEventListener('click', function (event) {
    // If the clicked element is not a button, ignore it
    if (event.target.tagName.toLowerCase() !== 'a') return;
    if (event.target.href === null) return;
    if (event.target.href.toLowerCase().split("#")[1] === "string") ClickOnConfigFileGuideElement("string")
    if (event.target.href.toLowerCase().split("#")[1] === "integer") ClickOnConfigFileGuideElement("integer")
    if (event.target.href.toLowerCase().split("#")[1] === "map_list") ClickOnConfigFileGuideElement("map_list")
    if (event.target.href.toLowerCase().split("#")[1] === "string_list") ClickOnConfigFileGuideElement("string_list")
    if (event.target.href.toLowerCase().split("#")[1] === "serialized_location") ClickOnConfigFileGuideElement("serialized_location")
    if (event.target.href.toLowerCase().split("#")[1] === "boolean") ClickOnConfigFileGuideElement("boolean")
    if (event.target.href.toLowerCase().split("#")[1] === "multiplier") ClickOnConfigFileGuideElement("multiplier")
    if (event.target.href.toLowerCase().split("#")[1] === "color_codes") ClickOnConfigFileGuideElement("color_codes")
    if (event.target.href.toLowerCase().split("#")[1] === "double") ClickOnConfigFileGuideElement("double")
    if (event.target.href.toLowerCase().split("#")[1] === "filename") ClickOnConfigFileGuideElement("filename")
    if (event.target.href.toLowerCase().split("#")[1] === "material") ClickOnConfigFileGuideElement("material")
});

document.addEventListener('mouseover', function (event) {
    // If the clicked element is not a button, ignore it
    if (event.target.tagName.toLowerCase() !== 'a') return;
    if (!event.target.href) return;

    // Split the href and take the part after '#' sign
    let identifier = event.target.href.toLowerCase().split("#")[1];

    let elementName;
    switch (identifier) {
        case "string":
            elementName = 'string';
            break;
        case "integer":
            elementName = 'integer';
            break;
        case "map_list":
            elementName = 'map_list';
            break;
        case "string_list":
            elementName = 'string_list';
            break;
        case "serialized_location":
            elementName = 'serialized_location';
            break;
        case "boolean":
            elementName = 'boolean'
            break;
        case "multiplier":
            elementName = 'multiplier'
            break;
        case "color_codes":
            elementName = 'color_codes'
            break;
        case "double":
            elementName = 'double'
            break;
        case "filename":
            elementName = 'filename'
            break;
        case "material":
            elementName = 'material'
            break;
        default:
            return;
        // Unknown identifier...
    }

    // Ensure old tooltips are removed
    let oldTooltip = document.getElementById('article-tooltip');
    if (oldTooltip) oldTooltip.parentNode.removeChild(oldTooltip);

    // Show new tooltip
    DisplayConfigTooltip(event.target, elementName);

    // Hide tooltip when the mouse leaves the element
    event.target.addEventListener('mouseleave', function () {
        let tooltip = document.getElementById('article-tooltip');
        if (tooltip) tooltip.parentNode.removeChild(tooltip);
    });
});

function DisplayConfigTooltip(hoveredElement, elementName) {
    let guideURL = "/wiki/" + GetPageLanguage() + "/global/configuration_file_guide.md";
    fetch(guideURL)
        .then(response => {
            return response.text();
        })
        .then(data => {
            let tooltipContents = document.createElement("div");
            tooltipContents.innerHTML = marked.parse(data)
            let specificSection = tooltipContents.querySelector('#config_' + elementName).innerHTML


            // Check that the hovered element is not null
            if (hoveredElement) {
                // Create a tooltip element
                let tooltip = document.createElement("div");
                tooltip.className = "tooltip";
                tooltip.innerHTML = specificSection
                tooltip.id = 'article-tooltip';

                tooltip.style.maxWidth = '500px';

                CustomMarkdownPostProcessor(tooltip)

                // Append the tooltip to the body
                document.body.appendChild(tooltip);

                // Get the bounding rectangle of the hovered element
                let rect = hoveredElement.getBoundingClientRect();

                // Position the tooltip
                tooltip.style.left = window.scrollX + rect.left + 'px';
                tooltip.style.top = window.scrollY + rect.top + hoveredElement.offsetHeight + 'px';
            } else {
                console.error('Error: Could not find the hovered element.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Style the tooltip
let style = document.createElement('style');
style.innerHTML = `
  .tooltip {
    position: absolute;
    background-color: #333;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
  }
`;
document.head.appendChild(style);

function ClickOnConfigFileGuideElement(elementName) {
    GlobalArticleChange(GetLanguage() + "/global/configuration_file_guide.md").then(rsp => {
        document.getElementById("config_" + elementName).scrollIntoView({
            behavior: 'smooth', block: 'start'
        })
    })
}

let AllFilesCache = [];
let fuse;

function FetchPageDataForSearch(url) {
    return fetch(url)
        .then(response => {
            return response.text()
        })
        .then(data => {
            return marked.parse(data).replace(/<[^>]+>/g, '');
        })
        .catch(error => {
            console.error('Error:', error)
        });
}

function StartSearch(input_box) {
    let results = fuse.search(input_box.value);

    let searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = ""; // Clear any previous results
    searchResults.style.display = results.length ? "block" : "none"; // Hide the dropdown if there are no results

    for (let result of results) {
        let a = document.createElement("a");
        a.onclick = function () {
            GlobalArticleChange(result.item.url)
        }
        a.textContent = result.item.url;
        searchResults.appendChild(a);
    }
}

async function FetchAllMarkdownFiles() {
    try {
        let response = await fetch('https://magmaguy.com:40000/all-markdown-files')
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        AllFilesCache = await response.json();
    } catch (error) {
        console.error(`Failed to fetch all markdown files: ${error.message}`);
    }
    InitializeAllPagesForSearch()
}

async function InitializeAllPagesForSearch() {
    let data = [];

    const promises = AllFilesCache.map(async file => {
        try {
            const fileData = await FetchPageDataForSearch(file);
            data.push({
                url: file, data: fileData
            });
        } catch (error) {
            console.error(`Failed to fetch data for ${file}:`, error);
        }
    });

    await Promise.all(promises);
    fuse = new Fuse(data, {
        keys: ['url', 'data'], tokenize: true, matchAllTokens: true, includeMatches: true
    })
}

//TODO: make this a single request to node with a single massive reply instead of a million requests that get blocked by the client anyhow
FetchAllMarkdownFiles();

let resizer = document.getElementById('resizer');
let leftSide = document.getElementById('sidebar');
let rightSide = document.getElementById('article-container-container');

function startResize(e) {
    e.preventDefault();
    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', stopResize);
    document.addEventListener('touchmove', resize);
    document.addEventListener('touchend', stopResize);
}

function resize(e) {
    let clientX;
    if (e.type === 'touchmove') {
        clientX = e.touches[0].clientX;
    } else {
        clientX = e.clientX;
    }
    let width = (clientX / window.innerWidth) * 100;
    if (width > 5 && width < 85) {
        leftSide.style.width = width + 'vw';
        rightSide.style.width = (100 - width) + 'vw';
    }
}

function stopResize() {
    document.removeEventListener('mousemove', resize);
    document.removeEventListener('mouseup', stopResize);
    document.removeEventListener('touchmove', resize);
    document.removeEventListener('touchend', stopResize);
}

resizer.addEventListener('mousedown', startResize);
resizer.addEventListener('touchstart', startResize);