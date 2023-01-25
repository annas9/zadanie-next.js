import {
  Box,
  UserBox,
  Wrapper,
  Input,
} from '@/components/Characters/List/styles';
import { Pagination } from '@/components/Pagination';
import { useRouter } from 'next/router';
import { Characters } from '@/pages/interfaces';

interface CharactersListProps {
  characters: Characters;
}
export const CharactersList = ({ characters }: CharactersListProps) => {
  const router = useRouter();
  const {
    results,
    info: { next, pages, prev },
  } = characters;

  const handlePageClick = (pageId: number) => {
    router.query.page = pageId.toString();
    router.push(router);
  };

  return (
    <Wrapper>
      <Box>
        <Input type="text" placeholder="Szukaj..." />
        {results.map((character) => (
          <UserBox key={character.id}>{character.name}</UserBox>
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
