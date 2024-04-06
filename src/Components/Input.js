import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../CommonUtils/Colors';

const InputText = ({
  containerStyle,
  inputStyle,
  placeholder,
  placeholderTextColor,
  secureTextEntry,
  keyboardType,
  maxLength,
  value,
  onChangeText,
  editable,
  validation,
  onEndEditing,
  numberOfLines,
  validationText,
  validationTextStyle,
  onSubmitEditing,
  multiline,
  image,
  onPress2,
}) => {
  return (
    <KeyboardAvoidingView style={[styles.inputContainer, containerStyle]}>
      <TextInput
        style={[styles.inputText, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={'grey'}
        underlineColorAndroid={'transparent'}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        maxLength={maxLength}
        numberOfLines={numberOfLines}
        value={value}
        autoCorrect={false}
        onChangeText={onChangeText}
        editable={editable}
        onEndEditing={onEndEditing}
        autoCapitalize={'none'}
        onSubmitEditing={onSubmitEditing}
        multiline={multiline}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    zIndex: 0,
    borderRadius: 10,
    backgroundColor: 'white',
    // justifyContent: 'space-between',
  },
  inputText: {
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: '500',
    color: Colors.black,
    width: '90%',
    paddingBottom: 20,
    paddingLeft: 10,
    textAlignVertical: 'top',
  },
  eyeStyle: {
    height: 25,
    width: 25,
  },
});

export default InputText;
