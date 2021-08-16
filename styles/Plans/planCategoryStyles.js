import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  planLayout: {
    marginTop: 30,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginBottom: 6,
  },
  active: {
    borderBottomWidth: 2,
    borderColor: 'coral',
  },
  selected: {
    color: 'black',
  },
  unselected: {
    color: '#ccc',
  },
  horizontaLine: {
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
    marginTop: -6,
  },
});

export default styles;
