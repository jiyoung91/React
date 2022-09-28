import { createTheme, colors, ThemeProvider } from '@mui/material'
import { Box } from '@mui/material'
import { styled } from '@mui/material'

const theme = createTheme({
    status:{
        danger:'#e53e3e' //theme.d.ts  파일에 선언해줌(status)
    },
    palette: {
        secondary: {
            main: colors.orange[500],
        },
        neutral:{
            main: colors.grey[500],
            darker: colors.grey[700],
        }
    },
})

const StyledBox = styled(Box)(({theme}) =>({
    height:'250px',
    width:'250px',
    backgroundColor: theme.palette.neutral?.darker , //theme.d.ts  파일에 선언해줌
}))

export const CustomizingTheme = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                height: '300px', width: { xs: 100, sm: 200, md: 300, lg: 400, xl: 500, },
                bgcolor: 'secondary.light'
            }}></Box>
            <StyledBox />
        </ThemeProvider>
    )
}
