declare module '*.png' {
    const value: ImageSourcePropType | undefined;
    export default value;
}

declare module '@env' {
    export const API_URL: string;
}