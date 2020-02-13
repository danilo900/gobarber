import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ProvidersList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin-top: 60px;
  padding: 0 20px;
`;

export const Provider = styled(RectButton)`
  align-items: center;
  background: #fff;
  border-radius: 4px;
  flex: 1;

  margin: 0 10px 20px;
  padding: 20px;
`;

export const Avatar = styled.Image`
  border-radius: 25px;
  height: 50px;
  width: 50px;
`;

export const Name = styled.Text`
  color: #333;
  font-size: 14px;
  font-weight: bold;
  margin-top: 15px;
  text-align: center;
`;
