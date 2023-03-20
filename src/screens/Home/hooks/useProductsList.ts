import articlesApi from '../../../store/articles/apiSlice';

const useProductsList = () => {
  const {data: products} = articlesApi.useGetArticlesQuery();
  return {products: products};
};

export default useProductsList;
