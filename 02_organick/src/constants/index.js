import {
  Icon_10,
  Icon_11,
  Icon_12,
  Icon_3,
  Icon_4,
  Icon_5,
  Icon_6,
  Icon_7,
  Icon_8,
  Icon_9,
  Image_1,
  Image_2,
  Item_1,
  Item_2,
  Item_3,
  Item_4,
  Item_5,
  Item_6,
  Person_1,
  Person_2,
  Person_3,
  Product_1,
  Product_10,
  Product_11,
  Product_12,
  Product_13,
  Product_14,
  Product_15,
  Product_16,
  Product_2,
  Product_3,
  Product_4,
  Product_5,
  Product_6,
  Product_7,
  Product_8,
  Product_9,
  Team_1,
  Team_2,
  Team_3,
  Team_4,
  Team_5,
  Team_6,
} from "../assets";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

export const navItems = [
  {
    path: "/",
    title: "home",
  },
  {
    path: "/about",
    title: "about",
  },
  {
    title: "pages",
    subtitle: [
      {
        path: "/service",
        title: "service",
      },
      {
        path: "/portfolio",
        title: "portfolio",
      },
      {
        path: "/team",
        title: "team",
      },
      {
        path: "/blog",
        title: "blog",
      },
    ],
  },
  {
    path: "/shop",
    title: "shop",
  },
  {
    path: "/contact",
    title: "contact",
  },
];

export const benefits = [
  {
    img: Image_1,
    type: "Natural!!",
    title: "Get Garden Fresh Fruits",
  },
  {
    img: Image_2,
    type: "Offer!!",
    title: "Get 10% off on Vegetables",
  },
];

export const feedback = [
  {
    profileImg: Person_1,
    profileName: "sara taylor",
    position: "Manager",
    content:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    ratings: 4,
  },
  {
    profileImg: Person_2,
    profileName: "Taylor swift",
    position: "senior manager",
    content:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    ratings: 3.5,
  },
  {
    profileImg: Person_3,
    profileName: "Harris jayaraj",
    position: "associate",
    content:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
    ratings: 5,
  },
];

export const stats = [
  {
    value: "100%",
    text: "Organic",
  },
  {
    value: "285",
    text: "Active Product",
  },
  {
    value: "350+",
    text: "Organic Orchads",
  },
  {
    value: "25+",
    text: "Years of Farming",
  },
];

export const organicItems = [
  {
    imgUrl: Item_1,
    text: "Organic Juice",
  },
  {
    imgUrl: Item_2,
    text: "Organic Food",
  },
  {
    imgUrl: Item_3,
    text: "Nuts Cookies",
  },
];

export const contactDetails = [
  {
    title: "Email",
    link: "needhelp@Organia.com",
  },
  {
    title: "Phone",
    link: "666-888-8888",
  },
  {
    title: "Address",
    link: "88 road, borklyn street, US",
  },
];

export const footerLinks = [
  {
    name: "404 Not Found",
    path: "/error",
  },
  {
    name: "Licenses",
    path: "#",
  },
  {
    name: "Changelog",
    path: "#",
  },
  {
    name: "Password Protected",
    path: "#",
  },
];

export const socialLinks = [
  {
    icon: FaInstagram,
    link: "https://www.instagram.com",
  },
  {
    icon: FaFacebook,
    link: "https://www.facebook.com",
  },
  {
    icon: FaTwitter,
    link: "https://x.com/i/flow/login",
  },
  {
    icon: FaPinterest,
    link: "https://in.pinterest.com/login/",
  },
];

export const benefitItems = [
  {
    icon: Icon_3,
    title: "Return Policy",
    content: "Simply dummy text of the printing typesetting industry.",
  },
  {
    icon: Icon_4,
    title: "100% Fresh",
    content: "Simply dummy text of the printing typesetting industry.",
  },
  {
    icon: Icon_5,
    title: "Support 24/7",
    content: "Simply dummy text of the printing typesetting industry.",
  },
  {
    icon: Icon_6,
    title: "Secured Payment",
    content: "Simply dummy text of the printing typesetting industry.",
  },
];

export const experts = [
  {
    profileImg: Team_1,
    profileName: "Giovani Bacardo",
    position: "Farmer",
    socialLinks: [
      {
        link: "https://www.instagram.com",
        icon: FaInstagram,
      },
      {
        link: "https://www.facebook.com",
        icon: FaFacebook,
      },
      {
        link: "https://x.com/i/flow/login",
        icon: FaTwitter,
      },
    ],
  },
  {
    profileImg: Team_2,
    profileName: "Marianne Loreno",
    position: "designer",
    socialLinks: [
      {
        link: "https://www.instagram.com",
        icon: FaInstagram,
      },
      {
        link: "https://www.facebook.com",
        icon: FaFacebook,
      },
      {
        link: "https://x.com/i/flow/login",
        icon: FaTwitter,
      },
    ],
  },
  {
    profileImg: Team_3,
    profileName: "Riga Pelore",
    position: "farmer",
    socialLinks: [
      {
        link: "https://www.instagram.com",
        icon: FaInstagram,
      },
      {
        link: "https://www.facebook.com",
        icon: FaFacebook,
      },
      {
        link: "https://x.com/i/flow/login",
        icon: FaTwitter,
      },
    ],
  },
  {
    profileImg: Team_4,
    profileName: "Keira Knightley",
    position: "Designer",
    socialLinks: [
      {
        link: "https://www.instagram.com",
        icon: FaInstagram,
      },
      {
        link: "https://www.facebook.com",
        icon: FaFacebook,
      },
      {
        link: "https://x.com/i/flow/login",
        icon: FaTwitter,
      },
    ],
  },
  {
    profileImg: Team_5,
    profileName: "Scott Lawrence",
    position: "Farmer",
    socialLinks: [
      {
        link: "https://www.instagram.com",
        icon: FaInstagram,
      },
      {
        link: "https://www.facebook.com",
        icon: FaFacebook,
      },
      {
        link: "https://x.com/i/flow/login",
        icon: FaTwitter,
      },
    ],
  },
  {
    profileImg: Team_6,
    profileName: "Karen Allen",
    position: "Designer",
    socialLinks: [
      {
        link: "https://www.instagram.com",
        icon: FaInstagram,
      },
      {
        link: "https://www.facebook.com",
        icon: FaFacebook,
      },
      {
        link: "https://x.com/i/flow/login",
        icon: FaTwitter,
      },
    ],
  },
];

export const groceries = [
  {
    imgUrl: Item_4,
    text: "spicy",
  },
  {
    imgUrl: Item_5,
    text: "nuts and feeds",
  },
  {
    imgUrl: Item_5,
    text: "fruits",
  },
  {
    imgUrl: Item_6,
    text: "vegetable",
  },
];

export const agricultureItems = [
  {
    icon: Icon_7,
    title: "Dairy Products",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis",
  },
  {
    icon: Icon_8,
    title: "Store Services",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis",
  },
  {
    icon: Icon_9,
    title: "Delivery Services",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis",
  },
  {
    icon: Icon_10,
    title: "Agricultural Services",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis",
  },
  {
    icon: Icon_11,
    title: "Organic Products",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis",
  },
  {
    icon: Icon_12,
    title: "Fresh Vegetables",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis",
  },
];
