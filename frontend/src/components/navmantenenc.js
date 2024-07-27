import React from 'react';

const Navmantenence = () => {
  return (
    <div style={{
      backgroundColor: 'gray',
      color: 'white',
      height: '5%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '10px',
      boxSizing: 'border-box',
      width: '100%'
    }}>
      <div style={{ fontSize: '20px',  textAlign: 'center' }}>
        We are working hard to prepare this store 🛠️
      </div>
      <style>
        {`
          @media (max-width: 600px) {
            div {
              font-size: 16px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Navmantenence;
