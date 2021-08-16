import React, {useRef, useState, useEffect, useCallback} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import PlanDetail from './PlanDetail';
import styles from '../../styles/Plans/planCategoryStyles';

const PlanCategory = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const flatListRef = useRef(null);

  const scrollToIndex = () => {
    flatListRef.current.scrollToIndex({
      animated: true,
      index: selectedCategoryId - 1,
    });
  };

  useEffect(
    useCallback(() => {
      scrollToIndex();
    }, [selectedCategoryId]),
  );

  const Categories = [
    {
      id: 1,
      title: 'Best Offers for You',
    },
    {
      id: 2,
      title: 'Popular',
    },
    {
      id: 3,
      title: 'Special Recharge',
    },
    {
      id: 4,
      title: 'Unlimited',
    },
    {
      id: 5,
      title: 'International Roaming',
    },
  ];

  const PlanLayout = ({values}) => (
    <View>
      <View style={styles.planLayout}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          ref={flatListRef}
          data={values}
          initialScrollIndex={0}
          getItemLayout={(item, index) => ({
            length: 100,
            offset: 100 * index,
            index,
          })}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                setSelectedCategoryId(item.id);
              }}
              style={[
                styles.button,
                item.id === selectedCategoryId && styles.active,
              ]}>
              <Text
                style={
                  item.id === selectedCategoryId
                    ? styles.selected
                    : styles.unselected
                }>
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
        <View style={styles.horizontaLine} />
      </View>
      <PlanDetail value={selectedCategoryId} />
    </View>
  );

  return <PlanLayout values={Categories}></PlanLayout>;
};

export default PlanCategory;
