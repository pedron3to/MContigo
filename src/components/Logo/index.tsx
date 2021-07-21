import Link from 'next/Link';
import Image from 'next/image';
import LogoMs from '../../../public/logo.svg';

export function Logo() {
  return (
    <Link href="/">
      <Image src={LogoMs} alt="Logo of MejorConSalud" width={200} height={40} />
    </Link>
  );
}
