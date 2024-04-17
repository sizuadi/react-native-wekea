import {Dimensions, Image, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../shared/constants/types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {IconButton} from 'react-native-paper';
import Carousel from 'react-native-reanimated-carousel';

type Props = NativeStackScreenProps<RootStackParamList>;
export default function HomeScreen({navigation}: Props) {
  const width = Dimensions.get('window').width;
  const CarouselDatas = [
    {
      id: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1713098094227-9fdedb93276f?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      imageUrl:
        'https://images.unsplash.com/photo-1712926353838-8994d12fe62f?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];
  return (
    <>
      <View style={styles.container}>
        <View style={styles.borderShadow}>
          <Ionicons name="search" size={18} color={'black'} />
          <TextInput
            placeholderTextColor={'grey'}
            style={styles.inputSearchBar}
            placeholder="mau cari barang apa?"
          />
        </View>
        <IconButton icon="menu" />
      </View>
      <View style={styles.carouselContainer}>
        <Carousel
          loop
          width={width - 30}
          height={width / 2}
          autoPlay={true}
          style={styles.carousel}
          data={CarouselDatas}
          scrollAnimationDuration={1000}
          renderItem={({item}) => (
            <Image style={styles.carouselImage} source={{uri: item.imageUrl}} />
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {},
  borderShadow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    paddingHorizontal: 20,
    gap: 5,
    borderRadius: 50,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 16.0,
    elevation: 5,
    borderTopWidth: 0,
    borderLeftWidth: 0.2,
    backgroundColor: '#f5f5f5',
  },
  inputSearchBar: {color: 'black', flex: 1},
  carousel: {borderRadius: 10},
  carouselContainer: {flex: 1, alignItems: 'center'},
  carouselImage: {
    width: '100%',
    height: '100%',
  },
});
