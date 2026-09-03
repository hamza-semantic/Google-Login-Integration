import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'session_token';

export const setLoggedInSessionToken = async (token: string) => {
  await AsyncStorage.setItem(TOKEN_KEY, token);
};

export const getLoggedInSessionToken = async (): Promise<string | null> => {
  return AsyncStorage.getItem(TOKEN_KEY);
};

export const clearLoggedInSessionToken = async () => {
  await AsyncStorage.removeItem(TOKEN_KEY);
};