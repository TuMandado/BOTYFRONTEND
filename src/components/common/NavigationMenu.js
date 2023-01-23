import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Typography from '@material-ui/core/Typography';
// Import styled components
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // margin: theme.spacing(2),
    backgroundColor: '#3a00a3',
    height: '50px',
  },
  projectSelect: {
    width: '150px'
  },
  sectionButtons: {
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const NavRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  // background-color: #00DFEC8A;
  height: 50px;
  // Display horizontally
`;

const NavigationMenu = () => {
  const classes = useStyles();
  const [currentProject, setCurrentProject] = useState(null);
  const userRole = "client_admin"

  // Get the url from the browser
  const url = window.location.href;
  const url_sections = url.split("/")[3];
  // Make url_sections first letter uppercase
  const url_sections_capitalized = url_sections.charAt(0).toUpperCase() + url_sections.slice(1);

  useEffect(() => {
    // Fetch current project and user role from API
    // Example:
    // setCurrentProject('Project 1')
    // setUserRole('client_admin')
  }, []);

  const handleProjectChange = (event) => {
    setCurrentProject(event.target.value);
  }

  const setCurrentSection = (section) => {
    // Update current section in API
    }

  return (
    <NavRoot
    >
      <div
      style={{
        display: 'flex', 
        alignItems: 'center',
        // Display horizontally
        flexDirection: 'row',
      }}
      >
        <img
          src="https://botycloud.com/wp-content/uploads/2022/09/Boty.gif"
          alt="Boty Logo"
          style={{
            width: '50px',
            height: '50px',
            objectFit: 'contain',
            // Add a rounded border
            borderRadius: '50%',
            // Add a space to the left
            marginLeft: '10px',
          }}
        />
        <Typography 
        variant="h5"
        style={{
          marginLeft: '20px',
          marginRight: '20px',
        }}
        >{url_sections_capitalized}</Typography>
        <Select
          className={classes.projectSelect}
          value={currentProject}
          onChange={handleProjectChange}
        >
          <MenuItem value="project1">Project 1</MenuItem>
          <MenuItem value="project2">Project 2</MenuItem>
          <MenuItem value="project3">Project 3</MenuItem>
        </Select>
      </div>
      {currentProject && (
        <div className={classes.sectionButtons}>
          {userRole === 'client_admin' && (
            <div>
              <Button className={classes.button} onClick={() => setCurrentSection('settings')}>Settings</Button>
              <Button className={classes.button} onClick={() => setCurrentSection('members')}>Members</Button>
            </div>
          )}
          {userRole === 'client_user' && (
            <div>
              <Button className={classes.button} onClick={() => setCurrentSection('dashboard')}>Dashboard</Button>
              <Button className={classes.button} onClick={() => setCurrentSection('reports')}>Reports</Button>
            </div>
          )}
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      )}
    </NavRoot>
  );
}

export default NavigationMenu;
