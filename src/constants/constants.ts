import { Dimensions } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const constants = {
  height: SCREEN_HEIGHT,
  width: SCREEN_WIDTH,
  scale: Dimensions.get('window').scale,
  fontScale: Dimensions.get('window').fontScale,
};

export default constants;
