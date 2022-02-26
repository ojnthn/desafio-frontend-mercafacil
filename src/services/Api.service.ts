import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";

export class ApiService {
  constructor() {}

  get(query: string) {
    return useQuery(
      gql`${query}`
    );
  }
}