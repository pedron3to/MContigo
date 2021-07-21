import { BiSearchAlt } from 'react-icons/bi';
export function Search() {
  return (
    <div className="flex items-center px-4">
      <input type="text" placeholder="Busca..." />
      <div>
        <BiSearchAlt />
      </div>
    </div>
  );
}
