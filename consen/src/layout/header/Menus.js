import Link from "next/link";

export const DaskTopMenusMenus = () => {
  return (
    <ul className="nav_scroll">
      {" "}
      <li>
        <a href="#">
        Solution{" "}
          <span>
            <i className="fas fa-angle-down" />
          </span>
        </a>
        <ul className="sub-menu">
          {" "}
          <li>
            <Link legacyBehavior href="/">
             Global Business Management and Strategy
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="index-2">
            Human Resource Management and Strategy
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="/index-3">
              <a>ISO International Quality Management Certification</a>
            </Link>
          </li>{" "}
          {/* <li>
            <Link legacyBehavior href="/landing-1">
              <a>360* Software Solutions</a>
            </Link>
          </li> */}
          <li>
            <Link legacyBehavior href="/landing-1">
              <a>Global Business Network Program</a>
            </Link>
          </li>
        </ul>
      </li>{" "}
      <li>
        <a href="#">
          Courses{" "}
          <span>
            <i className="fas fa-angle-down" />
          </span>
        </a>
        <ul className="sub-menu">
          {" "}
          <li>
            <Link legacyBehavior href="portfolio">
             The Masterminds International Institution 
            </Link>
          </li>{" "}
          {/* <li>
            <Link legacyBehavior href="service">
              Our Service
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="pricing">
              Pricing
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="team">
              Our Team
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="portfolio">
              Portfolio
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="portfolio-details">
              Portfolio Details
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="404">
              404
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="contact">
              Contact Us
            </Link>
          </li> */}
        </ul>
      </li>{" "}
      <li>
        <a href="#">
        Licensing{" "}
          <span>
            <i className="fas fa-angle-down" />
          </span>
        </a>
        <ul className="sub-menu">
          {" "}
          {/* <li>
            <Link legacyBehavior href="service">
              Our Service
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="service-details">
              Service Details
            </Link>
          </li> */}
        </ul>
      </li>{" "}
      {/* <li>
        <Link legacyBehavior href="portfolio">
          Portfolio
        </Link>
      </li>{" "} */}
      <li>
        <a href="#">
          Resources{" "}
          <span>
            <i className="fas fa-angle-down" />
          </span>
        </a>
        {/* <ul className="sub-menu">
          {" "}
          <li>
            <Link legacyBehavior href="blog-grid">
              Image Gallery
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="blog-list">
              Events
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="blog-2column">
              Journals and Publication 
            </Link>
          </li>{" "}
          <li>
            <Link legacyBehavior href="blog-details">
              Media News
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="blog-details">
              Professional's Achievements 
            </Link>
          </li>
        </ul> */}
      </li>{" "}
      <li>
        <Link legacyBehavior href="contact">
          Contact
        </Link>
      </li>
    </ul>
  );
};
