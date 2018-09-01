

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

    if('serviceWorker' in navigator){
        try {
            navigator.serviceWorker.register('/sw.js');
            console.log('service Worker register!');
        } catch (error) {
            console.log(error + "SW is failed!");
        }
    }
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
     
            <a href="${articles.url}">

                <div class="card">
                        <img class="card-img-top" src="${articles.urlToImage}"    alt="Card image cap">

                        <div class="card-body">
                            <h5 class="card-title">${articles.title}</h5>
                            <p class="card-text">${articles.description}</p>
                            <p class="card-text"><small class="text-muted">Last updated 2 mins ago</small></p>
                        </div>
                </div
            
            </a>

            `;


}