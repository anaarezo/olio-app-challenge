import styled from 'styled-components/native';

export const InfoBar = styled.View`
  padding: 10px 16px 0;
  flex-direction: row;
  justify-content: space-between;
  background: #f9f9f9;
  height: 36px;
`;

export const BarContent = styled.View`
  flex-direction: row;
`;

export const Brand = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #444444;
`;

export const ShareBox = styled.TouchableOpacity`
  flex-direction: row;
`;

export const Share = styled.Text`
  margin-left: 3px;
  font-size: 13px;
  font-weight: 600;
  color: #444444;
`;

export const LikeBox = styled.TouchableOpacity`
  flex-direction: row;
  margin-left: 10px;
`;

export const Likes = styled.Text`
  margin-left: 3px;
  font-size: 13px;
  font-weight: 600;
  color: #444444;
`;
