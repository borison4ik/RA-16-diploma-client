export interface ICategory {
  id: number;
  title: string;
}

export interface ICategoryItem {
  id: number;
  category: number;
  title: string;
  price: number;
  images: string[];
  classNames?: string;
}

export interface ISize {
  size: string;
  avalible: boolean;
}

export interface IProduct {
  id: number;
  category: number;
  title: string;
  images: string[];
  sku: number;
  manufacturer: string;
  color: string;
  material: string;
  reason: string;
  season: string;
  heelSize: string;
  price: number;
  oldPrice: number;
  sizes: ISize[];
}
