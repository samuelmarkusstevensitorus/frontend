import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import { Link } from "react-router-dom";
import Button from "../components/buttons/Button";
import LoginInput from "../components/input/LoginInput";

const Login = () => {
  return (
    <>
      <MainLayout showHeader={false} showFooter1={true}>
        <section className="section-register-admin  h-screen">
          <div className="login_box flex h-[400px] w-[60%]    absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white overflow-hidden">
            <div className="right p-[10px] w-[80%]">
              <img
                src="./character/image-register.png"
                alt=""
                className="w-[100%]"
              />
            </div>
            <div className="left w-[700px]    ">
              <div className="border-inherit border-2 py-10 px-10 mb-5">
                <form
                  action=""
                  className="contact flex flex-col justify-center h-full mt-[-0px]"
                >
                  <img
                    src="./TokoKu.png"
                    alt=""
                    className="w-[85px] mb-8 mx-[auto] mt-[-5px] text-sky-500 "
                  />
                  <LoginInput
                    type={"text"}
                    placeholder={"Username or email"}
                    name={"username"}
                    id={"username"}
                  />
                  <LoginInput
                    type={"password"}
                    placeholder={"password"}
                    name={"password"}
                    id={"password"}
                  />
                  <button />
                  <Button type={"submit"} nama={"Daftar"} />
                </form>
              </div>
              <div className="border-inherit border-2 p-5">
                <h3 className="text-center ">
                  Sudah punya akun?{" "}
                  <Link to={"/login"} className="text-blue-600">
                    Register
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
};

export default Login;
