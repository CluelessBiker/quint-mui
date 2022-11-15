import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { useAppSelector } from '../../../redux/hooks';
import { initialState, Product } from '../../../redux/productsSlice';

const ProductsTable = () => {
    const rows = initialState.products;
    // const products = useAppSelector(state => state.products.products)
    // const rows = products
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
                    {/* {rows.map((row: Product) => ( */}
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
                            <TableCell align="left"><img src={row.thumbnail} alt={row.title}/></TableCell>
                            {/* <TableCell align="left">{row.}</TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ProductsTable
