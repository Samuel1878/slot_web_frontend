import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { banner1, banner2, banner3, banner4, banner5, highlightFirstVideo, highlightFourthVideo, highlightSecondVideo, highlightThirdVideo, zeroFiveImg, zeroFourImg, zeroOneImg, zeroSevenImg, zeroSixImg, zeroThreeImg, zeroTwoImg } from "src/utils";
export const services = [
  {
    label:"Games",
    value:"games"
  },
  {
    label:"Dashboard",
    value:"dashboard"
  },
  {
    label: "Deposit",
    value: "deposit",
  },
  {
    label: "Withdrawl",
    value: "withdrawl",
  },
  {
    label: "Download",
    value: "download",
  },
];
export const help = [
  {
    label: "24/7 Support",
    value: "support",
  },
  {
    label: "FAQ",
    value: "faq",
  }
  
];
export const company = [
  {
    label: "About Us",
    value: "about",
  },
  {
    label: "Term of Service",
    value: "term",
  },
  {
    label: "Privacy Policy",
    value: "privacy",
  }
];
export const navMenu = [
  {
    label: "Games",
    value: "games",
    icon: <FontAwesomeIcon icon="fa-solid fa-dice" color="#a3a3a3" />,
  },
  {
    label: "Deposit",
    value: "deposit",
    icon: <FontAwesomeIcon icon="fa-solid fa-money-bill-trend-up" color="#a3a3a3" />,
  },
  {
    label: "Withdrawl",
    value: "withdrawl",
    icon: <FontAwesomeIcon icon="fa-solid fa-money-bill-transfer" color="#a3a3a3" />,
  },
  {
    label: "Support",
    value: "support",
    icon: <FontAwesomeIcon icon="fa-solid fa-headset" color="#a3a3a3"/>,
  },
  {
    label: "Term and Condition",
    value: "term-and-condition",
    icon: <FontAwesomeIcon icon="fa-solid fa-shield-halved" color="#a3a3a3" />,
  },
  {
    label: "FAQ",
    value: "faq",
    icon:<FontAwesomeIcon icon="fa-solid fa-circle-question" color="#a3a3a3" />,
  },
  {
    label: "Download",
    value: "download",
    icon: <FontAwesomeIcon icon="fa-solid fa-download" color="#a3a3a3" />,
  },
];

export const imagesSlides = [
  banner1,
 banner2,
 banner3,
 banner4,
 banner5
];
export const gameList = [
  { label: "001", value: "001", icon: zeroOneImg },
  { label: "002", value: "002", icon: zeroTwoImg },
  { label: "Coming Soon", value: "coming_soon", icon: zeroThreeImg },
  { label: "Coming Soon", value: "coming_soon", icon: zeroFourImg },
  { label: "Coming Soon", value: "coming_soon", icon: zeroFiveImg },
  { label: "Coming Soon", value: "coming_soon", icon: zeroSixImg },
  { label: "Coming Soon", value: "coming_soon", icon: zeroSevenImg },
  { label: "Coming Soon", value: "coming_soon", icon: null },
];
export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: highlightSecondVideo,
    videoDuration: 10,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightThirdVideo,
    videoDuration: 10,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlightFirstVideo,
    videoDuration: 10,
  },
];

export const languageData = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "မြန်မာ",
    value: "my",
  },
  {
    label: "中文",
    value: "zh",
  },
];