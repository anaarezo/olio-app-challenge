import styled from 'styled-components/native';

export const Content = styled.View`
  margin: 16px;
  flex-direction: row;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const UserAvatar = styled.Image`
  border-radius: 100px;
  width: 34px;
  height: 34px;
`;

export const RatingInfo = styled.View`
  flex-direction: row;
  position: absolute;
  top: 29px;
  border-radius: 3px;
  background: #f1c02a;
  height: 15px;
  width: 34px;
  padding: 2px;
`;

export const Rating = styled.Text`
  margin: -1px 3px 0;
  font-size: 11px;
  font-weight: 600;
  color: #ffffff;
`;

export const ProductInfo = styled.View`
  margin-left: 16px;
  flex-direction: column;
`;

export const UserName = styled.Text`
  font-size: 13px;
  font-weight: 500;
  color: #444444;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: 500;
  color: #131314;
  line-height: 30px;
  max-width: 300px;
`;

export const AddedDate = styled.View`
  flex-direction: row;
`;

export const Time = styled.Text`
  margin-left: 3px;
  font-size: 11px;
  font-weight: 400;
  color: #444444;
`;

export const Role = styled.Text`
  font-size: 11px;
  font-weight: 500;
  color: #bb4291;
`;
