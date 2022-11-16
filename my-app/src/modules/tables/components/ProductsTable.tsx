import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { Product, removeProduct } from '../../../redux/productsSlice';
import { Avatar } from '@mui/material';
import SiteButtons from '../../common/components/SiteButtons';

const ProductsTable = () => {
    const products = useAppSelector(state => state.products.products);
    const dispatch = useAppDispatch();

    const deleteRow = () => {
        dispatch(removeProduct())
    }

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
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product: Product) => (
                        <TableRow
                            key={product.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {product.title}
                            </TableCell>
                            <TableCell align="left">{product.description}</TableCell>
                            <TableCell align="left">{product.price}</TableCell>
                            <TableCell align="left">{product.discountPercentage}</TableCell>
                            <TableCell align="left">{product.rating}</TableCell>
                            <TableCell align="left">{product.stock}</TableCell>
                            <TableCell align="left">{product.brand}</TableCell>
                            <TableCell align="left">{product.category}</TableCell>
                            <TableCell align="left"><Avatar alt={product.title} src={product.thumbnail} /></TableCell>
                            <TableCell align="center">
                                <SiteButtons name='delete' bgcolor='FC9595' clickfunct={deleteRow}/>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ProductsTable
