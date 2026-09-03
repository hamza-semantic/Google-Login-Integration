import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { signInWithGoogle } from '../../../services/google-auth';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { authService } from '../../../services/auth';
import { setLoggedInSessionToken } from '../../../utils/storage';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../../store/authSlice';

const Login = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const dispatch = useDispatch();

  const onGoogleSignIn = async () => {
    setGoogleLoading(true);
    try {
      const { idToken, user } = await signInWithGoogle();
      console.log('Google idToken:', idToken);

      if (!idToken) {
        throw new Error('GOOGLE_TOKEN_MISSING');
      }

      await setLoggedInSessionToken(idToken);
      dispatch(loginSuccess({ email: user.email ?? '', access_token: idToken }));

      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } catch (error: any) {
      if (error.message === 'CANCELLED') {
        console.log('User cancelled Google sign-in');
      } else {
        console.log('Google sign-in error:', error);
        Alert.alert('Google Login Failed', 'Please try again.');
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  const onSubmit = async () => {
    setLoading(true);
    try {
      const response = await authService.login({ username, password });
      await setLoggedInSessionToken(response.accessToken);
      dispatch(
        loginSuccess({
          email: response.email,
          access_token: response.accessToken,
        }),
      );

      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } catch (error: any) {
      console.log('Login error message:', error?.message);
      Alert.alert('Login Failed', 'Please check your username and password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Input
        label="Username"
        value={username}
        onChangeText={setUsername}
        placeholder="emilys"
      />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="••••••••"
        secureTextEntry
      />
      <Button title="Login" onPress={onSubmit} loading={loading} />
      <Button
        title="Don't have an account? Sign Up"
        onPress={() => navigation.navigate('Signup')}
        style={styles.signupButton}
        textStyle={styles.signupText}
      />

      <Button
        title="Continue with Google"
        onPress={onGoogleSignIn}
        loading={googleLoading}
        style={styles.googleButton}
        iconName="google"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  signupButton: { marginTop: 16, backgroundColor: 'transparent' },
  signupText: { color: '#2E74B5', fontSize: 14, fontWeight: '400' },
  googleButton: { marginTop: 12, backgroundColor: '#DB4437' },
});

export default Login;