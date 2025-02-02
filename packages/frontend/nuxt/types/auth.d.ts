// Definition of the Auth interface
export interface Auth {
    login: (email: string, password: string) => Promise<any>;
    signUp: (email: string, password: string) => Promise<any>;
    logout: () => Promise<void>;
    getUser: () => Promise<any>;
    resetPassword: (email: string) => Promise<void>;
}
