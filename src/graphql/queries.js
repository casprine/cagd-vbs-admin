import { gql } from 'apollo-boost';

export const getMDAS = gql`
  query mdas {
    MDAs {
      name
      address
      prefix
      address
      email
      phone
      status
      token
    }
  }
`;
