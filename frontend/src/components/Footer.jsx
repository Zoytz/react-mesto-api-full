function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer page__footer">
      <p className="footer__copyright">
        {`© ${year} Mesto Russia`}
      </p>
    </footer>
  );
}

export default Footer;