import {
  //PhBriefcase,
  PhCodeBlock,
  PhEnvelope,
  // PhNewspaperClipping,
  PhNotebook,
  PhUser,
  // PhShoppingBag
} from "@phosphor-icons/vue";

export const sidebarsData = [
  {
    id: 1,
    name: "About Me",
    url: "/",
    icon: PhUser,
  },
  {
    id: 2,
    name: "Portfolio",
    url: "/portfolio",
    icon: PhCodeBlock,
    numbers: 16,
  },
  // {
  //   id: 3,
  //   name: "Services & Pricing",
  //   url: "/price",
  //   icon: PhBriefcase,
  // },
  {
    id: 4,
    name: "Resume",
    url: "/resume",
    icon: PhNotebook,
  },
  // {
  //   id: 5,
  //   name: "Products",
  //   url: "/products",
  //   icon: PhShoppingBag,
  // },
  // {
  //   id: 6,
  //   name: "Blog",
  //   url: "/blog",
  //   icon: PhNewspaperClipping,
  // },
  {
    id:7,
    name: "Contact",
    url: "/contact",
    icon: PhEnvelope,
  },
];
