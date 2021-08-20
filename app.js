fetch('https://newsapi.org/v2/everything?q=tesla&apiKey=5d755320cc48467db060b4bd83526aa5').then(function(response) {
        console.log(response, 'Response');
        return response.json();
    }).then(newsData)
    .catch(function(err) {
        console.log(err);
    });;

function newsData(obj) {
    let Array = obj.articles;
    console.log(Array);
    console.log(typeof Array);
   

    document.getElementById("container").innerHTML = (Array.map(articles =>
      ` 
        <div class="main">
          <div class="content">
          <img  src="${articles.urlToImage}" />
          <button id = "btn" onclick= "getElementById('moreInfo').innerHTML='author: ${articles.author}<br> news title: ${articles.title}<br> news description ${articles.description}  '" >  Show More! </button>
          </div> 
       </div>`
    ).join(''));
  }