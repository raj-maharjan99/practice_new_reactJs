import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { Formik, Form, ErrorMessage } from "formik";

import * as Yup from "yup";

const ProductPage = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be positive"),
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Add New Product</h1>
      <Formik
        initialValues={{
          name: "",
          description: "",
          price: "",
          image: null,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          const formData = new FormData();
          formData.append("name", values.name);
          formData.append("description", values.description);
          formData.append("price", values.price);
          formData.append("image", values.image);

          fetch("/api/products", {
            // Replace with your actual API endpoint
            method: "POST",
            body: formData,
          })
            .then((response) => {
              if (response.ok) {
                console.log("Product created successfully!");
                setSubmitting(false);
              } else {
                console.error("Failed to create product:", response.status);
              }
            })
            .catch((error) => {
              console.error("Error creating product:", error);
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name:
              </label>
              <Input id="name" name="name" placeholder="Enter product name" />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description:
              </label>
              <Textarea
                id="description"
                name="description"
                placeholder="Enter product description"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price:
              </label>
              <Input
                type="number"
                id="price"
                name="price"
                placeholder="Enter product price"
              />
              <ErrorMessage
                name="price"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Image:
              </label>
              <Input type="file" id="image" name="image" accept="image/*" />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Add Product"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductPage;
