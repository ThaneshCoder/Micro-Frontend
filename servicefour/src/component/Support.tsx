import * as React from 'react';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import DialogueBox from './DialogueBox';


function Support() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev)
  };

  return (

    <div className={"fixed border-2 border-black p-1 h-10 w-10 rounded-2xl shadow-md cursor-pointer shadow-white z-10 bg-white bottom-1"} onClick={handleClick}>
      <ContactSupportOutlinedIcon sx={{ height: "100%", width: '100%', color: 'blue' }} />
      {
        open ? <div className='fixed border-2 bottom-12 overflow-y-auto rounded-xl bg-slate-50 p-5 -z-10'><DialogueBox close={setOpen} /></div> : null
      }
    </div>
  )
}

export default Support