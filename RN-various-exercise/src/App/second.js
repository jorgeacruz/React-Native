import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, Image, Animated, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Home from './index';

const {width, height} = Dimensions.get('screen');

const Tab = ({ item }) => {
    return<View className="">
        <Text className="text-black font-bold uppercase">{item.title}</Text>
    </View>
}
const Tabs = ({ data, scrollX}) => {
    return<View className="absolute top-[110px]">
        <View className='flex flex-row justify-evenly w-full'>
            {data.map(item => {
                return<Tab key={item.key} item={item}/>
            })}
        </View>
    </View>
}

const images = {
  man:
    'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  women:
    'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  kids:
    'https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  skullcandy:
    'https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  help:
    'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
};

const data = Object.keys(images).map((i) => ({
  key: i,
  title: i,
  image: images[i],
}));

export default function Second() {

    const navigation = useNavigation();
    // Animation 
    const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      
      <Animated.FlatList
      data={data}
      keyExtractor={ item => item.key}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      bounces={false}
      onScroll={Animated.event(
        [{nativeEvent: {
            contentOffset: { x: scrollX }
        }}],
        { useNativeDriver:false}
      )}
      renderItem={({ item }) => {
        return <View style={{width, height}}>
            <Image source={{uri: item.image}} style={{flex:1, resizeMode:'cover' }}/>
        </View>    
      }}
      />
      <Tabs scrollX={scrollX} data={data}/>

      <TouchableOpacity onPress={() => navigation.navigate(Home)} className="absolute bottom-12 bg-black p-3 w-[300px] flex justify-center items-center rounded-lg">
        <Text className="text-white"> Back </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});