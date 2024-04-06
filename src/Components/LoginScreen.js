import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import {Colors} from '../CommonUtils/Colors';
import {string} from '../CommonUtils/Constant';
import ToastMessage, {generateRandomNumber} from '../Helper/Helper';
import Button from './Button';
import CommonLogo from './CommonLogo';
import InputText from './Input';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('IN');
  const [callingCode, setCallingCode] = useState('91');
  const [country, setCountry] = useState(null);
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true);
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(false);
  const [withCallingCode, setWithCallingCode] = useState(true);

  const handleLogin = () => {
    if (
      !phoneNumber.trim() ||
      !/^\d+$/.test(phoneNumber.trim()) ||
      phoneNumber.length !== 10
    ) {
      ToastMessage('error', string.invalid_number, '', '', '', '', () => {});

      return;
    } else {
      const randomOTP = generateRandomNumber();
      let data = {
        number: phoneNumber,
        countryCode: countryCode,
      };
      ToastMessage(
        'success',
        'OTP sent successfully',
        `Your OTP is ${randomOTP}`,
        '',
        '',
        '',
        () => {},
      );
      navigation.navigate('OTP', {inputData: data, otp: randomOTP});
      setPhoneNumber('');
    }
  };

  const onSelect = country => {
    console.log(country);
    setCallingCode(country.callingCode[0]);
    setCountryCode(country.cca2);
    setCountry(country);
  };

  return (
    <View style={styles.container}>
      <CommonLogo />
      <Text style={styles.heading}>{string.login_signup}</Text>
      <View style={styles.row}>
        <CountryPicker
          containerButtonStyle={{height: 35}}
          withCallingCodeButton
          style={{}}
          theme={{
            backgroundColor: '#fff',
            // fontFamily: fontSofia_Regular,
            onBackgroundTextColor: '#000',
          }}
          {...{
            countryCode,
            withFilter,
            withFlag,
            withCountryNameButton,
            withAlphaFilter,
            withCallingCode,
            withEmoji,
            onSelect,
          }}
          visible={false}
        />
        <InputText
          containerStyle={{width: '80%', height: 55}}
          inputStyle={{fontSize: 18}}
          placeholderTextColor={Colors.black}
          keyboardType={'phone-pad'}
          value={phoneNumber}
          onChangeText={t => setPhoneNumber(t)}
          placeholder={'enter mobile number'}
          maxLength={10}
        />
      </View>
      <Button
        buttonContainer={{width: '90%'}}
        buttonText="Login"
        onPress={handleLogin}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'left',
    color: Colors.black,
    alignSelf: 'center',
    width: '90%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
    borderBottomWidth: 1,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  countryPicker: {
    marginRight: 10,
  },
});

export default LoginScreen;
