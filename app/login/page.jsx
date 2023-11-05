"use client";

import PageLayout from "@/app/layout/pagelayout";
import Image from "next/image";
import Link from "next/link";
import GoogleIcon from "../../public/google.png";
import GithubIcon from "../../public/github.png";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useFormik } from "formik";
import loginValidate from "@/lib/validate";

export default function Login() {
  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: loginValidate,
    onSubmit: onSubmit,
  });

  // console.log(formik.errors)

  async function onSubmit(values) {
    console.log(values);
  }

  async function handleGoogleSignIn() {
    signIn("google", {
      callbackUrl: "http://localhost:3000",
    });
  }
  async function handleGithubSignIn() {
    signIn("github", {
      callbackUrl: "http://localhost:3000",
    });
  }

  return (
    <PageLayout>
      <section className="w-3/4 mx-auto flex flex-col gap-8">
        {/* Top */}
        <div>
          <h1 className="text-2xl text-gray-700">Explore</h1>
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
              name="email"
              id="email"
              placeholder="Email"
              className="focus:outline-none rounded-md text-gray-700 w-11/12"
              // onChange={formik.handleChange}
              // value={formik.values.email}
              //the above code can be replaced with
              {...formik.getFieldProps("email")}
            />
            <span className="flex items-center pl-2 text-gray-400 hover:text-blue-500 hover:cursor-pointer">
              <HiAtSymbol size={20} />
            </span>
          </div>

          {/* Feedback */}

          {formik.errors.email && formik.touched.email ? (
            <span className="text-xs text-red-600 -mt-2">
              {formik.errors.email}
            </span>
          ) : (
            <></>
          )}

          <div className="flex border bg-white p-2 rounded-lg">
            <input
              type={`${show ? "text" : "password"}`}
              name="password"
              id="password"
              placeholder="Password"
              className="focus:outline-none rounded-md text-gray-700 w-11/12"
              // onChange={formik.handleChange}
              // value={formik.values.password}
              {...formik.getFieldProps("password")}
            />
            <span
              onClick={() => setShow(!show)}
              className="flex items-center pl-2 text-gray-400 hover:text-blue-500 hover:cursor-pointer"
            >
              <HiFingerPrint size={20} />
            </span>
          </div>

          {/* Feedback */}

          {formik.errors.password && formik.touched.password ? (
            <span className="text-xs text-red-600 -mt-2">
              {formik.errors.password}
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
              Login
            </button>

            <button
              onClick={handleGoogleSignIn}
              className=" justify-center items-center gap-2 flex border py-1 rounded-md text-gray-700"
              type="submit"
            >
              Sign In with Google
              <Image src={GoogleIcon} alt="" height={20} width={20} />
            </button>

            <button
              onClick={handleGithubSignIn}
              className=" justify-center items-center gap-2 flex border py-1 rounded-md text-gray-700"
              type="submit"
            >
              Sign In with Github
              <Image src={GithubIcon} alt="" height={20} width={20} />
            </button>
          </div>
        </form>

        {/* Bottom */}

        <div className=" text-gray-700">
          Don't have an account yet?
          <Link href={"/register"} className="text-blue-600">
            {" "}
            Sign Up
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
