import React, {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as S from './styles';

const data = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  // {
  //   id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  //   title: 'Second Item',
  // },
  // {
  //   id: '58694a0f-3da1-471f-bd96-145571e29d72',
  //   title: 'Third Item',
  // },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <S.Card>
    <S.ProductPhoto></S.ProductPhoto>
    <S.Title>Title</S.Title>
    <S.UserAvatar></S.UserAvatar>
    <S.UserName>Name</S.UserName>
    <S.Rating>5.1</S.Rating>
    <S.Distance>10mi</S.Distance>
    <S.Viewed>12</S.Viewed>
  </S.Card>
);

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <S.Container>
        <FlatList
          data={data}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
      </S.Container>
    </SafeAreaView>
  );
};

export default HomeScreen;
