import Head from 'next/head';
import client from '@/pages/apollo-client';
import { useRouter } from 'next/router';
import { Character } from '@/pages/interfaces';
import getCharacter from './getCharacter';
import {
  Box,
  CharacterBox,
  Image,
  Label,
  Text,
  Value,
  Wrapper,
} from '@/pages/characters/[id]/styles';
import { GoBackButton } from '@/components/GoBackButton';

interface ServerSideProps {
  params: {
    id?: string;
  };
}

export async function getServerSideProps({ params }: ServerSideProps) {
  const {
    data: { character },
  } = await client.query({
    query: getCharacter,
    variables: {
      characterId: Number(params?.id),
    },
  });

  return {
    props: {
      character,
    },
  };
}

interface HomeProps {
  character: Character;
}

export default function Home({ character }: HomeProps) {
  const router = useRouter();
  if (router.isFallback) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>Zadanie rekrutacyjne</title>
        <meta name="description" content="Anna Stanisz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Wrapper>
          <GoBackButton />
          <CharacterBox>
            <Image src={character.image} />
            <Text>{character.name}</Text>
            <Box>
              <Label>Species:</Label>
              <Value>{character.species}</Value>
            </Box>
            <Box>
              <Label>Gender:</Label>
              <Value>{character.gender}</Value>
            </Box>
          </CharacterBox>
        </Wrapper>
      </main>
    </>
  );
}
