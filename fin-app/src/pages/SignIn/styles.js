import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #000;
`;

export const Container = styled.KeyboardAvoidingView`
flex: 1;
align-items: center;
justify-content: center;
`;

export const Logo = styled.Image`
margin-bottom: 50px;
align-items: baseline;
`;

export const AreaInput = styled.View`
flex-direction:row;
`;

export const Input = styled.TextInput`
margin-bottom: 15px;
background: #fff;
width: 90%;
font-size: 17px;
padding: 10px;
border-radius: 4px;
color: #121212;
text-align:center;
`;

export const SubmitButtom = styled.TouchableOpacity`
margin-bottom: 15px;
justify-content: center;
align-items: center;
background: #06A547;
width: 90%;
font-size: 17px;
padding: 10px;
border-radius: 4px;

`;
export const SubmitText = styled.Text`
color: #000;
`;
export const Link = styled.TouchableOpacity`
margin-top: 10px;
margin-bottom: 10px;
`;
export const LinkText = styled.Text`
color: #fff;
`;
