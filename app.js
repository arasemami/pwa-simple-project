

const apiKey = 'cea44b2109d142bc880071e8e965fd7a';
const main = document.querySelector('main');
const sourceSelector = document.querySelector('#sourceSelecter');
const defaultSource= 'the-washington-post';


window.addEventListener('load', async e =>{
    updateNews();
    await updateSources();
    sourceSelector.value= defaultSource;
    sourceSelector.addEventListener('change', e => {
        updateNews(e.target.value);
    });
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
         


            <div class="card" style="margin:2rem">
                <div class="card-header">
                   <h1> ${articles.title}</h1>
                </div>
                <a href="${articles.url}">
                    <img class="card-img-top" src="${articles.urlToImage}"    alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text">${articles.description}</p>
                    </div>
                </a>
            </div>



            `;


}