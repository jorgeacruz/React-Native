import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import './src/utils/i18n'; 
import { useTranslation } from 'react-i18next';


export default function App() {

  const {t, i18n} = useTranslation();
  const changeLanguage = value => {
    i18n.changeLanguage(value)
    .then(() => {
      console.log('Alterada')
    })
    .catch((error) => {
      console.log(err)
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.blkFlag}>
        <TouchableOpacity onPress={() => changeLanguage('pt')}>
          <Image source={require('./src/img/brazil.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeLanguage('en')}>
          <Image source={require('./src/img/usa.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeLanguage('sp')}>
          <Image source={require('./src/img/spain.png')} />
        </TouchableOpacity>
      </View>
      <Swiper autoplay={true} autoplayTimeout={4.5}>

        <View>
          <Image source={require('./src/img/yoda.png')} style={styles.imgSld}/>
            <View style={styles.blkText}>
              <Text style={styles.Text1}>
                {t('May the Force be with you.')}
                </Text>   
            </View>
        </View>
        <View>
          <Image source={require('./src/img/vader.png')} style={styles.imgSld}/>
            <View style={styles.blkText}>
              <Text style={styles.Text1}>
                {t('I am your father.')}
                </Text>   
            </View>
        </View>
        <View>
          <Image source={require('./src/img/obiwan.png')} style={styles.imgSld}/>
            <View style={styles.blkText}>
              <Text style={styles.Text1}>
                {t('Your eyes can deceive you, dont trust them')}
                </Text>   
            </View>
        </View>
        
      </Swiper>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  imgSld: {
    opacity:0.6,
  },
  blkText: {
    zIndex:30,
    flexDirection: "row", 
    alignItems: "flex-start",
    position:'absolute',
    bottom:100,
   // top:560,
    height:300,
    paddingHorizontal:20,
  

  },
  blkFlag: {
    alignItems:'center',
    justifyContent:'space-between',
    zIndex:20,
    flexDirection:'column', 
    position:'absolute',
    top:100,
    left:20,
    height:130,
   
  },
  Text1: {
    color:'#fff',
    fontSize:60,
    lineHeight:60
  }
});
