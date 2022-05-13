import { GrLocation } from 'react-icons/gr';
import {BiPhoneCall } from 'react-icons/bi';
import {AiOutlineMail } from 'react-icons/ai';

const FooterLinksData = [
    {
        id: 1,
        title: "My Account",
        category: "Account",
        url: "/account"
    },
    {
        id: 2,
        title: "Wishlists",
        category: "Account",
        url: "/wishlists"
    },
    {
        id: 3,
        title: "Orders",
        category: "Accountt",
        url: "/orders"
    },
    {
        id: 4,
        title: "Compare Product",
        category: "Account",
        url: "/compare-products"
    },
    {
        id: 5,
        title: "Home",
        category: "Useful_Links",
        url: "/"
    },
    {
        id: 6,
        title: "About",
        category: "Useful_Links",
        url: "/about"
    },
    {
        id: 7,
        title: "Contact",
        category: "Useful_Links",
        url: "/contact"
    },
    {
        id: 8,
        title: "Shipping",
        category: "Useful_Links",
        url: "/policies/shipping-policy"
    },
    {
        id: 9,
        title: "Return Policy",
        category: "Useful_Links",
        url: "/policies/return-policy"
    },
    {
        id: 10,
        title: `OSS Store Pakistan NED`,
        category: "Contact",
        iconName: GrLocation,
        url: "/contact"
    },
    {
        id: 11,
        title: "Call Us: 123-456-7898",
        category: "Contact",
        iconName: AiOutlineMail,
        url: "/contact"
    },
    {
        id: 12,
        title: "Email Us: Support@Fiot.Com",
        category: "Contact",
        iconName: BiPhoneCall,
        url: "/contact"
    },
  
];
export default FooterLinksData;