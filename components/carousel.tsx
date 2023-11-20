import { View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { sliderImages } from '../constants';
import React from 'react';

export default function CarouselSlider() {
  return (
    <Carousel
      data={sliderImages}
      loop
      autoplay
      renderItem={ItemCard}
      hasParallaxImages
      sliderWidth={wp(100)}
      firstItem={1}
      autoplayInterval={4000}
      itemWidth={wp(100) - 70}
      slideStyle={{ display: 'flex', alignItems: 'center' }}
    />
  );
}

const ItemCard = ({ item, index }: any, parallaxProps: any) => {
  return (
    <View style={{ width: wp(100) - 70, height: hp(25) }}>
      <ParallaxImage
        source={item}
        containerStyle={{ borderRadius: 30, flex: 1 }}
        style={{ resizeMode: 'contain' }}
        parallaxFactor={1}
        {...parallaxProps} />
    </View>
  )
}