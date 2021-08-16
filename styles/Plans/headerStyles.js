import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },

  header: {
    fontSize: 18,
    color: '#f28927',
    fontWeight: 'bold',
  },

  subHeader: {
    fontSize: 12,
    color: '#424242',
  },

  btnWrapper: {
    backgroundColor: '#211c1c',
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 22,
    width: 22,
  },

  closeBtn: {
    color: 'white',
    fontSize: 10,
  },
});

export default styles;
