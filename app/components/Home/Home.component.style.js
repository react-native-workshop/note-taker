import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import {textInput} from '../../styles/common.style';

export default StyleSheet.create({
  container: {
    paddingVertical: theme.CONTAINER_PADDING,
  },
  titleHeading: {
  },
  titleTextInput: {
    ...textInput
  },
  textAreaTitle: {
  },
  textArea: {
    ...textInput,
  }
});
