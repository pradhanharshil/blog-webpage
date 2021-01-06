fetch("../config.json").then(resp => resp.json())
    .then((authData) => {
        const firebaseConfig = {
            apiKey: authData.apiKey,
            authDomain: authData.authDomain,
            projectId: authData.authDomain,
            storageBucket: authData.storageBucket,
            messagingSenderId: authData.messagingSenderId,
            appId: authData.appId,
            measurementId: authData.measurementId
        };
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
        
        let headerScript = document.createElement("script");
        let authScript = document.createElement("script");

        headerScript.src = "scripts/header.js";
        authScript.src = "scripts/auth.js";

        document.body.append(headerScript);
        document.body.append(authScript);
    }).catch(error => console.log(error.message));