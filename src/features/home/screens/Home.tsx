import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../../components/Header';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import type { RootState } from '../../../store';
import { logout } from '../../../store/authSlice';
import { signOutFromGoogle } from '../../../services/google-auth';
import { clearLoggedInSessionToken } from '../../../utils/storage';

const Home = ({ navigation }: any) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const onLogout = async () => {
  await signOutFromGoogle();           // ⬅ naya: Google session bhi clear
  await clearLoggedInSessionToken();
  dispatch(logout());
  console.log('Tokens removed');

  navigation.reset({
    index: 0,
    routes: [{ name: 'Login' }],
  });
};

  return (
    <View style={styles.container}>
      <Header title="Home" />
      <View style={styles.body}>
        <Card>
          <Text style={styles.text}>Welcome, {user?.email}!</Text>
        </Card>
        <Button title="Logout" onPress={onLogout} style={styles.logoutButton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  body: { padding: 16 },
  text: { fontSize: 15, color: '#333', marginBottom: 16 },
  logoutButton: { backgroundColor: 'red' },
});

export default Home;