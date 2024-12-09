"use client";

import { useAuth } from "@/app/AuthContext";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Header() {
  const { user, logOut, signIn } = useAuth();

  const handleSignIn = async () => {
    try {
      await signIn();
      toast.success("You are successfully logged in!");
    } catch (error) {
      toast.error("Failed to log in. Please try again.");
    }
  };

  const handleLogOut = async () => {
    try {
      await logOut();
      toast.info("You are successfully logged out!");
    } catch (error) {
      toast.error("Failed to log out. Please try again.");
    }
  };

  return (
    <header>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="container">
        <main className="header-main">
          <div className="header-left">
            <img src="/imgs/Frame 237646.png" alt="logo" />
          </div>
          <div className="header-center">
            <ul>
              <li>
                <Link className="first-a" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/career">Careers</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/about">About us</Link>
              </li>
            </ul>
          </div>
          <div className="header-right">
            {user ? (
              <button className="login-btn" onClick={handleLogOut}>
                Sign out
              </button>
            ) : (
              <button className="signup-btn" onClick={handleSignIn}>
                Login With Google
              </button>
            )}
          </div>
        </main>
      </div>
    </header>
  );
}
