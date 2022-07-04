export const boxForm = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    width: '50%',
    height: '100%',
    padding: '1rem',
    backgroundColor: '#d4bbf2',
    borderRadius: '0.5rem',
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
    '& > :not(style)': {
        m: 1,
        width: '25ch'
    }
}