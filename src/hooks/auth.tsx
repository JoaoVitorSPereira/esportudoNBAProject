/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  userApproved: boolean;
}

interface IAuthContextData {
  signInAsyncStorage(): Promise<void>;
  signOutAsyncStorage(): Promise<void>;
  user: User;
  isLoggedIn: boolean;
}

const asyncKey = '@esportudo:user';

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState({} as User);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function signInAsyncStorage() {
    await AsyncStorage.setItem(asyncKey, JSON.stringify(user));
    setIsLoggedIn(true);
    console.log('LOGGED IN');
  }

  async function signOutAsyncStorage() {
    setUser({} as User);
    setIsLoggedIn(false);
    await AsyncStorage.removeItem(asyncKey);
    console.log('LOGGED OUT');
  }

  const values = useMemo(
    () => ({
      signInAsyncStorage,
      signOutAsyncStorage,
    }),
    [],
  );

  useEffect(() => {
    (async () => {
      const storageUser = await AsyncStorage.getItem(asyncKey);

      if (storageUser) {
        const userJson = JSON.parse(storageUser);

        setUser(userJson);
        setIsLoggedIn(true);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...values,
        user,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
