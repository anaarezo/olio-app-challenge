import {useState} from 'react';
import React, {FlatList, TouchableOpacity} from 'react-native';

import {ProductCard} from '../../components';
import useProductsList from './hooks/useProductsList';
import * as S from './styles';

import {IProduct} from '../../store/articles/interface';

interface IProductCard {
  item: IProduct;
}

interface IHomeScreen {
  navigation: any;
}

const HomeScreen = ({navigation}: IHomeScreen) => {
  const {products} = useProductsList();

  const [sectionFilter, setSectionFilter] = useState<string>('');

  const renderProductCard = ({item}: IProductCard) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductDetails', {product: item});
        }}>
        <ProductCard
          product_photo={item?.images[0].files.medium}
          title={item.title}
          first_name={item.user.first_name}
          current_avatar={item?.user.current_avatar.small}
          rating={item.user.rating.rating}
          distance={item.location.distance}
          views={item.reactions.views}
          created_at={item.created_at}
        />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <S.TopBar>
        <TouchableOpacity onPress={() => setSectionFilter('food')}>
          <S.FilterLabel>Food</S.FilterLabel>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSectionFilter('product')}>
          <S.FilterLabel>Non-Food</S.FilterLabel>
        </TouchableOpacity>
      </S.TopBar>
      <FlatList
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{flexGrow: 1, paddingTop: 10}}
        data={products?.filter(product =>
          product.section.includes(sectionFilter),
        )}
        renderItem={renderProductCard}
        keyExtractor={item => item.id}
        // extraData={selectedId}
      />
    </>
  );
};

export default HomeScreen;
