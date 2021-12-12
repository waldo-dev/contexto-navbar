import React, {useState} from 'react';
import Context from '../../context/Context';

const Wrapper = ({children}) => {
  const [name, setName] = useState("Waldo Villagran")
  return (
    <Context.Provider 
    value={{name, setName}}>
      {children}
    </Context.Provider>
  );
}

export default Wrapper;
