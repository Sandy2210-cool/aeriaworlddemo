import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

export default function ToastMessage(
  type,
  title,
  msg = '',

  positivePress,
  negativePress,
  ToastPress,
) {
  if (msg.length < 60) {
    Toast.show({
      type: type || 'success',
      text1: title || 'Hello',
      text2: msg,
      onPress: () => ToastPress(),
    });
  } else {
    Toast.show({
      type: type || 'success',
      text1: title || 'Hello',
      text2: msg,

      positivePress,
      negativePress,
    });
  }
}

export const generateRandomNumber = () => {
  const randomNumber = Math.floor(100000 + Math.random() * 900000); // Generate random 6-digit number
  return randomNumber.toString();
};
