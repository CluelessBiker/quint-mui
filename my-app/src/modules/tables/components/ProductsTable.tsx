import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { initialState, Product } from '../../../redux/productsSlice';

// function createData(
//     title: string,
//     description: string,
//     price: number,
//     discountPercentage: number,
//     rating: number,
//     stock: number,
//     brand: string,
//     category: string,
//     thumbnail: string,
//     images: string[],
// ) {
//     return { 
//         title,
//         description,
//         price,
//         discountPercentage,
//         rating,
//         stock,
//         brand,
//         category,
//         thumbnail,
//         images,
//     };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];



const ProductsTable = () => {
    const rows = initialState.products;
    return (
        <TableContainer
            component={Paper}
            sx={{
                borderRadius: '20px',
                border:'1px solid #333333',
                backgroundColor: '#FAFAFA',
            }}
        >
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead sx={{ height: 'auto' }}>
                    <TableRow>
                        <TableCell align="left" colSpan={12} sx={{textTransform: 'uppercase'}}>
                            Products
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="left">title</TableCell>
                        <TableCell align="left">description</TableCell>
                        <TableCell align="left">price</TableCell>
                        <TableCell align="left">discountPercentage</TableCell>
                        <TableCell align="left">rating</TableCell>
                        <TableCell align="left">stock</TableCell>
                        <TableCell align="left">brand</TableCell>
                        <TableCell align="left">category</TableCell>
                        <TableCell align="left">thumbnail</TableCell>
                        {/* <TableCell align="left">images</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row: Product) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>
                            <TableCell align="left">{row.description}</TableCell>
                            <TableCell align="left">{row.price}</TableCell>
                            <TableCell align="left">{row.discountPercentage}</TableCell>
                            <TableCell align="left">{row.rating}</TableCell>
                            <TableCell align="left">{row.stock}</TableCell>
                            <TableCell align="left">{row.brand}</TableCell>
                            <TableCell align="left">{row.category}</TableCell>
                            <TableCell align="left">{row.thumbnail}</TableCell>
                            {/* <TableCell align="left">{row.}</TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ProductsTable
