import Link from "next/link";

export default function Header() {
  return (
    <>

      <header>
        <div className="container">
          <main className="header-main">
            <div className="header-left">
              <img src="/imgs/Frame 237646.png" alt="logo" />
            </div>
            <div className="header-center">
              <ul>
                <li>
                  <Link className="first-a" href="/">Home</Link>
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
              <button className="login-btn">LOG IN</button>
              <button className="signup-btn">SIGN UP</button>
            </div>
          </main>
        </div>
      </header>

    </>
  )
}