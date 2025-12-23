import {AppContext} from '../context/AppContext';
import Component2 from './Component2';
const Component1 = () => {
  const values = {
    a: "Value A",
    b: "Value B",
    c: "Value C",
    d: "Value D",
    e: "Value E",
    f: "Value F"
  };
  return (
    <AppContext.Provider value={values}>
      <div style={{ border: '1px solid black', padding: '10px' }}>
        <h1>Component 1</h1>
        <Component2 />
      </div>
    </AppContext.Provider>
  );
};
export default Component1;