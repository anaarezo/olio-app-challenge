import styled from 'styled-components/native';

export const Card = styled.View`
  border-radius: 10px;
  background-color: #ffffff;
  flex-direction: row;
  margin: 8px 16px;
  transition: 0.3s;
  height: 92px;
`;

export const ProductPhoto = styled.Image`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 96px;
`;

export const Details = styled.View`
  padding: 15px 20px 17px 20px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #333333;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  margin-top: 3px;
`;

export const UserAvatar = styled.Image`
  border-radius: 100px;
  width: 20px;
  height: 20px;
`;

export const UserName = styled.Text`
  margin-left: 3px;
  font-size: 13px;
  font-weight: bold;
  color: #666666;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
`;

export const RatingInfo = styled.View`
  margin-left: 8px;
`;

export const Rating = styled.Text`
  margin-left: 3px;
  font-size: 12px;
  font-weight: 500;
  color: #666666;
`;

export const LocationInfo = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

export const Distance = styled.Text`
  margin-left: 3px;
  font-size: 12px;
  font-weight: 500;
  color: #666666;
`;

export const ViewersInfo = styled.View`
  margin-left: 8px;
  flex-direction: row;
  margin-top: 5px;
`;

export const Viewed = styled.Text`
  margin-left: 3px;
  font-size: 12px;
  font-weight: 500;
  color: #666666;
`;

export const DateInfo = styled.View`
  margin-left: 8px;
  margin-top: 5px;
`;

export const AddedDate = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #05a59d;
`;
