function ArticleClick(identifier){
    fetch(identifier)
        .then(response => response.text())
        .then(data => {
            document.getElementById('article-container').innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}