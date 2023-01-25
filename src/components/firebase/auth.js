import app from "./app";
// import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
const { getAuth, createUserWithEmailAndPassword, validateEmail, updateProfile  } = require("firebase/auth");
const firebase = require("firebase");
// Required for side-effects
import { collection, getDocs, getFirestore, doc, setDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const auth = getAuth(app);

// Collections names
const USERS = 'users';
const PROJECTS = 'projects';

// Create a class for the user:
// The user will be created with the following properties:
// - email : string
// - password : string
// - phone: string
// - isAdmin: boolean
// - isVerified: boolean
// - isBanned: boolean
// - isDeleted: boolean
// - createdAt: date
// - updatedAt: date
// - profilePicture: string
// - projects: array
// - settings: object

// Create a function to create a new user in firestore
const createUserInFirestore = async (email) => {
    // Create a new user
    const user = new User(email);
    // Upload the user to firebase firestore using the email as the document id
    await setDoc(doc(db, USERS, user.email), {
        email: user.email,
        phone: user.phone,
        isAdmin: user.isAdmin,
        isVerified: user.isVerified,
        isBanned: user.isBanned,
        isDeleted: user.isDeleted,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        profilePicture: user.profilePicture,
        projects: user.projects,
        settings: user.settings
    });
    // Return the user
    return user;
}

// Create a function to get a user from firestore
const getUserFromFirestore = async (email) => {
    // Get the user from firebase firestore using the email as the document id
    const userDoc = await getDoc(doc(db, USERS, email));
    // Check if the user exists
    if (userDoc.exists()) {
        // Return the user
        return userDoc.data();
    } else {
        // Return create a new user
        return createUserInFirestore(email);
    }
}

// Create a function to update a user in firestore using the email, a key and a value
const updateUserInFirestore = async (email, key, value) => {
    // Get the user from firebase firestore using the email as the document id
    const userDoc = await getDoc(doc(db, USERS, email));
    // Check if the user exists
    if (userDoc.exists()) {
        // Update the user
        await updateDoc(doc(db, USERS, email), {
            [key]: value,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        // Return the user
        return userDoc.data();
    } else {    
        // Return create a new user
        return createUserInFirestore(email);
    }
}

// Create a function to delete a user from firestore
const deleteUserFromFirestore = async (email) => {
    // Delete the user from firebase firestore using the email as the document id
    await updateUserInFirestore(email, 'isDeleted', true);
    // Return the user
    return getUserFromFirestore(email);
}

// Create a function to send a verification email
const sendVerificationEmail = async () => {
    // Send a verification email
    await sendEmailVerification(auth.currentUser);
}

// Define a function to create a new user
// The function will take the following parameters:
// - email : string
// - password : string
// - passwordConfirmation : string
// The function will do the following:
// - Validate the email and password
// - Check if the email is already in use
// - Create a new user in firebase auth
// - Send a verification email
// - Create a new user in firebase firestore
// - Return the user
const createUser = async (email, password, passwordConfirmation) => {
    // Check if the email is valid
    if (!validateEmail(email)) {
        // Raise an error
        throw new Error('El email no es válido');
    }
    // Check if the password is valid
    if (password.length < 6) {
        // Raise an error
        throw new Error('La contraseña debe tener al menos 6 caracteres');
    }
    // Check if the password and password confirmation match
    if (password !== passwordConfirmation) {
        // Raise an error
        throw new Error('Las contraseñas no coinciden');
    }
    // Check if the email is already in use
    // Get the user from firebase auth
    const user = await getUserByEmail(email);
    // Check if the user exists
    if (user) {
        // Raise an error
        throw new Error('El email ya está en uso');
    }
    // Create a new user in firebase auth using createUserWithEmailAndPassword
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // Send a verification email
        sendVerificationEmail();
        // Create a new user in firebase firestore
        createUserInFirestore(email);
    }).then(() => {
        // Get the data from firebase auth and firebase firestore
        const user = getUserFromFirestore(email);
        // Return the user
        return user;
    }).catch((error) => {
        // Get the error code and message
        const errorCode = error.code;
        const errorMessage = error.message;
        // Raise an error
        throw new Error(errorMessage);
    });
}

const loginUser = async (email, password) => {
    // Check if the email is valid
    if (!validateEmail(email)) {
        // Raise an error
        throw new Error('El email no es válido');
    }
    // Check if the password is valid
    if (password.length < 6) {
        // Raise an error
        throw new Error('La contraseña debe tener al menos 6 caracteres');
    }
    // Check if the email is already in use
    // Get the user from firebase auth
    const user = await getUserByEmail(email);
    // Check if the user exists
    if (!user) {
        // Raise an error
        throw new Error('El email no está registrado');
    }
    // Check if the user is verified
    if (!user.emailVerified) {
        // Raise an error
        throw new Error('El email no está verificado');
    }
    // Check if the user is banned
    if (user.isBanned) {
        // Raise an error
        throw new Error('El usuario está baneado');
    }
    // Check if the user is deleted
    if (user.isDeleted) {
        // Raise an error
        throw new Error('El usuario está eliminado');
    }
    // Sign in the user
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in 
        const email = userCredential.user.email;
        // Get the data from firebase auth and firebase firestore
        const user = getUserFromFirestore(email);
        // Return the user
        return user;
    }).catch((error) => {
        // Get the error code and message
        const errorCode = error.code;
        const errorMessage = error.message;
        // Raise an error
        throw new Error(errorMessage);
    });
}

// Create a function to logout the user
const logoutUser = async () => {
    // Logout the user
    await signOut(auth);
}

// Create a function to get the current user with the user data from firestore and the user data from firebase auth
const getCurrentUser = async () => {
    // Get the current user from firebase auth
    const user = auth.currentUser;
    // Check if the user exists
    if (user) {
        // Get the user from firestore
        const userFirestore = await getUserFromFirestore(user.email);
        // Return the user
        return {
            userAuth: user,
            userFirestore: userFirestore
        };
    } else {
        // Return null
        return null;
    }
}


const authFunctions = {
    deleteUserFromFirestore,
    createUser,
    loginUser,
    logoutUser,
    getCurrentUser
}
// Export the functions deleteUserFromFirestore, createUser, loginUser, logoutUser and getCurrentUser
export default authFunctions



