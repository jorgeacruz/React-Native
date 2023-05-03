import { TextInput, TouchableOpacity, View, Text, Image } from 'react-native';
import Animated, { BounceIn, BounceInDown, BounceOut, BounceOutDown, SlideInDown, SlideInLeft, SlideInRight, SlideOutDown, SlideOutLeft, ZoomIn, ZoomOut } from 'react-native-reanimated';
import { styles } from './styles';

export function Message() {

    return(
        <Animated.View 
            style={styles.container}
            entering={ZoomIn}
            exiting={ZoomOut}
            >
                <Image 
                    source={{uri:'https://m.media-amazon.com/images/M/MV5BYzk5NGRkZDgtYTc0Yy00NzI0LTljZjItOTM4NzY3ZWJiNzI5XkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg'}}
                    style={styles.logo} />
                <View>
                    <Text style={styles.titleCad}>Cadastro Prime GoldState</Text>
                    <Text style={styles.titleCad2}>Aqui todos os seus benefícios valem Ouro</Text>
                </View>
                <View style={styles.Vform}>
                    <TextInput 
                    style={styles.inputForm} 
                    placeholder='Digite seu nome' 
                    placeholderTextColor={'#fff'}

                    />
                    <TextInput 
                    style={styles.inputForm} 
                    placeholder='Digite seu e-mail' 
                    placeholderTextColor={'#fff'}

                    />
                    <TextInput 
                    style={styles.inputForm} 
                    placeholder='Telefone de Contato' 
                    placeholderTextColor={'#fff'}

                    />
                    <TouchableOpacity style={styles.cta2}>
                        <Text>Fazer Cadastro</Text>
                    </TouchableOpacity>
                </View>
        </Animated.View>
    )
}