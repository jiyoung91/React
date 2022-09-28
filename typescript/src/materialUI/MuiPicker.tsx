import { Stack, TextField } from '@mui/material'
import { useState } from 'react'
// import { DatePicker , TimePicker, DateTimePicker} from '@mui/lab';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, TimePicker, DateTimePicker } from '@mui/x-date-pickers';

export const MuiPicker = () => {
    const [SelectedDate, setSelectedDate] = useState<Dayjs | null>(null)
    const [SelectedTime, setSelectedTime] = useState<Dayjs  | null>(null)
    const [SelectedDateTime, setSelectedDateTime] = useState<Dayjs | null>(null)

    return (
        <Stack spacing={4} sx={{ width: '250px' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label='Date Picker'
                    renderInput={(params: any) => <TextField {...params} />}
                    value={SelectedDate}
                    onChange={(newValue: any) => {
                        setSelectedDate(newValue)
                    }}
                />
                <TimePicker
                    label='Time Picker'
                    renderInput={(params: any) => <TextField {...params} />}
                    value={SelectedTime}
                    onChange={(newValue: any) => {
                        setSelectedTime(newValue)
                    }}
                />
                <DateTimePicker
                    label='Date Time Picker'
                    renderInput={(params: any) => <TextField {...params} />}
                    value={SelectedDateTime}
                    onChange={(newValue: any) => {
                        setSelectedDateTime(newValue)
                    }}
                />
            </LocalizationProvider>
        </Stack>
    )
}
