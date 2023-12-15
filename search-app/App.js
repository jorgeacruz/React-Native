import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground, TextInput, Image } from 'react-native';

export default function App() {
  return (
    <View className="bg-primary flex-1 items-center pt-20">
      <ImageBackground source={{uri:'https://i.pinimg.com/564x/2d/f1/60/2df160ce5ef84f3f125fa6d4ee540a32.jpg'}}
        className="w-[530px] h-screen absolute opacity-30" />
      <View>
        <TextInput
        placeholder='Searching for the bests players of Buck'
        placeholderTextColor={'#fff'}
        className="w-[320px] h-[40px] border border-white rounded-md text-white text-center mt-10" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
