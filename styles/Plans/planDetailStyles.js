import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  planContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
  },
  planHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  planValidity: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    width: '70%',
  },
  selectButton: {
    borderWidth: 1,
    borderRadius: 20,
    color: 'coral',
    borderColor: 'coral',
    width: '25%',
    textAlign: 'center',
  },
  horizontaLine: {
    borderBottomWidth: 1.5,
    borderColor: '#ccc',
    marginTop: 5,
  },
  price: {
    fontWeight: 'bold',
  },
  description: {
    color: '#7d7c7c',
    fontSize: 12,
  },
});

export default styles;
