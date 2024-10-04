import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
  SlSocialGithub,
} from "react-icons/sl";

const Footer = (): JSX.Element => {
  return (
    <footer className="footer default-size">
      <p className="footer__text">
        Lorem ipsum dolor sit amet consectetur adipiscing elit lectus fusce cras
        sodales aptent, ultricies faucibus ridiculus laoreet ullamcorper commodo
      </p>
      <section className="footer__social">
        <SlSocialGithub className="footer__social-icon" />
        <SlSocialInstagram className="footer__social-icon" />
        <SlSocialLinkedin className="footer__social-icon" />
        <SlSocialFacebook className="footer__social-icon" />
        <SlSocialTwitter className="footer__social-icon" />
      </section>
    </footer>
  );
};

export default Footer;
