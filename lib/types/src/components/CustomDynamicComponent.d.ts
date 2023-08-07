export declare class CustomDynamicComponent {
    [x: string]: JSX.Element | ((type: string) => JSX.Element);
    static language: "ele" | "ant";
    static eleLanguage: string;
    static antLanguage: string;
    static dicts: {
        [x in 'ele' | 'ant']: () => {
            [x in string]: JSX.Element;
        };
    };
    constructor();
    getComponent(type: string): JSX.Element;
}
