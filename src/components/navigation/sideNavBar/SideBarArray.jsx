import { HiOutlineUserGroup } from "react-icons/hi";
import { BsPersonAdd } from "react-icons/bs";
import { BsColumnsGap } from "react-icons/bs";
import { MdOutlineAnalytics } from "react-icons/md";
import { MdCampaign } from "react-icons/md";

export const Paths = [
  {
    to: "/",
    icons: [<BsColumnsGap size={40} />, <BsColumnsGap size={28} />],

    label: "Dashboard",
  },

  {
    to: "/employee",
    icons: [<HiOutlineUserGroup size={40} />, <HiOutlineUserGroup size={28} />],
    label: "Employee",
  },

  {
    to: "/add-employee",
    icons: [<BsPersonAdd size={40} />, <BsPersonAdd size={28} />],
    label: "Add Employee",
  },
  {
    to: "/analytics",
    icons: [<MdOutlineAnalytics size={40} />, <MdOutlineAnalytics size={28} />],
    label: "Analytics",
  },
  {
    to: "/announcement",
    icons: [< MdCampaign size={40} />, < MdCampaign size={28} />],
    label: "Announcement",
  },
];
