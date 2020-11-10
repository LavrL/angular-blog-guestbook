export interface BlogPost {
    id?: string,
    title: string,
    author: string,
    body: string
}
export interface BlogComment {
    id?: string,
    title: string,
    body: string
}
export interface Searchfield {
    // [index: number]: string;
    name: string,
    id?: number
}
export enum starRatingColor {
    primary = "primary",
    accent = "accent",
    warn = "warn"
}