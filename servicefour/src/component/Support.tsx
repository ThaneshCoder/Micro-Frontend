import * as React from 'react';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import DialogueBox from './DialogueBox';


function Support() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev)
  };

  return (
    <div className='w-screen h-screen flex justify-end items-end'>
      <div className={"fixed border-2  m-5 p-3 h-16 w-16 rounded-2xl shadow-md cursor-pointer shadow-white "} onClick={handleClick}>

        <ContactSupportOutlinedIcon sx={{ height: "100%", width: '100%', color: 'white' }} />

      </div>
      {
        open ? <div className='fixed border-2 m-5 mb-20 overflow-y-auto rounded-xl bg-slate-50 p-5'><DialogueBox close={setOpen} /></div> : null
      }
    </div>

  )
}

export default Support