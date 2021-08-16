import React from 'react';
import {View} from 'react-native';
import styles from '../../styles/Plans/indexStyles';
import Header from './Header';
import PlanCategory from './PlanCategory';
import Search from './Search';

const Plans = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Search />
      <PlanCategory />
      {/* <PlanDetail /> */}
    </View>
  );
};

export default Plans;
