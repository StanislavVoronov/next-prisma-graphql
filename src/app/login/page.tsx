import { RocketLaunchIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import LoginForm from "./loginForm";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-between items-center px-6 py-12 lg:px-8">
      <div className="max-w-md w-full relative flex flex-1 flex-col items-center justify-center">
        <Link href={"/"} className="mb-8">
          <RocketLaunchIcon width={24} />
        </Link>
        <h1 className="sr-only">Log in to your account</h1>
        <LoginForm />
      </div>
      <div className="pt-8">
        <p className="text-center">
          <Link href="/contact" className="text-sm hover:underline">
            Забыли пароль?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
