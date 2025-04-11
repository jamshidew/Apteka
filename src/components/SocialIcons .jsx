import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";

const SocialIcons = () => {
  const icons = [
    { icon: <BsTelegram />, link: "#" },
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaYoutube />, link: "#" },
    { icon: <FaTiktok />, link: "#" },
    { icon: <FaXTwitter />, link: "#" },
  ];

  return (
    <div className="flex items-center gap-2">
      {icons.map((item, index) => (
        <a
          href={item.link}
          key={index}
          className="inline-flex h-10 w-10 items-center justify-center shrink-0 rounded-lg text-blue-500 bg-white"
        >
          <span className="text-xl">{item.icon}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
