import { gql } from '@apollo/client';

export default gql`
  query Characters($filter: FilterCharacter, $page: Int) {
    characters(filter: $filter, page: $page) {
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
`;
