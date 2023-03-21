import styled from 'styled-components/native';

export const ContainerButton = styled.View`
  margin: 0 16px;
`;

export const RequestButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 12px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #bb4291;
  height: 52px;
  width: 100%;
`;

export const RequestLabel = styled.Text`
  margin: 16px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
`;

export const RequestLocation = styled.Text`
  margin: 18px 16px;
  font-size: 12px;
  font-weight: 600;
  color: #ff94e2;
  text-align: right;
`;
