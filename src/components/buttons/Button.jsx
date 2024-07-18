import React from 'react'

const styles = {
    background: '#2A37EE',
    color: '#ffffff',
    padding: '20px 60px',
    borderRadius: '50px',
    border: 'none',
    outline: 'none',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
}

function Button({text, handleBtnClick}) {
  return (
    <button style={styles} onClick={handleBtnClick}>{text}</button>
  )
}

export default Button