import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material'

export const MuiTable = () => {
    return (
        <TableContainer component={Paper} sx={{ maxHeight : '300px'}}>
            <Table aria-label='simple table' stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First name</TableCell>
                        <TableCell>Last name</TableCell>
                        <TableCell align='center'>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        tableData.map((row)=>(
                            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th' : { border: 0 }}}>
                                <TableCell>{row.id} </TableCell> 
                                <TableCell>{row.first_name} </TableCell> 
                                <TableCell>{row.last_name} </TableCell> 
                                <TableCell>{row.email} </TableCell> 
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const tableData = [{
    "id": 1,
    "first_name": "Brockie",
    "last_name": "Flintoft",
    "email": "bflintoft0@baidu.com",
    "gender": "Male",
    "ip_address": "194.100.251.217"
}, {
    "id": 2,
    "first_name": "Diarmid",
    "last_name": "Kalisz",
    "email": "dkalisz1@zdnet.com",
    "gender": "Male",
    "ip_address": "108.31.219.131"
}, {
    "id": 3,
    "first_name": "Kevyn",
    "last_name": "Mingasson",
    "email": "kmingasson2@stanford.edu",
    "gender": "Female",
    "ip_address": "51.132.133.95"
}, {
    "id": 4,
    "first_name": "Wynne",
    "last_name": "Knobell",
    "email": "wknobell3@sohu.com",
    "gender": "Female",
    "ip_address": "116.216.92.178"
}, {
    "id": 5,
    "first_name": "Claiborn",
    "last_name": "Fogt",
    "email": "cfogt4@nyu.edu",
    "gender": "Male",
    "ip_address": "54.79.218.36"
}, {
    "id": 6,
    "first_name": "Gardener",
    "last_name": "Camble",
    "email": "gcamble5@jalbum.net",
    "gender": "Male",
    "ip_address": "194.200.39.199"
}, {
    "id": 7,
    "first_name": "Amelie",
    "last_name": "Alen",
    "email": "aalen6@ucoz.com",
    "gender": "Female",
    "ip_address": "39.254.229.105"
}, {
    "id": 8,
    "first_name": "Gregoor",
    "last_name": "Chitson",
    "email": "gchitson7@opera.com",
    "gender": "Male",
    "ip_address": "185.67.74.90"
}, {
    "id": 9,
    "first_name": "Shaine",
    "last_name": "Biswell",
    "email": "sbiswell8@miibeian.gov.cn",
    "gender": "Male",
    "ip_address": "138.231.238.50"
}, {
    "id": 10,
    "first_name": "Verge",
    "last_name": "Brisbane",
    "email": "vbrisbane9@youku.com",
    "gender": "Non-binary",
    "ip_address": "56.217.37.236"
}]

