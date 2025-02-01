export interface User {
    signedIn?: boolean
    token?: string | null
    user?: {
        phone?: string
        avatar_url?: string
    } | null
}

export interface FilterOptions {
    condition: string;
    rating: string;
    minPrice: number;
    maxPrice: number;
}


// Define TypeScript interfaces for the product data structure
export interface ProductPrice {
    amount: number;
    currency: string;
}

export interface ProductMedia {
    images: string[];
    videos?: string[];
}

export interface ProductSeller {
    name: string;
    rating: number;
    verified: boolean;
    avatar: string;
}

export interface Product {
    id: string;
    title: string;
    description: string;
    price: ProductPrice;
    condition: string;
    media: ProductMedia;
    seller: ProductSeller;
}