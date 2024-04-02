import * as React from 'react'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

let DialogueBox: React.FC<any> = ({ close }) => {
    return (
        <div className=' w-60 h-96 overflow-y-auto'>
               <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={close}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
        </div>
    );
}
export default DialogueBox