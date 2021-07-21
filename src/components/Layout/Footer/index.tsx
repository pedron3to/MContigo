import Link from 'next/Link';
import { Logo } from '../../Logo';
import {
  FaFacebookF,
  FaPinterest,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="flex h-20 items-center w-full border-t-2 border-primary justify-center border-opacity-25">
      <div className="w-full px-4 max-w-screen-lg mx-auto bg-white flex justify-between items-center">
        <Logo />
        <ul className="flex">
          <li className="mx-4">
            <a href="#">
              <FaFacebookF color="#265e6c" size={24} />
            </a>
          </li>
          <li className="mx-4">
            <a href="#">
              <FaPinterest color="#265e6c" size={24} />
            </a>
          </li>
          <li className="mx-4">
            <a href="#">
              <FaTwitter color="#265e6c" size={24} />
            </a>
          </li>
          <li className="mx-4">
            <a href="#">
              <FaInstagram color="#265e6c" size={24} />
            </a>
          </li>
          <li className="mx-4">
            <a href="#">
              <FaYoutube color="#265e6c" size={24} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
