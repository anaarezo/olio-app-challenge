import React, {SafeAreaView, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as S from './styles';

interface IProductDetails {
  route: {
    params: {
      product: {
        id: string;
        dateAdded: string;
        distance: string;
        productPicture: string;
        rate: string;
        title: string;
        userPicture: string;
        username: string;
        viewers: number;
      };
    };
  };
}

const ProductDetailsScreen = ({route}: IProductDetails) => {
  const data = route.params.product;
  console.log('Test', data?.dateAdded);

  // navigation.setOptions({title: 'Updated!'});

  // Test {"params": {"dateAdded": "Just added", "distance": "10", "id": "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba6", "productPicture": "https://cdn.olioex.com/uploads/photo/file/00gRGrBRDFYrR2j-9SJVYg/small_image.jpg", "rate": "5.1", "title": "First Item 2", "userPicture": "https://cdn.olioex.com/uploads/avatar/file/oZq8DF3dzLEi3Fnf4XxMrg/small_image.jpg", "username": "John", "viewers": 12}}

  return (
    <SafeAreaView>
      <ScrollView>
        <S.Container>
          <S.ProductPicture
            source={{
              uri: 'https://cdn.olioex.com/uploads/photo/file/00gRGrBRDFYrR2j-9SJVYg/large_image.jpg',
            }}
          />

          <S.InfoBar>
            <S.Brand>{'From Amazon Fresh'}</S.Brand>
            <S.BarContent>
              <S.ShareBox>
                <Icon name="share-square-o" size={18} color="#444444" />
                <S.Share>{'Share'}</S.Share>
              </S.ShareBox>
              <S.LikeBox>
                <Icon name="heart-o" size={18} color="#444444" />
                <S.Likes>{'0 likes'}</S.Likes>
              </S.LikeBox>
            </S.BarContent>
          </S.InfoBar>

          <S.Content>
            <S.UserInfo>
              <S.UserAvatar
                source={{
                  uri: 'https://cdn.olioex.com/uploads/avatar/file/oZq8DF3dzLEi3Fnf4XxMrg/small_image.jpg',
                }}
              />
              <S.RatingInfo>
                <Icon name="star" size={10} color="#ffffff" />
                <S.Rating>{'5.0'}</S.Rating>
              </S.RatingInfo>
            </S.UserInfo>

            <S.ProductInfo>
              <S.UserName>{'John is giving away'}</S.UserName>
              <S.Title>{'White bread'}</S.Title>
              <S.AddedDate>
                <Icon name="clock-o" size={14} color="#444444" />
                <S.Time>{'Added in 20 hours'}</S.Time>
                <S.Role>{' Volunteer'}</S.Role>
              </S.AddedDate>
            </S.ProductInfo>
          </S.Content>

          <S.Description>
            <S.ProductDescription>{'Lorem ipsum dolor'}</S.ProductDescription>
            <S.MoreInfo>{'View food allergen information'}</S.MoreInfo>
            <S.PickupTitle>{'Pick-up times'}</S.PickupTitle>
            <S.PickupDescription>
              {
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pharetra dui. Sed suscipit, tellus a elementum egestas, orci erat ullamcorper urna, vitae consequat mauris ligula quis quam.'
              }
            </S.PickupDescription>
          </S.Description>

          <S.Disclaimer>
            {
              'Everything in this section is givem away for free 💚. Strictly no selling, no swaps, no donations'
            }
          </S.Disclaimer>

          <S.LocationMap>{''}</S.LocationMap>
        </S.Container>
      </ScrollView>

      <S.ContainerButton>
        <S.RequestButton>
          <S.RequestLabel>{'Request this'}</S.RequestLabel>
          <S.RequestLocation>
            <Icon name="map-marker" size={13} color="#ff94e2" />
            {' 0.6mi away'}
          </S.RequestLocation>
        </S.RequestButton>
      </S.ContainerButton>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;
