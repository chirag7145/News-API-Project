class News{
    constructor(){
        this.api_key = '594abf2653e543c880257c53c041cfd4';
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