import { FC, createContext, useState } from "react";
import { ApiResponse } from "../@types/types";

export const ApiResponseContext = createContext<ApiResponse<unknown>>({
    data: null,
    status: 0,
    error: null,
    isLoading: false,
});

const ResponseContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [response, setResponse] = useState<ApiResponse>();

    return (
        <ResponseContext>
        {children}
        </ResponseContext>
    )
}