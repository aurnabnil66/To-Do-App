import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    textAlign: 'center',
    position: 'absolute',
    bottom: verticalScale(30)
  },
  appTypeText: {
    color: '#6C63FF',
    fontSize: moderateScale(18),
    fontWeight: '600',
    textAlign: 'center'
  },
  appDeveloperNameText: {
    fontSize: moderateScale(14),
    fontWeight: '500',
    textAlign: 'center'
  },
});

export default styles;