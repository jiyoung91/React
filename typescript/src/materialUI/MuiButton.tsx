import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import {useState} from 'react'

export const MuiButton = () => {
  const [formats, setformats] = useState<string | null >(null)
  console.log({ formats})
  const handlelFormatChange =(_event: React.MouseEvent<HTMLElement>,undateFormats:string | null )=>{
    setformats(undateFormats)
  }

  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant='text' href='https://google.com'>text</Button>
            <Button variant='contained'>contained</Button>
            <Button variant='outlined'>outlined</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='contained' color='primary'>primary</Button>
            <Button variant='contained' color='secondary'>secondary</Button>
            <Button variant='contained' color='error'>error</Button>
            <Button variant='contained' color='info'>info</Button>
            <Button variant='contained' color='success'>success</Button>
        </Stack>
        <Stack display='block' spacing={2} direction='row'>
            <Button variant='contained' size='small'>small</Button>
            <Button variant='contained' size='medium'>medium</Button>
            <Button variant='contained' size='large'>large</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='contained' startIcon={<SendIcon/>} disableRipple 
            onClick={()=> alert('clicked')}>send</Button>
            <Button variant='contained' endIcon={<SendIcon/>} disableElevation >send</Button>
            <IconButton aria-label='send' color='success' size='small'> 
                <SendIcon />
            </IconButton>
        </Stack>
        <Stack direction='row'>
            <ButtonGroup variant='contained' orientation='vertical' size='small' color='secondary' aria-label='alignment button group'>
                <Button onClick={()=>alert('left')}>left</Button>
                <Button >center</Button>
                <Button >right</Button>
            </ButtonGroup>
        </Stack>

        <Stack direction='row'>
            <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handlelFormatChange}
            size='small' color='success' orientation='vertical'
            exclusive>
                <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon /></ToggleButton>
                <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon /></ToggleButton>
                <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlinedIcon /></ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </Stack>
  )
}
