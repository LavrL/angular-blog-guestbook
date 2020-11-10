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
    id?: number
    name: string
}
export enum starRatingColor {
    accent = "accent",
    primary = "primary",
    warn = "warn"
}