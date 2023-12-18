import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Second from './second';

export default function Home() {
  const navigation = useNavigation();

 return (
   <View className="bg-gray-500 flex-1 pt-20 items-center">
        <Text className='text-white'>Home page</Text>
        <TouchableOpacity onPress={() => navigation.navigate(Second)}
          className="p-2 m-2 bg-white">
          <Text>Scroll Image w/ Flatlist</Text>
        </TouchableOpacity>
   </View>
  );
}