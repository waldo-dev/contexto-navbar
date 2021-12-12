import React, { useContext } from "react";
import styles from "./Form.module.css";
import Context from '../../context/Context';

const Form = () => {
  
  const {name, setName} = useContext(Context);

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label htmlFor="name">Your Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
    </form>
  );
};

export default Form;
