import articlesApi from '../../../store/articles/apiSlice';
import {IProduct} from '../../../store/articles/interface';

const closeDistance = 0.0001;

const distanceBetween = (p1: IProduct, p2: IProduct) => {
  const l1 = p1.location;
  const l2 = p2.location;
  return Math.sqrt(
    Math.pow(l2.latitude - l1.latitude, 2) +
      Math.pow(l2.longitude - l1.longitude, 2),
  );
};

const useProductsMap = () => {
  const {data: products} = articlesApi.useGetArticlesQuery();
  const initialValue: {[key: string]: IProduct[]} = {};
  const productsMap = products?.reduce((productsMap, product) => {
    const closeProductNotFound = Object.entries(productsMap).every(
      ([representativeProductId, productsArray]) => {
        const representativeProduct = productsArray[0];
        if (distanceBetween(representativeProduct, product) < closeDistance) {
          productsMap[representativeProductId] = [
            ...productsMap[representativeProductId],
            product,
          ];
          return false;
        }
        return true;
      },
    );

    if (closeProductNotFound) {
      productsMap[product.id] = [product];
    }
    return productsMap;
  }, initialValue);

  return {
    products: products,
    productsMap: productsMap,
  };
};

export default useProductsMap;
