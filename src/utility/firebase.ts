import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  AuthError,
  UserCredential,
  User,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCzAkp-MbQjlY752Q64fNZ3KMYv9-M4EVE",
  authDomain: "morent-b6944.firebaseapp.com",
  projectId: "morent-b6944",
  storageBucket: "morent-b6944.appspot.com",
  messagingSenderId: "884694989603",
  appId: "1:884694989603:web:c769ad739a1be4196b6a96",
  measurementId: "G-TFZZM5ZW67",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const signUp = async (
  email: string,
  password: string
): Promise<User | string> => {
  try {
    const userCredential: UserCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    return user;
  } catch (error) {
    const authError = error as AuthError;
    // const errorMessage = authError.message;
    const errorCode = authError.code;

    switch (errorCode) {
      case "auth/too-many-requests":
        return "Many failed login attempts. Reset your password or try again later";
      case "auth/invalid-credential":
        return "Password or e-mail is incorrect";
      default:
        return "Something went wrong";
    }
  }
};
