import * as React from 'react'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

let DialogueBox: React.FC<{close:any,user:any}> = ({ close,user }) => {
    return (
        <div className=' w-60 h-96 overflow-y-auto'>
        <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        // sx={{}}
  
      >
        <CloseIcon fontSize="small" onClick={close}/>
      </IconButton>
      <h1>Hello {user.username}</h1>
        </div>
    );
}
export default DialogueBox