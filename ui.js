console.log("Hello")


class UI{
    constructor(){
        this.news = document.getElementById('news');
    }

    showNews(news){
        let output = '';
        console.log(news);
        news.articles.forEach(function(article){
            output += `
            <div class="card mb-2 col-md-8 offset-md-2">
                <img class="card-img-top mb-2" src="${article.urlToImage}">
                <div class="card-body">
                    <div class="card-title"><a href="${article.url}" target="_blank" class="mb-4">${article.title}</a></div>
                    <small class="text-muted">${article.publishedAt} ${article.author}</small>
                    <div class="card-text text-center">${article.description}</div>
                </div>
            </div>
`
        });

        this.news.innerHTML = output;  
    }

    showAlert(message, className){
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.searchContainer');

        const search = document.querySelector('.search');

        container.insertBefore(div, search);

        setTimeout(()=>{
            this.clearAlert();
        },3000);
    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert')
        if(currentAlert)
        {
            currentAlert.remove();
        }
    }

    clearNews(){
        this.news.innerHTML = '';
    }

}