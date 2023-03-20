import React, {FlatList, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {IProduct} from '../../store/articles/interface';

import useProductsList from './hooks/useProductsList';

import * as S from './styles';

interface IProductCard {
  item: IProduct;
}

const HomeScreen = ({navigation}: any) => {
  const {products} = useProductsList();
  // const [selectedId, setSelectedId] = useState(null);

  const renderProductCard = ({item}: IProductCard) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductDetails', {product: item});
        }}>
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
            <S.ProductPhoto source={{uri: item?.images[0].files.medium}} />
            <S.Details>
              <S.Title numberOfLines={1} ellipsizeMode="tail">
                {item.title}
              </S.Title>
              <S.UserInfo>
                <S.UserAvatar source={{uri: item?.user.current_avatar.small}} />
                <S.UserName>{item.user.first_name}</S.UserName>
                <S.RatingInfo>
                  <S.Rating>
                    {!item.user.rating.rating ? (
                      '🐣'
                    ) : (
                      <>
                        <Icon name="star" size={13} color="#ffb300" />
                        {(item.user.rating.rating / 2).toFixed(1)}
                      </>
                    )}
                  </S.Rating>
                </S.RatingInfo>
              </S.UserInfo>
              <S.ProductInfo>
                <S.LocationInfo>
                  <Icon name="map-marker" size={15} color="#666666" />
                  <S.Distance>{`${item.location.distance}mi`}</S.Distance>
                </S.LocationInfo>
                <S.ViewersInfo>
                  <Icon name="eye" size={15} color="#666666" />
                  <S.Viewed>{item.reactions.views}</S.Viewed>
                </S.ViewersInfo>
                <S.DateInfo>
                  <S.AddedDate>{item.created_at}</S.AddedDate>
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
      // extraData={selectedId}
    />
  );
};

export default HomeScreen;
