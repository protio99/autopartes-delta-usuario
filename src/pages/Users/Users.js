import React, { useState } from "react";
import "./usersmenu.css";
import ResetPasswordUser from "./ResetPasswordUser";
import MyProfile from "./MyProfile";
import BuysHistory from "./BuysHistory";

import { TabMenu } from "primereact/tabmenu";
export default function Users() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { label: "Mi perfil", icon: "pi pi-fw pi-home" },
    // {
    //   label: "Cambiar contraseña",
    //   icon: "pi pi-fw pi-calendar",
    // },
    {
      label: "Historial de compras",
      icon: "pi pi-fw pi-pencil",
    },
  ];

  return (
    <div>
      <TabMenu
        model={items}
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
      />
      <div className="dc-checkout__views__content">
        {activeIndex === 0 && <MyProfile />}
        {/* {activeIndex === 0 && <ResetPasswordUser />} */}
        {activeIndex === 1 && <BuysHistory />}
      </div>
    </div>
  );
}
