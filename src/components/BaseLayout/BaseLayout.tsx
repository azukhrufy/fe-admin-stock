import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { FooterIcon } from "../Icons/FooterIcons";
import Sidebar, { Menus } from "../Sidebar/Sidebar";

interface BaseLayoutProps {
  menu: Menus[];
  sidebarLogo: React.ReactNode;
  headerData: any;
  children?: React.ReactNode;
}

const FooterIcons = FooterIcon.icon;

const BaseLayout = ({ menu, sidebarLogo, headerData, children }: BaseLayoutProps) => {
  return (
    <>
      <Header
        portfolio={headerData.portfolio}
        buyingPwr={headerData.buyingPwr}
        image={headerData.image}
      />
      <Sidebar logo={sidebarLogo} menus={menu} />
      <div className="content">{children}</div>
      <Footer
        Icon={<img src="/Image/footer.jpg" />}
        Copyright="Copyright © 2022 PT Pina Aplikasi Bersama"
      />
    </>
  );
};

export default BaseLayout;
