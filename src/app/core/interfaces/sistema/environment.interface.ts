export interface IEnvironment {
    production: boolean;
    uri: {
        oauth: string;
        api: string;
        projeto: string;
        subDomain: string;
    };
}
