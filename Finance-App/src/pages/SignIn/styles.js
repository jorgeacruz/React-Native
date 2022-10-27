import styled from "styled-components/native";

export const Background = styled.View`
flex:1;
background-color: #ffdf00;
`;
export const Container = styled.KeyboardAvoidingView`
flex:1;
align-items: center;
justify-content: center;
`;
export const Logo = styled.Image`
margin-bottom: 60px;
`;
export const AreaInput = styled.View`
flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#fff'
})`
background:#002776 ;
width: 90%;
font-size: 14px;
color: #FFF;
margin-bottom: 5px;
padding: 10px;
border-radius: 5px;
text-align:center;

`;

export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #009c3b;
    width: 90%;
    height: 45px;
    border-radius: 7px;
    margin-top: 20px;
`;

export const SubmitText = styled.Text`
    font-size: 16px;
    color: #fff;
`;

export const Link = styled.TouchableOpacity`
    margin-top: 10px;
    margin-bottom: 9px;
`;

export const LinkText = styled.Text`
    color: #000;
    font-weight:bold
`;