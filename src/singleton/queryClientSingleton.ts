import { useQueryClient } from '@tanstack/react-query';

export function getQueryClient() {
    const queryClientInstance = useQueryClient();

    return queryClientInstance;
}