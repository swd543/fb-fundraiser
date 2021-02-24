const { REACT_APP_FACEBOOK_APP_ID } = process.env

export function initFacebookSdk() {
    return new Promise(resolve => {
        // wait for facebook sdk to initialize before starting the react app
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: REACT_APP_FACEBOOK_APP_ID,
                cookie: true,
                xfbml: true,
                version: 'v9.0'
            });

            // window.FB.getLoginStatus(response => console.log(response))

            // auto authenticate with the api if already logged in with facebook
            // window.FB.getLoginStatus(({ authResponse }) => {
            //     if (authResponse) {
            //         // accountService.apiAuthenticate(authResponse.accessToken).then(resolve);
            //         fetch()
            //         const response = axios.post(`${baseUrl}/authenticate`, { accessToken });
            //         const account = response.data;
            //         accountSubject.next(account);
            //         startAuthenticateTimer();
            //         return account;
            //     } else {
            //         resolve();
            //     }
            // });
            resolve()
        };

        // load facebook sdk script
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
    });
}