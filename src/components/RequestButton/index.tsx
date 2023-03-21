import React from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as S from './styles';

interface IRequestButton {
  distance: number;
}

const RequestButton = (props: IRequestButton) => {
  const {distance} = props;
  return (
    <S.ContainerButton>
      <S.RequestButton>
        <S.RequestLabel>{'Request this'}</S.RequestLabel>
        <S.RequestLocation>
          <Icon name="map-marker" size={13} color="#ff94e2" />
          {` ${distance}mi away`}
        </S.RequestLocation>
      </S.RequestButton>
    </S.ContainerButton>
  );
};

export default RequestButton;
