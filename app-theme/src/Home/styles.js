import styled from 'styled-components/native';


export const Container = styled.View`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
background-color: ${ (i) => i.theme.background };
`;
export const Name = styled.Text`
color: ${ (i) => i.theme.titulo };
font-size: 25px;
font-weight: bold;
margin: 10px;
`;
export const Description = styled.Text`
color: ${ (i) => i.theme.color };
`;
export const Flag =styled.Image`
width: 40px;
height: 40px;
margin: 0 10px;
`;
export const Btnarea = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-top: 30px;
`;


