/**
 *
 *
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
  Pressable,
} from 'react-native';
import colors from './res/values/ColorsScheme.json';

const App = () => {
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.mainView}>
            <View style={styles.titleView}>
              <Text style={styles.titleText}>Welcome {'\n'}Back</Text>
            </View>
            <View style={styles.textInputView}>
              <TextInput style={styles.textInput} placeholder="Email" />
              <TextInput style={styles.textInput} placeholder="Password" />
            </View>
            <Pressable
              onPress={() => {
                console.log('Login');
              }}
              style={styles.loginButton}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: '#ffffff',
                }}>
                LOGIN
              </Text>
            </Pressable>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  //Views.
  mainView: {flex: 1, padding: 10, justifyContent: 'center'},
  titleView: {flex: 1, alignItems: 'flex-start'},
  textInputView: {flex: 1},
  //Text.
  titleText: {fontSize: 50, fontWeight: 'bold'},
  //TextInput.
  textInput: {
    height: 50,
    borderColor: colors.primary,
    borderWidth: 2,
    padding: 5,
    margin: 5,
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: colors.primary,
  },
});

export default App;
