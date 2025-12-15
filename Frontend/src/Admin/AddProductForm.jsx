import { Box, Button, Typography } from "@mui/material";

const AddProductForm = ({
  data,
  setData,
  fileRef,
  onClose,
  refresh,
}) => {

  const handleChangeUpload = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setData((prev) => ({
        ...prev,
        image: files && files[0] ? files[0] : null,
      }));
    } else {
      setData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleUpload = async () => {
    const form = new FormData();

    form.append("name", data.name);
    form.append("price", data.price);
    form.append("color", data.color);
    form.append("size", data.size);
    form.append("quantity", data.quantity);

    if (data.image) {
      form.append("file", data.image);
    }

    await refresh(); // same behavior as before
    onClose();
  };

  return (
    <Box
      sx={{
        mt: 4,
        p: 3,
        borderRadius: "12px",
        bgcolor: "#fafafa",
        border: "1px solid #ddd",
        maxWidth: 500,
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Add New Product
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <input name="name" placeholder="Product Name" value={data.name} onChange={handleChangeUpload} />
        <input name="price" placeholder="Price" value={data.price} onChange={handleChangeUpload} />
        <input name="color" placeholder="Color" value={data.color} onChange={handleChangeUpload} />

        <select name="size" value={data.size} onChange={handleChangeUpload}>
          <option value="">Select Size</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>

        <input name="quantity" placeholder="Quantity" value={data.quantity} onChange={handleChangeUpload} />

        <input type="file" name="image" ref={fileRef} onChange={handleChangeUpload} />

        <Button variant="contained" sx={{ background: "black" }} onClick={handleUpload}>
          Submit Product
        </Button>

        <Button variant="outlined" onClick={onClose}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default AddProductForm;
