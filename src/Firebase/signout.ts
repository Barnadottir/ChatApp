import { signOut } from 'firebase/auth';
import { auth } from './config';
const handleSignout = async () => {
    try {
      signOut(auth)
    }
    catch(e) {
      console.error(e);
    }
}

export { handleSignout }
