import React from "react";
import avatar from "../../../public/avatar.jpg";
import Image from "next/image";
type Props = {};

const Navbar = (props: Props) => {
  const loggedIn = true;
  return (
    <div className="nav-bar">
      <div className="avatar ml-auto cursor-pointer">
        <Image
          className="w-full h-full object-cover"
          src={avatar}
          width={100}
          height={100}
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
