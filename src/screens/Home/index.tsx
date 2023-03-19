import {useState} from 'react';
import React, {FlatList, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

import useProductsList from './hooks/useProductsList';

import * as S from './styles';

interface IProductCard {
  title: string;
  onPress: any;
  item: {
    id: string;
    title: string;
    username: string;
    rate: string;
    distance: string;
    viewers: number;
    dateAdded: string;
    productPicture: string;
    userPicture: string;
  };
}

const HomeScreen = ({navigation}: any) => {
  const {products} = useProductsList();
  const [selectedId, setSelectedId] = useState(null);

  const renderProductCard = ({item, title, onPress}: IProductCard) => {
    console.log('item*****', item);
    return (
      <TouchableOpacity
        item={item}
        onPress={() => navigation.navigate('ProductDetails', {product: item})}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            shadowColor: '#666666',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.15,
            shadowRadius: 3.84,
            elevation: 5,
          }}>
          <S.Card>
            <S.ProductPhoto source={{uri: item?.productPicture}} />
            <S.Details>
              <S.Title>{item.title}</S.Title>
              <S.UserInfo>
                <S.UserAvatar source={{uri: item?.userPicture}} />
                <S.UserName>{item.username}</S.UserName>
                <S.RatingInfo>
                  <Icon name="star" size={13} color="#ffb300" />
                </S.RatingInfo>
                <S.Rating>{item.rate}</S.Rating>
              </S.UserInfo>
              <S.ProductInfo>
                <S.LocationInfo>
                  <Icon name="map-marker" size={15} color="#666666" />
                  <S.Distance>{item.distance}</S.Distance>
                </S.LocationInfo>
                <S.ViewersInfo>
                  <Icon name="eye" size={15} color="#666666" />
                  <S.Viewed>{item.viewers}</S.Viewed>
                </S.ViewersInfo>
                <S.DateInfo>
                  <S.AddedDate>{item.dateAdded}</S.AddedDate>
                </S.DateInfo>
              </S.ProductInfo>
            </S.Details>
          </S.Card>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      // eslint-disable-next-line react-native/no-inline-styles
      contentContainerStyle={{flexGrow: 1, paddingTop: 10}}
      data={products}
      renderItem={renderProductCard}
      keyExtractor={item => item.id}
      extraData={selectedId}
    />
  );
};

export default HomeScreen;
