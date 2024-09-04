import React from "react";
import { useFormik } from "formik";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

// const validate = (values) => {
//   const errors = {};
//   if (!values.name) {
//     errors.name = "bos qala bilmez";
//   } else if (values.name.length > 10) {
//     errors.name = "10dan boyuk ola bilmez";
//   }

//   if (!values.age) {
//     errors.age = "Required";
//   } else if (!/^[0-9\b]+$/i.test(values.age)) {
//     errors.age = "reqem daxil edin";
//   }

//   // if (!values.email) {
//   //   errors.email = "Required";
//   // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//   //   errors.email = "Invalid email address";
//   // }

//   return errors;
// };

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

function AddProduct() {
  console.log(SignupSchema);

  // be called when the form is submitted
  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     age: "",
  //   },
  //   // validate,
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  // });
  // console.log(formik);

  return (
    <>
      {/* <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <br />
        {formik.errors.name ? (
          <div style={{ color: "red" }}>{formik.errors.name}</div>
        ) : null}

        <label htmlFor="age">age</label>
        <input
          id="age"
          name="age"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.age}
        />
        <br />
        {formik.errors.age ? (
          <div style={{ color: "red" }}>{formik.errors.age}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form> */}

      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="firstName" />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field name="lastName" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default AddProduct;
