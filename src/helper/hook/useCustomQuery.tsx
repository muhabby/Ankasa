import { QueryKey, useQuery, UseQueryOptions } from "react-query";
import { useState } from "react";

interface CustomHookOptions<TData, TError>
    extends UseQueryOptions<TData, TError> {
    queryKey: QueryKey;
}

export default function useCustomQuery<
    TData extends {
        status: number;
        message: string;
        responseDesc: string;
        responseCode: number;
        code: number;
    },
    TError extends { responseDesc: string; responseCode: number },
    TParams
>(
    queryKey: QueryKey,
    queryParams: TParams,
    fetchFunction: (params?: any) => Promise<TData>,
    options?: CustomHookOptions<TData, TError>
) {
    const [isLoading, setIsLoading] = useState(false);
    const {
        staleTime = 100000,
        refetchOnMount = false,
        ...queryOptions
    } = options || {};

    const query = useQuery<TData, TError>(
        [queryKey, queryParams],
        async () => {
            setIsLoading(true);
            try {
                const data = await fetchFunction(queryParams);
                return data;
            } catch (error) {
                console.error("Failed to load data: " + error);
                throw error;
            } finally {
                setIsLoading(false);
            }
        },
        { staleTime, refetchOnMount, ...queryOptions }
    );

    return { ...query, isLoading };
}
