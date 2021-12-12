import React, { useContext } from 'react';
import styles from './Navbar.module.css';
import Context from '../../context/Context';

const Navbar = () => {
  const {name} = useContext(Context);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hi {name}!</h1>
    </div>
  );
}

export default Navbar;
