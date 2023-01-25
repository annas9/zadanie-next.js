import { gql } from '@apollo/client';

export default gql`
  query Character($characterId: ID!) {
    character(id: $characterId) {
      image
      name
      status
      species
      gender
    }
  }
`;
