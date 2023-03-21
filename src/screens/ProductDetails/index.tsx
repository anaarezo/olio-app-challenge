import React, {SafeAreaView, ScrollView} from 'react-native';

import {
  Disclaimer,
  InfoBar,
  ProductContent,
  ProductDescription,
  ProductMap,
  RequestButton,
} from '../../components';
import {IProduct} from '../../store/articles/interface';
import * as S from './styles';

interface IProductDetails {
  route: {
    params: {
      product: IProduct;
    };
  };
}

const ProductDetailsScreen = ({route}: IProductDetails) => {
  const product = route.params.product;

  return (
    <SafeAreaView>
      <ScrollView>
        <S.Container>
          <S.ProductPicture source={{uri: product?.images[0].files.medium}} />
          <InfoBar title={product.title} likes={product.reactions.likes} />
          <ProductContent
            current_avatar={product?.user.current_avatar.small}
            rating={product.user.rating.rating}
            first_name={product.user.first_name}
            title={product.title}
            created_at={product.created_at}
            roles={product.user.roles}
          />

          <ProductDescription
            description={product.description}
            section={product.section}
            collection_notes={product.collection_notes}
          />

          <Disclaimer />

          <ProductMap
            distance={product.location.distance}
            latitude={product.location.latitude}
            longitude={product.location.longitude}
          />
        </S.Container>
      </ScrollView>

      <RequestButton distance={product.location.distance} />
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;
