import { Box, Button, Typography } from "@mui/material";

const EditProductModal = ({
  editData,
  setEditData,
  onClose,
  refresh,
}) => {

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setEditData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setEditData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleUpdate = async () => {
    await refresh(); // same behavior
    onClose();
  };

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <Box sx={{ width: 400, p: 4, bgcolor: "#fff", borderRadius: "12px" }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Edit Product
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <input name="name" value={editData.name} onChange={handleChange} />
          <input name="price" value={editData.price} onChange={handleChange} />
          <input name="color" value={editData.color} onChange={handleChange} />
          <input name="quantity" value={editData.quantity} onChange={handleChange} />

          <select name="size" value={editData.size} onChange={handleChange}>
            <option value="">Select Size</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>

          <input type="file" name="image" onChange={handleChange} />

          <Button variant="contained" sx={{ background: "black" }} onClick={handleUpdate}>
            Update
          </Button>

          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EditProductModal;
