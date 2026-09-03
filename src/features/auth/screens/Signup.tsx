import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { authService } from '../../../services/auth';

const Signup = ({ navigation }: any) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setLoading(true);
    try {
      const response = await authService.signup({
        name: fullName,
        email,
        password,
      });
      console.log('Signup success', response);
      Alert.alert('Success', 'Account created! Please login.');
      navigation.navigate('Login');
    } catch (error: any) {
      console.log('Signup error', JSON.stringify(error?.response?.data));
      Alert.alert(
        'Signup Failed',
        JSON.stringify(error?.response?.data?.message) ||
          'Something went wrong'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Input
        label="Full Name"
        value={fullName}
        onChangeText={setFullName}
        placeholder="Enter Your Name"
      />
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter Your Email"
        keyboardType="email-address"
      />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="••••••••"
        secureTextEntry
      />
      <Button title="Sign Up" onPress={onSubmit} loading={loading} />
      <Button
        title="Already have an account? Login"
        onPress={() => navigation.navigate('Login')}
        style={styles.loginButton}
        textStyle={styles.loginText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  loginButton: { marginTop: 16, backgroundColor: 'transparent' },
  loginText: { color: '#2E74B5', fontSize: 14, fontWeight: '400' },
});

export default Signup;
