import gql from "graphql-tag";

// * Get
export function WorkersQuery(data) {
    return gql`
        query GetWorkers {
            workers {
                ${ data.join("\n") }
            }
        }
    `;
}
export function WorkerQuery(id, data) {
    return gql`
        query GetWorker {
            worker(id: "${ id }") {
                ${ data.join("\n") }
            }
        }
    `;
}

// * Add
export function AddWorkerMutation(data) {
    return gql`
        mutation AddWorker(
            $firstName: String!
            $lastName: String!
            $middleName: String!
            $birthday: String!
            $human_id: ID!
            $date: String!
            $resume: String!
            $specializations: [String]!
            $links: [String]
            $login: String!
            $password: String!
        ) {
            addWorker(
                firstName:$firstName
                lastName: $lastName
                middleName: $middleName
                birthday: $birthday
                human_id: $human_id
                date: $date
                resume: $resume
                specializations: $specializations
                links: $links
                login: $login
                password: $password
            ) {
                id
            }
        }
    `
}