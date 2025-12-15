// components/dashboard/ProductsTable.jsx
import { Table, TableBody, TableCell, TableHead, TableRow, IconButton, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductsTable = ({ products, onDelete, setOpenEdit, setShowAddProduct }) => {
  return (
    <>
      <Button onClick={() => setShowAddProduct(true)}>ADD PRODUCT</Button>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((p) => (
            <TableRow key={p.id}>
              <TableCell>{p.id}</TableCell>
              <TableCell>{p.name}</TableCell>
              <TableCell>{p.price}</TableCell>
              <TableCell>
                <IconButton onClick={() => setOpenEdit(true)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => onDelete(p.id)} color="error">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ProductsTable;
