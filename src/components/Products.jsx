import { Add, DeleteForever, Edit } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Colors } from "../styles/theme";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

// mock data
const products = [
  {
    id: 1341324,
    name: "Chunky blanket",
    price: 10000,
    quantity: 1,
    sku: 12312312,
    description: "white blanket",
  },
];

const validationSchema = Yup.object().shape({
  name: Yup.string().required("name is required"),
  price: Yup.number()
    .required("price is required")
    .positive("price must be positive"),
  quantity: Yup.number().required("quantity is required"),
  sku: Yup.string().required("sku is required"),
  description: Yup.string().required("description is required"),
});
export default function Products() {
  const [open, setOpen] = useState(false);
  const [initialValues, setInitialValues] = useState({
    id: -1,
    name: "",
    price: "",
    quantity: "",
    sku: "",
    description: "",
  });

  const handleAddProduct = () => {
    setInitialValues(
      { id: -1,
      name: "",
      price: "",
      quantity: "",
      sku: "",
      description: "",});
    setOpen(true);
  };

  const handleEditProduct = (product) => {
    setInitialValues(product);
    setOpen(true);
  };

  const handleDeleteProduct = (product) => {
    console.log("delete", product);
  };

  const handleSubmit = (values) => {
    values.id = Math.random() * 1000;
    products.push(values);
    setOpen(false);
  };

  return (
    <>
      <Typography sx={{ mb: 1 }} variant="h4"></Typography>
      <Button startIcon={<Add />} variant="contined" onClick={handleAddProduct}>
        Add Product
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Qty</TableCell>
              <TableCell>SKU</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.name}</TableCell>
                <TableCell>{p.price}</TableCell>
                <TableCell>{p.qty}</TableCell>
                <TableCell>{p.sku}</TableCell>
                <TableCell>{p.description}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEditProduct(p)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteProduct(p)}>
                    <DeleteForever sx={{ color: Colors.danger }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} fullWidth maxWidth="lg">
        <DialogTitle>{"Add Product"}</DialogTitle>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ dirty, isValid, getFieldProps }) => (
            <Form>
              <DialogContent>
                <Grid2 container spacing={3}>
                  <Grid2 xs={12}>
                    <Field
                      as={TextField}
                      name="name"
                      label="Name"
                      required
                      fullWidth
                    />
                    <ErrorMessage name="name">
                      {(message) => (
                        <Typography color={"red"}>{message}</Typography>
                      )}
                    </ErrorMessage>
                  </Grid2>
                  <Grid2 xs={12}>
                    <Field
                      as={TextField}
                      name="price"
                      label="Price"
                      required
                      fullWidth
                    />
                    <ErrorMessage name="price">
                      {(message) => (
                        <Typography color={"red"}>{message}</Typography>
                      )}
                    </ErrorMessage>
                  </Grid2>
                  <Grid2 xs={12}>
                    <Field
                      as={TextField}
                      name="quantity"
                      label="Quantity"
                      required
                      fullWidth
                    />
                    <ErrorMessage name="quantity">
                      {(message) => (
                        <Typography color={"red"}>{message}</Typography>
                      )}
                    </ErrorMessage>
                  </Grid2>
                  <Grid2 xs={12}>
                    <Field
                      as={TextField}
                      name="sku"
                      label="SKU"
                      required
                      fullWidth
                    />
                    <ErrorMessage name="sku">
                      {(message) => (
                        <Typography color={"red"}>{message}</Typography>
                      )}
                    </ErrorMessage>
                  </Grid2>
                  <Grid2 xs={12}>
                    <Field
                      as={TextField}
                      name="description"
                      label="Description"
                      required
                      fullWidth
                    />
                    <ErrorMessage name="description">
                      {(message) => (
                        <Typography color={"red"}>{message}</Typography>
                      )}
                    </ErrorMessage>
                  </Grid2>
                </Grid2>
              </DialogContent>
              <DialogActions>
                {getFieldProps("id").value !== -1 ? (
                  <Button
                    disabled={!dirty || !isValid}
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    {" "}
                    Save Edit{" "}
                  </Button>
                ) : (
                  <Button
                    disabled={!dirty || !isValid}
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    {" "}
                    Save{" "}
                  </Button>
                )}
                <Button onClick={() => setOpen(false)} autoFocus>
                  Cancel
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </>
  );
}
