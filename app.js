

const apiKey = 'cea44b2109d142bc880071e8e965fd7a';
const main = document.querySelector('main');
const sourceSelector = document.querySelector('#sourceSelecter');
const defaultSource= 'the-washington-post';


window.addEventListener('load', async e =>{
    updateNews();
    await updateSources();
    sourceSelector.value= defaultSource;
});

async function updateSources(){

    const res = await fetch('https://newsapi.org/v1/sources');
    const json = await res.json();

    sourceSelector.innerHTML = json.sources
    .map(src => `<option value="${src.id}">${src.name}</option>`)
    .join('\n');
}

async function updateNews(source = defaultSource) {
    const res = await fetch('https://newsapi.org/v1/articles?source='+ source +'&apiKey='+ apiKey );
    const json = await res.json();

    main.innerHTML = json.articles.map(createArticles).join('\n');

}

function createArticles(articles){

    return `
            <div class="articles">
                <a href="${articles.url}">
                <h2>${articles.title}</h2>
                <img src="${articles.urlToImage}" height="400" />
                <p>
                    ${articles.description}
                </p>
                </a>
            </div>
            `;


}