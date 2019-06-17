import {AsyncStorage} from 'react-native';

    const _tokenStorageKey = 'token';

    export async function storeToken(token) {
        try {
            await AsyncStorage.setItem(_tokenStorageKey, token)
            console.log("token saved");
        } catch (error) {
            console.log(error.message);
        }
    }
    
    export async function getToken() {
    let token = '';
    try {
        token = await AsyncStorage.getItem(_tokenStorageKey);
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
    return token;
}