import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Box, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import logo from './logo.png';

const logo = "https://botycloud.com/wp-content/uploads/2022/09/Boty.gif";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
  },
  button: {
    margin: theme.spacing(1),
    width: '100%'
  },
}));

const Logo = styled.img`
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
`;

const UserRegistration = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Perform form submission or validation here
    console.log(formData);
  };

  return (
    <Grid container justify="center">
        <Grid item xs={12} sm={6}>
            <Box mb={3}>
              <Logo src={logo} alt="company-logo" />
            </Box>
            <form className={classes.container} onSubmit={handleSubmit}>
              <TextField
                id="name"
                name="name"
                label="Name"
                className={classes.textField}
                value={formData.name}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                id="email"
                name="email"
                label="Email"
                className={classes.textField}
                value={formData.email}
                onChange={handleChange}
                margin="normal"
              />
              <TextField
                id="password"
                name="password"
                label="Password"
                className={classes.textField}
                value={formData.password}
                onChange={handleChange}
                type="password"
                margin="normal"
              />
              <Button variant="contained" color="primary" className={classes.button} type="submit">
                Register
              </Button>
              <Box mt={2}>
                <Link to="/userlogin">Already have an account? Log in</Link>
              </Box>
            </form>
        </Grid>
    </Grid>
  );
};

export default UserRegistration;
