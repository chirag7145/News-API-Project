const news = new News;
const ui = new UI;

const searchCode = document.getElementById('searchCode');

searchCode.addEventListener('keyup', (e) => {

    const codeText = e.target.value;
    console.log(codeText)
    if(codeText !== '')
    {
        news.getNews(codeText)
            .then(data => {
                // console.log(data.news.articles);
                if(data.news.articles.length !== 0)
                {
                    ui.showNews(data.news);
                    console.log(data.news.articles);
                }
                else{
                    ui.showAlert('Enter correct code','alert alert-danger');  
                }
            })
    }
    else{
        ui.clearNews();
    }
});