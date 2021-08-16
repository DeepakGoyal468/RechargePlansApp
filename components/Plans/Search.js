import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../../styles/Plans/searchStyles';
const Search = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Plan Amount, Talktime"
      />
      <Icon style={styles.icon} name="search" size={18} />
    </View>
  );
};

export default Search;
