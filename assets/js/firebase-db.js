function initDB() {
    // Initialize Cloud Firestore through Firebase
    var db = firebase.firestore();
    var users = firebase.firestore().collection("users");

    firebase.auth().onAuthStateChanged(function (user) {
        //document.getElementById('quickstart-verify-email').disabled = true;
        if (user) {
            users.where('userid', '==', user.uid).get().then((querySnapshot) => {
                const data = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                console.log("User:", data);
            });
        }
    })
}

function allUsers() {
    var db = firebase.firestore();
    var users = firebase.firestore().collection("users");

    users.get().then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        console.log("All data in 'users' collection", data);
    });
}

window.onload = function () {
    initDB();
};