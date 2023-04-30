declare module 'redux-persist-cookie-storage' {
    import { Storage } from 'redux-persist';
    interface CookieStorageOptions {
        /**
         * The domain of the cookie.
         */
        domain?: string;
        /**
         * The path of the cookie.
         */
        path?: string;
        /**
         * The expiration time of the cookie.
         */
        expires?: Date;
        /**
         * The maximum age of the cookie.
         */
        maxAge?: number;
        /**
         * Whether to use secure cookies or not.
         */
        secure?: boolean;
        /**
         * Whether to use HttpOnly cookies or not.
         */
        httpOnly?: boolean;
    }
    export class CookieStorage implements Storage {
        constructor(options?: CookieStorageOptions);
        getItem(key: string, callback?: (error?: Error, value?: string) => void): Promise<string | null> | void;
        setItem(key: string, value: string, callback?: (error?: Error) => void): Promise<void> | void;
        removeItem(key: string, callback?: (error?: Error) => void): Promise<void> | void;
        getAllKeys(callback?: (error?: Error, keys?: string[]) => void): Promise<string[]> | void;
        multiGet(keys: string[], callback?: (error?: Error, stores?: [string, string][]) => void): Promise<[string, string][]> | void;
        multiSet(keyValuePairs: [string, string][], callback?: (error?: Error) => void): Promise<void> | void;
        multiRemove(keys: string[], callback?: (error?: Error) => void): Promise<void> | void;
        clear(callback?: (error?: Error) => void): Promise<void> | void;
    }
}
