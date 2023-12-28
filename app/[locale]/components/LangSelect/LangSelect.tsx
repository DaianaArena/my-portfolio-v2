"use client";
import Link from "next-intl/link";

import { Dropdown } from "keep-react";

import { MdOutlineLanguage } from "react-icons/md";

const LangSelect = () => {
  return (
    <Dropdown  className="  bg-pink-200 text-pink-700  " type="error" label={<span ><MdOutlineLanguage /> </span>} size="sm" dismissOnClick={true}>
      <Dropdown.Item>
        <Link className="  hover:text-pink-700" href="/" locale="en">
          English
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link className="  hover:text-pink-700" href="/" locale="es">
          Español
        </Link>
      </Dropdown.Item>
    </Dropdown>
  );
};

export default LangSelect;
