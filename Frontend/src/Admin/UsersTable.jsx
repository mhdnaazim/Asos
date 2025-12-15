// components/dashboard/UsersTable.jsx
import { Table, TableBody, TableCell, TableRow, TableHead, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const UsersTable = ({ users, page, rowsPerPage, onDelete }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Interest</TableCell>
          <TableCell>Usertype</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((u) => (
          <TableRow key={u.userid}>
            <TableCell>{u.userid}</TableCell>
            <TableCell>{u.email}</TableCell>
            <TableCell>{u.interest}</TableCell>
            <TableCell>{u.usertype}</TableCell>
            <TableCell>
              <IconButton onClick={() => onDelete(u.userid)} color="error">
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UsersTable;
