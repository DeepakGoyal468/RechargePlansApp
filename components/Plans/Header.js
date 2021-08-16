import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles/Plans/headerStyles';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.header}>Browse Plans</Text>
        <Text style={styles.subHeader}>for Airtel Kolkata</Text>
      </View>
      <View style={styles.btnWrapper}>
        <Text style={styles.closeBtn}>X</Text>
      </View>
    </View>
  );
};

export default Header;
