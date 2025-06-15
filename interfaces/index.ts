export interface PropertyProps {
    name: string;
    address: {
        state: string;
        city: string;
        country: string;
    };
    rating: number;
    category: string[];
    price: number;
    offers: {
        bed: string;    
        shower: string;
        occupants: string;
    };
    image: string;
    discount: string;
    reviews: {
        name: string;
        avatar: string;
        rating: number;
        comment: string;
    }[];
    description: string;
}
