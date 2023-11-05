"use client";

import PageLayout from "@/app/layout/pagelayout";
import Link from "next/link";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useState } from "react";
import { useFormik } from "formik";
import {registerValidate} from "@/lib/validate";

export default function Login() {
  const [show, setShow] = useState({ password: false, cpassword: false });
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validate: registerValidate,
    onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
  }

  return (
    <PageLayout>
      <section className="w-3/4 mx-auto flex flex-col gap-8">
        {/* Top */}
        <div>
          <h1 className="text-2xl text-gray-700">Register</h1>
          <p className="text-sm text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima,
            similique.
          </p>
        </div>

        {/* Form */}

        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
          {/* Input */}
          <div className="flex border bg-white p-2 rounded-lg">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="focus:outline-none rounded-md text-gray-700 w-11/12"
              {...formik.getFieldProps("username")}
            />
            <span className={`flex items-center pl-2 text-gray-400 hover:text-blue-500 hover:cursor-pointer`}>
              <HiOutlineUser size={20} />
            </span>
          </div>
          {formik.errors.username && formik.touched.username ? (
            <span className="text-xs text-red-600 -mt-2">
              {formik.errors.username}
            </span>
          ) : (
            <></>
          )}

          <div className="flex border bg-white p-2 rounded-lg">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              className="focus:outline-none rounded-md text-gray-700 w-11/12"
              {...formik.getFieldProps("email")}
            />
            <span className="flex items-center pl-2 text-gray-400 hover:text-blue-500 hover:cursor-pointer">
              <HiAtSymbol size={20} />
            </span>
          </div>
          {formik.errors.email && formik.touched.email ? (
            <span className="text-xs text-red-600 -mt-2">{formik.errors.email}</span>
          ) : (
            <></>
          )}

          <div className="flex border bg-white p-2 rounded-lg">
            <input
              type={`${show.password ? "text" : "password"}`}
              name="password"
              id="password"
              placeholder="Password"
              className="focus:outline-none rounded-md text-gray-700 w-11/12"
              {...formik.getFieldProps("password")}
            />
            {/* <span onClick={()=>setShow({...show, password:!show.password})} className="flex items-center pl-2 text-gray-400 hover:text-blue-500 hover:cursor-pointer"> */}
            {/* <HiFingerPrint size={20}/> */}
            {/* </span> */}
          </div>
          {formik.errors.password && formik.touched.password ? (
            <span className="text-xs text-red-600 -mt-2">
              {formik.errors.password}
            </span>
          ) : (
            <></>
          )}

          <div className="flex border bg-white p-2 rounded-lg">
            <input
              type={`${show.cpassword ? "text" : "password"}`}
              name="cpassword"
              id="cpassword"
              placeholder="Confirm Password"
              className="focus:outline-none rounded-md text-gray-700 w-11/12"
              {...formik.getFieldProps("cpassword")}
            />
            <span
              onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
              className="flex items-center pl-2 text-gray-400 hover:text-blue-500 hover:cursor-pointer"
            >
              <HiFingerPrint size={20} />
            </span>
          </div>
          {formik.errors.cpassword && formik.touched.cpassword ? (
            <span className="text-xs text-red-600 -mt-2">
              {formik.errors.cpassword}
            </span>
          ) : (
            <></>
          )}

          {/* Buttons */}
          <div className=" flex flex-col gap-3">
            <button
              type="submit"
              className="py-1 rounded-md text-white bg-blue-500"
            >
              Sign up
            </button>
          </div>
        </form>

        {/* Bottom */}

        <div className=" text-gray-700">
          Already have an account?
          <Link href={"/login"} className="text-blue-600">
            {" "}
            Sign In
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
