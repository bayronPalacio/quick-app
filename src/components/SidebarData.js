import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiFillTablet />,
  },
  {
    title: "Inventory",
    // path: '/inventory',
    icon: <FaIcons.FaBoxes />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "List Products",
        path: "/inventory",
        icon: <FaIcons.FaBoxOpen />,
        cName: "sub-nav",
      },
      {
        title: "Add",
        path: "/addProduct",
        icon: <FaIcons.FaPlus />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Orders",
    // path: '/orders',
    icon: <FaIcons.FaPrint />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "List Orders",
        path: "/orders",
        icon: <FaIcons.FaBoxOpen />,
        cName: "sub-nav",
      },
      {
        title: "Add",
        path: "/addOrder",
        icon: <FaIcons.FaPlus />,
        cName: "sub-nav",
      },
    ],
  },
  {
    title: "Invoices",
    path: "/invoices",
    icon: <FaIcons.FaFolder />,
  },
  {
    title: "Customers",
    path: "/customers",
    icon: <FaIcons.FaIndustry />,
  },
  {
    title: "Sign out",
    path: "/",
    icon: <FaIcons.FaPowerOff />,
  },
];
