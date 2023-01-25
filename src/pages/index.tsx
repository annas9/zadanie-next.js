import Head from 'next/head';
import { gql } from '@apollo/client';
import client from './apollo-client';
import { CharactersList } from '@/components/Characters/List';
import { useRouter } from 'next/router';
import { Characters } from '@/pages/interfaces';

interface ServerSideProps {
  query: {
    page?: string;
    name?: string;
  };
}

export async function getServerSideProps({ query }: ServerSideProps) {
  const {
    data: { characters },
  } = await client.query({
    query: gql`
      query GetCharacters {
        characters(page: ${query?.page || 1}) {
          info {
            next
            pages
            prev
          }
          results {
            id
            name
            image
          }
        }
      }
    `,
  });

  return {
    props: {
      characters,
    },
  };
}

interface HomeProps {
  characters: Characters;
}

export default function Home({ characters }: HomeProps) {
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
        <CharactersList characters={characters} />
      </main>
    </>
  );
}
