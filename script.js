const apiKey = '0874d5c8376643adb20fbff8b315189d'

const blogContainer = document.getElementById("bolg-container");


async function fetchRendomNews()
{
    try{
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`;
        const response = await  fetch(apiUrl);
        const data = await response.json();
        return data.articles;
    }catch(error){

        console.error("Error fetching random news",error);
        return [];
    }
}

function displayBlogs(articles){
    blogContainer.innerHTML ="";
    articles.forEach((article) => {

        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");

        const img = document.createElement("img");
        img.src = article.urlToImage;
        img.alt = article.title;

        const title = document.createElement("h1");
        title.textContent = article.title;

        const description = document.createElement("p");
        description.textContent = article.description;

        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogCard.appendChild(blogCard);



    });

}

(async ()=>{
 try{
   const articles = await fetchRendomNews();
   displayBlogs(articles);

 }catch(error) {
   console.error("error fetching random news", error);
 }
});
