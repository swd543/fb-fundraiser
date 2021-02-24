const { REACT_APP_FACEBOOK_APP_ID } = process.env

export function initFacebookSdk() {
    return new Promise(resolve => {
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            js.async = true
            js.defer = true
            js.crossorigin = 'anonymous'
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        // wait for facebook sdk to initialize before starting the react app
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: REACT_APP_FACEBOOK_APP_ID,
                cookie: true,
                xfbml: true,
                status: true,
                version: 'v9.0'
            });
            console.log('loaded')
            resolve('Finished loading SDK')
        };
    });
}