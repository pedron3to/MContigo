/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  FaFacebookF,
  FaPinterest,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

import { Logo } from '../../Logo';

export function Footer() {
  return (
    <footer className="flex h-20 items-center w-full border-t-2 border-primary justify-center border-opacity-25 mt-4">
      <div className="w-full px-4 max-w-screen-lg mx-auto bg-white flex justify-between items-center">
        <Logo />
        <ul className="flex">
          <div className="mx-2 md:mx-4">
            <a href="#" className="style-none">
              <FaFacebookF color="#265e6c" size={24} />
            </a>
          </div>
          <div className="mx-2 md:mx-4">
            <a href="#">
              <FaPinterest color="#265e6c" size={24} />
            </a>
          </div>
          <div className="mx-2 md:mx-4">
            <a href="#">
              <FaTwitter color="#265e6c" size={24} />
            </a>
          </div>
          <div className="mx-2 md:mx-4">
            <a href="#">
              <FaInstagram color="#265e6c" size={24} />
            </a>
          </div>
          <div className="mx-2 md:mx-4">
            <a href="#">
              <FaYoutube color="#265e6c" size={24} />
            </a>
          </div>
        </ul>
      </div>
    </footer>
  );
}
