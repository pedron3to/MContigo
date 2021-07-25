import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { useRouter } from 'next/router'

export function Search() {
  const [input, setInput] = useState('')

  const router = useRouter()
  console.log(input)
  
  function handleOnSubmitSearch(e:any) {
    e.preventDefault();

    router.push(`/search/${input}`)


    

  }
  return (
    <form className="flex items-center px-4" onSubmit={handleOnSubmitSearch}>
      <input value={input} onInput={(e:any) => setInput(e.target.value)} placeholder="Busca..." />
      <button type='submit'>
        <BiSearchAlt />
      </button>
    </form>
  );
}
