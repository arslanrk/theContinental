"use client";

import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { SignUpSchemaValidation } from "@/schema/singupSchema";
import Logo from "../../public/assets/logofinal.png";

const page = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    gender: "",
  };
  const handleSubmit = () => {};

  return (
    <div className="min-h-screen flex items-center justify-end w-full loginWrapper px-10 pt-5">
      <div className="flex flex-col justify-center gap-3 items-center px-2 py-2 blurFilter lg:w-[35%] w-full relative z-[2] rounded-lg">
        <Image src={Logo} width={150} height={75} alt="logo" />
        <p className="text-cutomGold font-heading font-bold text-lg">
          Welcome to The Continental
        </p>
        <Formik
          validationSchema={SignUpSchemaValidation}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-6 w-full px-5 py-3">
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-cutomGold font-body font-bold"
              >
                Name
              </label>
              <Field
                type="email"
                id="name"
                name="name"
                className="w-full px-4 py-2 mt-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gold-500"
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" className="text-red-400 text-sm" />
            </div>
            <div>
              <label
                htmlFor="Email"
                className="block text-sm text-cutomGold font-body font-bold"
              >
                Email Address
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 mt-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gold-500"
                placeholder="Enter your Email"
              />
              <ErrorMessage name="email" className="text-red-400 text-sm" />
            </div>
            <div>
              <label
                htmlFor="Email"
                className="block text-sm text-cutomGold font-body font-bold"
              >
                Gender
              </label>
              <Field
                as="select"
                name="gender"
                className="w-full px-4 py-2 mt-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-gold-500"
              >
                <option>Select a value</option>
                <option value={"male"}>Male</option>
                <option value={"female"}>Female</option>
              </Field>
              <ErrorMessage name="gender" className="text-red-400 text-sm" />
            </div>
            <div className="flex justify-between items-center mt-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-gold-500 bg-gray-800 border-gray-600"
                />
                <span className="ml-2 text-sm text-cutomGold font-body font-bold">
                  Remember Me
                </span>
              </label>
              <a
                href="#"
                className="text-sm hover:text-gold-500 text-cutomGold font-body font-bold"
              >
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-gold-500 text-black py-2 px-4 rounded hover:bg-gold-400 transition-colors"
            >
              Sign In
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default page;
