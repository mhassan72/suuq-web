export interface User {
    signedIn?: boolean
    token?: string | null
    user?: { 
        phone?: string 
        avatar_url?: string
    }  | null
}

export interface FilterOptions {
    condition: string;
    rating: string;
    minPrice: number;
    maxPrice: number;
  }