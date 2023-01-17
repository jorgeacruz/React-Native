import { Container, Name, Description, Flag, Btnarea } from './styles'
import { TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import '../utils/i18n'

export default function Home() {

    const {t, i18n} = useTranslation();
    const changeLanguage = (value) => {
        i18n.changeLanguage(value)
    }

   
    return (
        <Container>
            <Name>{t('Programando Comigo')}</Name>
            <Description>{t('Aprendendo React Native')}</Description>
            <Btnarea>
                <TouchableOpacity onPress={(value) => changeLanguage('bra')}>
                    <Flag source={require('../img/brazil.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={(value) => changeLanguage('usa')}>
                    <Flag source={require('../img/usa.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={(value) => changeLanguage('spa')}>
                    <Flag source={require('../img/spa.png')} />
                </TouchableOpacity>
            </Btnarea>
           
        </Container>
    );
}