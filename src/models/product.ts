export interface Product{
    id: number;
    name: string;
    image: string;
    price: number;
    quantity?: number;
    created_at?: Date;
    updated_at?: Date;
}