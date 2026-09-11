import {
  FaBullseye,
  FaEye,
  FaHandshake,
  FaLock,
  FaPeopleGroup,
  FaShieldHalved,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const values = [
  {
    icon: FaShieldHalved,
    title: "Security",
    description:
      "We protect customer information and financial activity through secure authentication and responsible banking technology.",
  },
  {
    icon: FaHandshake,
    title: "Trust",
    description:
      "We aim to build lasting relationships by providing clear, dependable and transparent financial services.",
  },
  {
    icon: FaPeopleGroup,
    title: "Community",
    description:
      "We create services that support individuals, families and community-based financial groups.",
  },
  {
    icon: FaLock,
    title: "Privacy",
    description:
      "We treat customer information with care and only use it according to our policies and applicable requirements.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="eyebrow">ABOUT MBHOMBI</p>

          <h1>Banking built around people and communities</h1>

          <p>
            Mbhombi Financial Services is a digital financial platform
            designed to help customers manage personal and community banking
            activities from one secure place.
          </p>

          <div className="about-actions">
            <Link className="about-primary-button" to="/bank/create">
              Create a bank account
            </Link>

            <Link className="about-secondary-button" to="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <section className="about-introduction">
        <div className="about-section-heading">
          <p className="eyebrow">WHO WE ARE</p>
          <h2>A modern approach to financial services</h2>
        </div>

        <div className="about-introduction-grid">
          <div>
            <p>
              We believe that financial services should be secure, simple and
              understandable. Our platform brings together customer profiles,
              personal accounts, community accounts, payments and financial
              activity in one accessible experience.
            </p>

            <p>
              Mbhombi Financial Services is built to support customers who want
              greater visibility and control over their finances. We also
              recognise the importance of community-based saving and shared
              financial responsibility.
            </p>
          </div>

          <aside className="about-highlight">
            <span className="highlight-number">01</span>
            <h3>One secure platform</h3>
            <p>
              Customers can securely access their profiles and banking
              services using authenticated digital experiences.
            </p>
          </aside>
        </div>
      </section>

      <section className="mission-vision-section">
        <article className="mission-card">
          <div className="about-icon">
           <FaEye aria-hidden="true" />
          </div>

          <div>
            <p className="eyebrow">OUR VISION</p>
            <h2>Accessible financial confidence</h2>
            <p>
              Our vision is to make reliable financial services accessible,
              understandable and useful to customers and communities.
            </p>
          </div>
        </article>

        <article className="mission-card">
          <div className="about-icon">
            <FaBullseye aria-hidden="true" />
          </div>

          <div>
            <p className="eyebrow">OUR MISSION</p>
            <h2>Secure and practical banking</h2>
            <p>
              Our mission is to provide secure digital banking tools that help
              individuals and communities manage money responsibly and build
              financial confidence.
            </p>
          </div>
        </article>
      </section>

      <section className="values-section">
        <div className="about-section-heading centered">
          <p className="eyebrow">WHAT GUIDES US</p>
          <h2>Our values</h2>
          <p>
            These principles guide how we design our platform and serve our
            customers.
          </p>
        </div>

        <div className="values-grid">
          {values.map(({ icon: Icon, title, description }) => (
            <article className="value-card" key={title}>
              <div className="value-icon">
                <Icon aria-hidden="true" />
              </div>

              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-security">
        <div>
          <p className="eyebrow light">SECURE ACCESS</p>
          <h2>Your account security matters</h2>

          <p>
            Protected banking areas require authentication. Customers must sign
            in before accessing bank accounts, messages and profile
            information.
          </p>

          <p>
            Never disclose your password, account PIN or one-time PIN to another
            person.
          </p>
        </div>

        <div className="security-symbol">
          <FaLock aria-hidden="true" />
        </div>
      </section>

      <section className="about-call-to-action">
        <div>
          <p className="eyebrow">GET STARTED</p>
          <h2>Take the next step</h2>
          <p>
            Create a bank account and begin managing your financial services
            through your authenticated dashboard.
          </p>
        </div>

        <Link className="about-primary-button" to="/bank/create">
          Create an account
        </Link>
      </section>
    </div>
  );
}