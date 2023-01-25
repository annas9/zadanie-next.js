import {
  Box,
  UserBox,
  Wrapper,
  Input,
  Avatar,
  SearchButton,
} from '@/components/Characters/List/styles';
import { Pagination } from '@/components/Pagination';
import { useRouter } from 'next/router';
import { Characters } from '@/pages/interfaces';
import Link from 'next/link';
import { useState } from 'react';

interface CharactersListProps {
  characters: Characters;
}
export const CharactersList = ({ characters }: CharactersListProps) => {
  const router = useRouter();
  const [name, setName] = useState(router?.query?.name);
  const {
    results,
    info: { next, pages, prev },
  } = characters;

  const handlePageClick = (pageId: number) => {
    router.query.page = pageId.toString();
    router.push(router);
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    const name = e.target.name.value;
    router.query.page = '1';
    router.query.name = name;
    router.push(router);
  };

  return (
    <Wrapper>
      <Box>
        <form onSubmit={handleSearch}>
          <Input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Szukaj..."
          />
          <SearchButton type="submit">Szukaj</SearchButton>
        </form>
        {results.map((character) => (
          <Link key={character.id} href={`characters/${character.id}`}>
            <UserBox>
              <Avatar src={character.image} />
              {character.name}
            </UserBox>
          </Link>
        ))}
        <Pagination
          next={next}
          pages={pages}
          prev={prev}
          handlePageClick={handlePageClick}
        />
      </Box>
    </Wrapper>
  );
};
