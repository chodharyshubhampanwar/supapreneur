import React from "react";
import {
  Lightbulb,
  User,
  DollarSign,
  Calendar,
  Users,
  Handshake,
} from "lucide-react";
import textContent from "../utils/content.json";
import SocialLogin from "../components/SingIn";

const iconMap: { [key: string]: React.ElementType } = {
  Lightbulb,
  User,
  DollarSign,
  Calendar,
  Users,
  Handshake,
};

const Sidebar: React.FC = () => (
  <aside className="flex flex-col w-64 p-4">
    <div className="space-y-2">
      {textContent.menuItems.map((item, index) => {
        const IconComponent = iconMap[item.icon];
        return (
          <div
            key={index}
            className="w-full p-2 rounded cursor-pointer hover:bg-gray-100 transition-colors flex items-center"
          >
            {IconComponent && <IconComponent size={18} className="mr-2" />}
            <span
              className={`${index < 3 ? "text-black font-medium" : "text-gray-600"}`}
            >
              {item.text}
            </span>
          </div>
        );
      })}
    </div>
    <div className="mt-4">
      <SocialLogin />
    </div>
  </aside>
);

export default Sidebar;
