import { Logo } from '../../Logo';
import { Nav } from './Nav';

export function Header() {
  return (
    <header className="flex items-center w-full h-20 bg-white ">
      <nav className="w-full px-4 max-w-screen-lg mx-auto bg-white flex justify-between items-center ">
        <Logo />
        <Nav />
      </nav>
    </header>
  );
}
