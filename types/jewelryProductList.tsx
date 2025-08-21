export interface JewelryData {
    data: JewelryListing[];
    page: JewelryPages;
}

export interface JewelryPages {
    size?: number;
    totalElements?: number;
    totalPages?: number;
    pageNumber?: number;
}

export interface JewelryListing {
    productId:number;
    sku:string;
    description:string;
    name:string;
    salesTaxCode: string;
    taxStatus:string;
    productNameWithHypen:string;
    msrp:number;
    dgWareHouseStock:number;
    allocatedAgainstDGWarehouse: number;
    imagePath:string;
    mobileThumbnailUrl:string;
    category:string;
    subCategory:string;
    metalType:string;
    discountType:string;
    discount:number;
    salesEventId:number
}

export interface JewelryInformation {
    urlLink?: string;
    image?: string;
    title?: string;
    details?:string;
    imageFirst?: boolean;
    width?: number;
    height?:number;
    boldDetails?:string;
    mainDetails?:string;
}