import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "O nas",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Kontakt",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Oferujemy",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Pomoc prawna",
        path: "/additional",
        newTab: false,
      },
      {
        id: 42,
        title: "Szkolenia",
        path: "/courses",
        newTab: false,
      },
      {
        id: 43,
        title: "Wskazówki",
        path: "/tips",
        newTab: false,
      },
    ],
  },
];
export default menuData;
