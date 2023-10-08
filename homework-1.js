const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
function generateKey(length, characters) {
    let newCharacters = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++){
        let charactersIndex = Math.floor(Math.random() * charactersLength);
        newCharacters += characters.charAt(charactersIndex);
    }
    return newCharacters;
}
const key = generateKey(16, characters);
console.log(key); // eg599gb60q926j8i
