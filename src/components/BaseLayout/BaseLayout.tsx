import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Sidebar, { Menus } from "../Sidebar/Sidebar";

interface BaseLayoutProps {
  menu: Menus[];
  sidebarLogo: React.ReactNode;
  headerData: any;
  children?: React.ReactNode;
}

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
        Icon={<img src="/Image/footer.jpg" alt="footer" />}
        Copyright="Copyright © 2022 PT Pina Aplikasi Bersama"
      />
    </>
  );
};

export default BaseLayout;
