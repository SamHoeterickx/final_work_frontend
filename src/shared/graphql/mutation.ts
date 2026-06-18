export const EARLY_SUBSCRIBE_MUTATION = `
    mutation Subscribe(
        $email: String!,
        $platform: String!,
        $language: String!,
    ) {
        subscribe(input: { 
            email: $email, 
            platform: $platform 
            language: $language
        })
    }
`;
