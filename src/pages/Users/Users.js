import React, { useState } from "react";
import "./usersmenu.css";
import ResetPasswordUser from "./ResetPasswordUser";
import MyProfile from "./MyProfile";
import BuysHistory from "./BuysHistory";

import { TabMenu } from "primereact/tabmenu";
export default function Users() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { label: "Mi perfil", icon: "pi pi-fw pi-user" },
    {
      label: "Cambiar contraseña",
      icon: "pi pi-fw pi-lock",
    },
    {
      label: "Mis pedidos",
      icon: "pi pi-fw pi-shopping-bag",
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
        {/* {activeIndex === 0 && <MyProfile />} */}
        {activeIndex === 1 && <ResetPasswordUser />}
        {activeIndex === 2 && <BuysHistory />}
      </div>
    </div>
  );
}
