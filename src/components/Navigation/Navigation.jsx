import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';

import UserContext from '../User/user.jsx';

const useStyles = createUseStyles({
  wrapper: {
    borderBottom: 'black solid 1px',
    padding: [15, 10],
    textAlign: 'right',
  }
});

export default function Navigation() {
  const classes = useStyles();
  const user = useContext(UserContext);
  return(
    <div className={classes.wrapper}>
      {user.name}
    </div>
  )
}