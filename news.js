class News{
    constructor(){
//      Put the api key to check out this project   
        this.api_key = '';
        this.pageSize = 5;
    }

    async getNews(code) {
        const newsContent = await fetch(`https://newsapi.org/v2/top-headlines?country=${code}&pageSize=${this.pageSize}&apiKey=${this.api_key}`);
        const news = await newsContent.json();
        return {
            news
        }
    }     
}
