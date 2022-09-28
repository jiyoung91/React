import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, } from '@mui/material'
import { useState } from 'react'

export const MuiDialog = () => {
    const [Open, setOpen] = useState(false)
    return (
        <>
            <Button onClick={()=>setOpen(true)}>Open dialog</Button>
            <Dialog
                open={Open}
                onClose={()=> setOpen(false)}
                aria-labelledby='dialog-title'
                aria-describedby='dialog-description'
            >
                <DialogTitle id='dialog-title'>Suvmit the test?</DialogTitle>
                <DialogContent>
                    <DialogContentText id='dialog-desciption'>Are you sure you want to submit the test? You will not be able to edit after submitting</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>setOpen(false)}>Canel</Button>
                    <Button autoFocus onClick={()=> setOpen(false)}>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
