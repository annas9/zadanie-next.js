import {
  Box,
  UserBox,
  Wrapper,
  Input,
  Avatar,
} from '@/components/Characters/List/styles';
import { Pagination } from '@/components/Pagination';
import { useRouter } from 'next/router';
import { Characters } from '@/pages/interfaces';
import Link from 'next/link';

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
