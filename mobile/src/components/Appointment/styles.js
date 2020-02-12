import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  align-items: center;
  background: #fff;
  border-radius: 4px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
  opacity: ${props => (props.past ? 0.6 : 1)};
  padding: 20px;
`;

export const Left = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  background: #e3e3e3;
  border-radius: 25px;
  height: 50px;
  width: 50px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  color: #333;
  font-size: 14px;
  font-weight: bold;
`;

export const Time = styled.Text`
  color: #999;
  font-size: 13px;
  margin-top: 4px;
`;
