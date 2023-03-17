import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #ffffff;
  padding-bottom: 50px;
`;

export const ProductPicture = styled.Image`
  padding: 15px 20px 17px 20px;
  height: 357px;
`;

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

export const Description = styled.View`
  margin: 0 16px;
  flex-direction: column;
`;

export const ProductDescription = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #131314;
  line-height: 30px;
`;

export const MoreInfo = styled.Text`
  margin: 14px 0;
  font-size: 13px;
  font-weight: 500;
  color: #bb4291;
`;

export const PickupTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #131314;
  line-height: 30px;
`;

export const PickupTimes = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #444444;
`;

export const PickupDescription = styled.Text`
  font-size: 13px;
  font-weight: 400;
  color: #757576;
  line-height: 18px;
`;

export const Disclaimer = styled.Text`
  margin: 16px 0;
  padding: 16px;
  background-color: #f4f4f4;
  font-size: 13px;
  font-weight: 500;
  color: #131314;
  line-height: 18px;
`;

export const LocationMap = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #444444;
`;

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
