interface FooterProps {
  Icon: React.ReactNode;
  Copyright: String;
}

const Footer = ({ Icon, Copyright }: FooterProps) => {
  return (
    <div className="pina-footer">
      <div className="pina-left-footer">{Icon}</div>
      <div className="pina-right-footer">{Copyright}</div>
    </div>
  );
};

export default Footer;
