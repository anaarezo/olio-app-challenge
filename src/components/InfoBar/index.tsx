import React, {Alert, Share} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as S from './styles';

interface IInfoBarProps {
  title: string;
  likes: number;
}

const InfoBar = (props: IInfoBarProps) => {
  const onShare = async () => {
    try {
      await Share.share({
        message: `${props.title} is available at Olio for free!!!`,
      });
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <S.InfoBar>
      <S.Brand>{'From Olio'}</S.Brand>
      <S.BarContent>
        <S.ShareBox onPress={onShare}>
          <Icon name="share-square-o" size={18} color="#444444" />
          <S.Share>{'Share'}</S.Share>
        </S.ShareBox>
        <S.LikeBox>
          <Icon name="heart-o" size={18} color="#444444" />
          <S.Likes>{`${props.likes} likes`}</S.Likes>
        </S.LikeBox>
      </S.BarContent>
    </S.InfoBar>
  );
};

export default InfoBar;
