import React from "react";
import { MenuIcon } from "../Icons/MenuIcons";

export interface Menus {
  id: string | number;
  name: string;
  icon?: React.ReactNode | string | JSX.Element;
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  menus?: Menus[];
  logo?: React.ReactNode | string;
}

const Sidebar = ({ menus, logo }: SidebarProps) => {
  return (
    <div className="pina-sidebar">
      <div className="pina-sidebar-logo">{logo}</div>
      <div className="pina-sidebar-menus">
        {menus &&
          menus.map((m, id) => (
            <div key={id} className="pina-sidebar-menu">
              {m.icon}
              <p>{m.name}</p>
            </div>
          ))}
      </div>
      <div className="pina-sidebar-logout">
        {MenuIcon.logout}
      </div>
    </div>
  );
};

export default Sidebar;
