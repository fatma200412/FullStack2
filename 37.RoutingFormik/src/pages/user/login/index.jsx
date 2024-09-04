import React, { useContext } from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { UserAuth } from "../../../context/UserAuth";
import axios from "axios";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Too Short!")
    .max(9, "Too Long!")
    .required("Required"),
  password: Yup.string().required("Required"),
});

function Login() {
  const [a, b, isLoginUser, setIsLoginUser] = useContext(UserAuth);

  return (
    <>
      <h1>Login</h1>
      <Formik
        initialValues={{ name: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          console.log(values.name);

          axios("https://669b5625276e45187d352b89.mockapi.io/users").then(
            (res) => {
              let data = res.data;
              //   console.log(data);
              let check = data.find(
                (elem) =>
                  elem.name == values.name && elem.password == values.password
              );

              if (check) {
                setIsLoginUser(check);
                console.log(isLoginUser);
              } else {
                console.log("istifadeci tapilmasi");
              }

              console.log(check);
            }
          );
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field name="name" placeholder="Name" />
            {/* {errors.name && touched.name ? (
 -            <div>{errors.name}</div>
 -          ) : null} */}
            <ErrorMessage name="name" />
            <br />
            <label htmlFor="password">Password</label>

            <Field name="password" placeholder="Password" />
            <ErrorMessage name="password" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Login;
