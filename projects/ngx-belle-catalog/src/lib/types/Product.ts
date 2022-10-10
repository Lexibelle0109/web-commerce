type Product = {
    name: string,
    description: string,
    fullStock: number,
    listedStock?: number,
    price: number,
    mainImage: Image,
    images: Image[],
    page: string
    tags: string[]
    reviews: Review[]
}