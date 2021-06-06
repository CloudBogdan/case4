import gql from "graphql-tag";

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