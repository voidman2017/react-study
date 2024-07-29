import React, { useEffect } from 'react';
const withLogger = (WrappedComponent) => {
  return (props) => {
    const log = (message) => {
      console.log(message);
    };

    return <WrappedComponent log={log} {...props} />;
  };
};



const MyComponent = ({ log }) => {
  useEffect(() => {
    log('MyComponent Mounted');
  }, [log]);

  return (
    <div>
      <p>My Component</p>
    </div>
  );
};

export default withLogger(MyComponent);
