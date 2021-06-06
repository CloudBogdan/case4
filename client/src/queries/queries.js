import gql from "graphql-tag";

export function WokersQuery(data) {
    return gql`
        query GetWorkers {
            workers {
                ${ data.join("\n") }
            }
        }
    `;
}