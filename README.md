# pwa-simple-project
Progressive Web Apps simple project, Fetch data from api and cached in your browser.

# Demo

![alt text](https://image.ibb.co/hFo27z/Component_13.png "Logo Title Text 1")




## Common registration boilerplate

If you've ever read about service workers, you've probably come across boilerplate substantially similar to the following:

```
    if('serviceWorker' in navigator){
        try {
            navigator.serviceWorker.register('/sw.js');
        } catch (error) {
            console.log(error + " SW is failed!");
        }
    }
```


---


