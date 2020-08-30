const buttonStyles = {
  color: 'white',
  border: 'none',
  fontSize: '16px',
  padding: '5px 10px',
  borderRadius: '5px',
  fontWeight: '600',
  marginRight: '15px',
  cursor: 'pointer',
}

const styles = {
  stickyInput: {
    fontSize: '20px',
    border: '1px solid #ccc',
    background: '#ffff80',
    borderRadius: '10px',
    padding: '10px',
  },
  wrapper: {
    display: 'inline-block',
    marginRight: '20px',
    marginBottom: '20px'
  },
  saveButton: {
    ...buttonStyles,
    background: 'green',
  },
  deleteButton: {
    ...buttonStyles,
    background: 'red'
  },
  buttonsContainer: {
    textAlign: 'center',
    marginTop: '4px'
  }
}

export default styles