export const usersAuthService = {
    singUpUser,
};

function singUpUser(email, password, getFirebase) {
    const firebase = getFirebase();

    return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
}