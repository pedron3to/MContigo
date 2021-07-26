import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { useRouter } from 'next/router';

export function Search() {
  const [input, setInput] = useState('');

  const router = useRouter();

  function handleOnSubmitSearch(e: any) {
    e.preventDefault();

    router.push(`/search/${input}`);
  }
  return (
    <form
      className="flex items-center p-0 border-primary border-2 rounded border-opacity-50 w-full justify-between md:w-80"
      onSubmit={handleOnSubmitSearch}
    >
      <input
        value={input}
        onInput={(e: any) => setInput(e.target.value)}
        placeholder="Busca..."
        className=" px-2 py-1"
      />
      <button type="submit">
        <BiSearchAlt color="#265e6c" size={20} />
      </button>
    </form>
  );
}
