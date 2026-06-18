const GRAPHQL_ENDPOINT = 'https://api.brewlingo.be/graphql';

export const graphqlFetch = async (query: string, variables: Record<string, unknown> = {}) => {
    try {
        const response = await fetch(GRAPHQL_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query, variables }),
        });

        const data = await response.json();

        return { response, data };
    } catch (error) {
        throw new Error(
            `GraphQL request failed: ${error instanceof Error ? error.message : String(error)}`,
        );
    }
};
