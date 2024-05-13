export class BasePageableModel{
    size: number;
    index: number;
    count: number;
    pages: number;
    hasPrevious: boolean;
    hasNext: boolean;
}