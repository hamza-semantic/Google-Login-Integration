import {
  GoogleSignin,
  isSuccessResponse,
} from '@react-native-google-signin/google-signin';

export const configureGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId: '824530741503-jauou01k7tlvqg6fp2r6rrt2laq8i12t.apps.googleusercontent.com',
  });
};

export const signInWithGoogle = async () => {
  // Step 1: Check karo Play Services available hai ya nahi
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

  // Step 2: Sign-in popup kholo
  const response = await GoogleSignin.signIn();

  // Step 3: Response check karo — successful hai ya user ne cancel kiya
  if (isSuccessResponse(response)) {
    const { idToken, user } = response.data;
    return { idToken, user };
  } else {
    // User ne account picker band kar diya / cancel kiya
    throw new Error('CANCELLED');
  }
};

export const signOutFromGoogle = async () => {
  try {
    await GoogleSignin.signOut();
  } catch (error) {
    console.log('Google sign-out error (safe to ignore if not signed in via Google):', error);
  }
};