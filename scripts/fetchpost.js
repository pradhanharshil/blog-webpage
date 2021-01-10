console.log("Fetch script");

const newsApiKey = "92099a04330d466c9d51c02a3ccca69e";
const newsApiBaseURL = "http://newsapi.org/v2/everything";
let topic = "linux";
const date = new Date();
const dateString = date.getFullYear() + "-" +date.getMonth()+1 + "-" +date.getDate();

const apiCall = newsApiBaseURL + "?q=" +topic+ "&from=" + dateString + "&sortBy=publishedAt&apiKey=" + newsApiKey;

fetch(apiCall).then(response => response.json())
    .then(data => {
        for (let i=0;i<20;i++) {
            if (data.articles[i].urlToImage != null) {
                const card = document.createElement("div");
                card.className = "card";

                card.innerHTML = '<h2>' + data.articles[i].title + '</h2>' 
                + '<p>' + data.articles[i].author + '</p>' + 
                '<img src=' + data.articles[i].urlToImage + 'alt=Text>'
                + '<p>' + data.articles[i].description +'</p><br>'
                + '<a href="#"><img src="assets/icons/fb.png" class="share-icon"></a>'
                + '<a href="#"><img src="assets/icons/twitter.png" class="share-icon"></a>'
                + '<a href="#"><img src="assets/icons/instagram.png" class="share-icon"></a>'
                + '<a href="#"><img src="assets/icons/linkedin.png" class="share-icon"></a>';

                document.getElementById("articles").appendChild(card);
            }
        }
        const pagesList = document.createElement("div");
        pagesList.className("pages");
        pagesList.innerHTML = '<a href="#">&laquo;</a>'
        + '<a href="#" class="active">1</a>'
        + '<a href="#">2</a>'
        + '<a href="#">2</a>'
        + '<a href="#">2</a>'
        + '<a href="#">2</a>'
        + '<a href="#">&raquo;</a>';
        document.getElementById("articles").appendChild(pagesList);
    }).catch(error => { 
        console.log(error.message);
    });