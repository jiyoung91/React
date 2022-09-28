import { Stack, Alert, AlertTitle, Button } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

export const MuiAlert = () => {
    return (
        <Stack spacing={2} >
            <Alert severity='error'>alert</Alert>
            <Alert severity='warning'>alert</Alert>
            <Alert severity='info'>alert</Alert>
            <Alert severity='success'>alert</Alert>

            <Alert variant='outlined' severity='error'>alert</Alert>
            <Alert variant='outlined' severity='warning'>alert</Alert>
            <Alert variant='outlined' severity='info'>alert</Alert>
            <Alert variant='outlined' severity='success'>alert</Alert>

            <Alert variant='filled' severity='error'
                onClose={() => alert('Close alert')}>
                <AlertTitle>error</AlertTitle>
                alert
            </Alert>
            <Alert variant='filled' severity='warning'>
                <AlertTitle>warning</AlertTitle>
                alert
            </Alert>
            <Alert variant='filled' severity='info'>
                <AlertTitle>info</AlertTitle>
                alert
            </Alert>
            <Alert variant='filled' severity='success'
                icon={<CheckIcon fontSize='inherit' />}
                action={
                    <Button color='inherit' size='small' >UNDO</Button>
                }
            >
                <AlertTitle>success</AlertTitle>
                alert
            </Alert>

        </Stack>
    )
}
