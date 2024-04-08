import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function LazyLoading() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    handleOpen()
  })
  
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        Please Wait Loading...<CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}