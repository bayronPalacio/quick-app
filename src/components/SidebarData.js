import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillTablet />,
  },
  {
    title: 'Inventory',
    path: '/inventory',
    icon: <FaIcons.FaBoxes />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add',
        path: '/addProduct',
        icon: <FaIcons.FaPlus />,
        cName: 'sub-nav'
      },
      {
        title: 'Export',
        path: '/exportProducts',
        icon: <FaIcons.FaFileExport />,
        cName: 'sub-nav'
      },
      {
        title: 'Import',
        path: '/importProducts',
        icon: <FaIcons.FaFileImport />
      }
    ]
  },
  {
    title: 'Orders',
    path: '/orders',
    icon: <FaIcons.FaPrint />
  },
  {
    title: 'Invoices',
    path: '/invoices',
    icon: <FaIcons.FaFolder />
  },
  {
    title: 'Set Alarms',
    path: '/messages',
    icon: <FaIcons.FaBell />,
  },
  {
    title: 'Suppliers',
    path: '/suppliers',
    icon: <FaIcons.FaIndustry />
  }
];
