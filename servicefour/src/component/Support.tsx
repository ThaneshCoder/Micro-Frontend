import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';

function Support() {
  return (
    <div className="fixed bottom-16 right-16 bg-white h-20 w-20 rounded-lg shadow-md cursor-pointer shadow-white" >
      <ContactSupportOutlinedIcon sx={{height:"100%",width:'100%',color:'blue'}}/>
    </div>
  )
}

export default Support