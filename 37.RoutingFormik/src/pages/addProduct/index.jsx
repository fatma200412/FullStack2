import React from "react";
import { Formik, Field, Form } from "formik";

const validate = (value) => {
  let errorMessage;
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    errorMessage = "Invalid email address";
  }
  return errorMessage;
};

function AddProducts() {
  return (
    <>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      >
        {({ errors, touched }) => (
          <Form>
            <Field validate={validate} name="name" type="name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            {/* <Field validate={validate} name="username" /> */}
            {/* {errors.username && touched.username ? (
           <div>{errors.username}</div>
         ) : null} */}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default AddProducts;
