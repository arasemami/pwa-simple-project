# pwa-simple-project
Progressive Web Apps simple project



## Common registration boilerplate

If you've ever read about service workers, you've probably come across boilerplate substantially similar to the following:

`
    if('serviceWorker' in navigator){
        try {
            navigator.serviceWorker.register('/sw.js');
        } catch (error) {
            console.log(error + " SW is failed!");
        }
    }
`
