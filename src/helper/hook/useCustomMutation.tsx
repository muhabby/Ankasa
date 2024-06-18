
import { UseMutationOptions, useMutation } from "react-query";

interface CustomMutationOptions<
    TData extends { status: number },
    TError,
    TVariables
> extends UseMutationOptions<TData, TError, TVariables> {
    mutationFunction: (variables: TVariables) => Promise<TData>;
}

export default function useCustomMutation<
    TData extends {
        status: number;
        message: string;
        code: number;
        responseDesc: string;
        responseCode: number;
        data: any;
    },
    TError extends { responseDesc: string; responseCode: number; code: number },
    TVariables
>(
    mutationFunction: (variables: TVariables) => Promise<TData>,
    options?: CustomMutationOptions<TData, TError, TVariables>
) {
    const { onError, onSuccess, ...mutationOptions } = options || {};

    const mutation = useMutation<TData, TError, TVariables>(mutationFunction, {
        onSuccess: (data, variables, context) => {
            if (onSuccess) {
                onSuccess(data, variables, context);
            }
        },
        onError: (error, variables, context) => {
            console.error(`An error occurred, ${error?.responseDesc} `);
            if (onError) {
                onError(error, variables, context);
            }
        },
        ...mutationOptions,
    });
    // console.log(mutation)

    const reset = () => {
        mutation.reset();
    };

    return {
        mutation,
        isLoading: mutation.isLoading,
        isSuccess: mutation.isSuccess,
        isError: mutation.isError,
        error: mutation.error,
        reset,
    };
}
