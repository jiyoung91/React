import { Typography } from '@mui/material'

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>h1 Heading </Typography>
        <Typography variant='h2'>h2 Heading </Typography>
        <Typography variant='h3'>h3 Heading </Typography>
        <Typography variant='h4' component='h1' gutterBottom >h4 Heading </Typography>
        <Typography variant='h5'>h5 Heading </Typography>
        <Typography variant='h6'>h6 Heading </Typography>

        <Typography variant='subtitle1'>subtitle1 </Typography>
        <Typography variant='subtitle2'>subtitle2 </Typography>
        <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, at possimus? Aliquam molestias ad explicabo cupiditate dolore porro nemo quidem repellendus reprehenderit distinctio deserunt, omnis saepe iusto temporibus molestiae officiis. </Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe sed porro, neque ipsam eius! Magnam rem assumenda commodi iusto nisi sapiente ad dolorum, voluptatum nam enim quam, asperiores modi! </Typography>  {/* lorem */}
    </div>
  )
}
