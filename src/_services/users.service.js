export const usersService = {
    getUser,
};

function getUser(userId, getFireStore) {
    const firestore = getFireStore();

    return firestore.collection('users').doc(userId).get();
}