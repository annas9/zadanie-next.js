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
import { FormEvent, useState } from 'react';

interface CharactersListProps {
  characters: Characters;
}

export const CharactersList = ({ characters }: CharactersListProps) => {
  const router = useRouter();
  const [name, setName] = useState(router?.query?.name || '');
  const {
    results,
    info: { next, pages, prev },
  } = characters;

  const handlePageClick = (pageId: number) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: pageId.toString() },
    });
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.length > 0) {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, page: '1', name },
      });
    }
    router.replace(router.pathname);
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
            data-test-id="search"
          />
          <SearchButton type="submit" data-test-id="search-submit">
            Szukaj
          </SearchButton>
        </form>
        {results.map((character) => (
          <Link key={character.id} href={`characters/${character.id}`}>
            <UserBox data-test-id="character-list-item">
              <Avatar src={character.image} />
              <div data-test-id="character-name">{character.name}</div>
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
