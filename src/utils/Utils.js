const navigation = {
  redirectToPath: (path) => {
    window.location.href = `/${path}`;
  },
  redirectToTop: () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

const forms = {
  validateEmail: (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  },
  validatePhone: (phone) => {
    const re = /^\d{10}$/;
    return re.test(String(phone));
  },
  validateName: (name) => {
    const re = /^[a-zA-Z ]{2,30}$/;
    return re.test(String(name));
  },
  validateNotEmpty: (value) => {
    return value !== '' && value !== null && value !== undefined;
  },
  validatePassword: (password) => {
    // Password must be at least 8 characters long, contain at least one number, one lowercase and one uppercase letter
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(String(password));
  },
  validateNoSQLInjection: (value) => {
    // This function takes in a string input and uses a regular expression to check if any special characters that could be used for a NoSQL injection attack
    //  are present in the input. If any are found, it returns false. If none are found, it returns true.
    const regex = /[$^&*()+|<>:"'\/]/;
    if (regex.test(value)) {
      return false;
    }
    return true;
  }
}



const Utils = {
  navigation,
  forms
}

// Export the function
export default Utils