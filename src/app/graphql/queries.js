import { gql } from '@apollo/client';

export const POKEMON_DETAILS = gql`
query PokemonDetails($query: String) {
  search(query: $query) {
    id
    name
    base_experience
    types {
      type {
        name
      }
    }
    sprites {
      front_default
    }
    abilities {
      ability {
        name
      }
    }
    moves {
      move {
        name
      }
    }
    flavor_text_entries {
      flavor_text
      language {
        name
      }
    }
    species {
      name
    }
    evolves_to {
      species {
        name
      }
      evolves_to {
        species {
          name
        }
      }
    }
  }
}
`;
