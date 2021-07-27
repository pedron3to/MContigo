/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import Link from 'next/link';

import LogoMs from '../../../public/logo.svg';

export function Logo() {
  return (
    <>
      <Link href="/">
        <a href="#">
          <Image
            src={LogoMs}
            alt="Logo of MejorConSalud"
            width={200}
            height={40}
          />
        </a>
      </Link>
    </>
  );
}
