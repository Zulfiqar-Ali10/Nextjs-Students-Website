

export default function Footer() {
  return (
  <>
  <footer>
  <div className="container">
    <main className="footer-main">
      <div className="footer-left-side">
        <img src="imgs/Frame 237646.png" alt="" />
        <p className="addres-p">
          {" "}
          <i className="fa-solid fa-location-dot" /> Address: Lorem ipsum dolor
          sit amet, consectetur adipiscing elit,
        </p>
        <p>
          <i className="fa-solid fa-phone" /> Tel :+9229341037
        </p>
        <p>
          <i className="fa-solid fa-clock" /> Response hours: 8 to 20
        </p>
        <p>
          <i className="fa-solid fa-envelope"> </i>Email: info@onlearn.com
        </p>
      </div>
      <div className="footer-center-side">
        <div className="footer-1">
          <h4>Categories</h4>
          <ul>
            <li>
              <a href="#">Counseling</a>
            </li>
            <li>
              <a href="#">Health and fitness</a>
            </li>
            <li>
              <a href="#">Individual development</a>
            </li>
            <li>
              <a href="#">more</a>
            </li>
          </ul>
        </div>
        <div className="footer-2">
          <h4>Links</h4>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-right-side">
        <h5>Stay up to date with the latest courses</h5>
        <div className="footer-btn">
          <input type="email" placeholder="Email" />
          <button>Send</button>
        </div>
      </div>
    </main>
  </div>
</footer>

  </> 
)
}
