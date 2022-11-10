import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

interface TablesProps {
    tablehead: string,
    columnhead1: string,
    columnhead2: string,
    columnhead3: string,
    columnhead4: string,
    columnhead5: string,
}

const Tables:FC<TablesProps> = ({ tablehead, columnhead1, columnhead2, columnhead3, columnhead4, columnhead5 }) => {
    return (
        <TableContainer
        component={Paper}
        sx={{
            borderRadius: '20px',
            border:'1px solid #333333',
            backgroundColor: '#FAFAFA'
        }}
        >
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                    <TableCell align="center" colSpan={12}>
                        { tablehead }
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>{ columnhead1 }</TableCell>
                    <TableCell align="right">{ columnhead2 }</TableCell>
                    <TableCell align="right">{ columnhead3 }</TableCell>
                    <TableCell align="right">{ columnhead4 }</TableCell>
                    <TableCell align="right">{ columnhead5 }</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Tables
