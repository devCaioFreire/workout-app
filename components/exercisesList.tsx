import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { IExercises } from '../interfaces/models';

interface ExerciseListProps {
  data: IExercises[];
}

interface ExerciseCardProps {
  item: IExercises;
  router: any;
  index: number;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ item, router, index }) => {
  return (
    <Animated.View entering={FadeInDown.duration(400).delay(index * 200).springify()}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          router.push({ pathname: '/exerciseDetails', params: item });
        }}
        className="flex py-3 space-y-2">
        <View className="bg-white shadow rounded-[25px]">
          <Image
            source={{ uri: item.gifUrl }}
            style={{ width: wp(44), height: wp(52) }}
            className="rounded-[25px]"
          />
        </View>

        <Text style={{ fontSize: hp(1.7) }} className="text-neutral-700 font-semibold ml-1 tracking-wide">
          {item?.name?.length > 20 ? item.name.slice(0, 20) + '...' : item.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const ExerciseList: React.FC<ExerciseListProps> = ({ data }) => {
  const router = useRouter();

  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 50 }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        renderItem={({ item, index }: any) => (
          <ExerciseCard key={item.id} router={router} index={index} item={item} />
        )}
      />
    </View>
  );
};

export default ExerciseList;
