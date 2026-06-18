// UTILS
import { graphqlFetch } from '../utils/api.utils';

// GRAPHQL
import { EARLY_SUBSCRIBE_MUTATION } from '../graphql/mutation';
import { GET_COUNT_QUERY } from '../graphql/query';

// TYPES
import type { ISubscribeEarlySignupCredentials } from '../types/types';

export class EarlySignupService {
    public async getCount() {
        try {
            const result = await graphqlFetch(GET_COUNT_QUERY);

            if (!result || !result.data) {
                throw new Error('Failed to recieve data');
            }

            const data = await result.data as any;
            if (data.errors && Array.isArray(data.errors) && data.errors.length > 0) {
                const errorItem = data.errors[0];

                const validationMessage = errorItem.extensions?.originalError?.message;

                if (validationMessage) {
                    if (Array.isArray(validationMessage)) {
                        throw new Error(validationMessage[0]);
                    }
                    if (typeof validationMessage === 'string') {
                        throw new Error(validationMessage);
                    }
                }
                const topLevelMessage = errorItem.message;
                if (topLevelMessage && topLevelMessage !== 'Bad Request Exception') {
                    throw new Error(topLevelMessage);
                }

                throw new Error('Unknown error occured while register');
            }
            console.log(result);
            return result.data.data.getCount;
        } catch (error) {
            throw error;
        }
    }

    public async subscribe(credentials: ISubscribeEarlySignupCredentials) {
        try {
            const VARIABLES = { ...credentials };
            const result = await graphqlFetch(EARLY_SUBSCRIBE_MUTATION, VARIABLES);

            if (!result || !result.data) {
                throw new Error('Failed to recieve data');
            }

            const data = result.data as any;
            if (data.errors && Array.isArray(data.errors) && data.errors.length > 0) {
                const errorItem = data.errors[0];

                const validationMessage = errorItem.extensions?.originalError?.message;

                if (validationMessage) {
                    if (Array.isArray(validationMessage)) {
                        throw new Error(validationMessage[0]);
                    }
                    if (typeof validationMessage === 'string') {
                        throw new Error(validationMessage);
                    }
                }
                const topLevelMessage = errorItem.message;
                if (topLevelMessage && topLevelMessage !== 'Bad Request Exception') {
                    throw new Error(topLevelMessage);
                }

                throw new Error('Unknown error occured while register');
            }

            return result;
        } catch (error) {
            throw error;
        }
    }
}
export const earlySignupService = new EarlySignupService();
