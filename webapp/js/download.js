'use strict';

function download(stringList) {
    let filename = stringList[0]
    filename = filename.split("filename: ")[1]

    if (!filename.includes(".yml")) {
        filename += ".yml";
    }

    filename = filename.replaceAll("\"", "")
    filename = filename.replaceAll(" ", "_")

    let text = ""
    for (let i = 1; i < stringList.length; i++)
        text += stringList[i] + "\n"

    text += "# Generated with https://magmaguy.com/webapp/webapp.html !"

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    console.log("filename: " + filename)

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}