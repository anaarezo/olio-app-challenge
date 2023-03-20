import {IProduct} from '../../store/articles/interface';

export interface IMaxMinCoordinates {
  maxLatitude: number;
  maxLongitude: number;
  minLatitude: number;
  minLongitude: number;
}

export interface ILocation {
  location: {
    latitude: number;
    longitude: number;
  };
}

export interface IProductCard {
  item: IProduct;
}
