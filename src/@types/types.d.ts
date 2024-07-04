export interface ApiResponse<T> {
    data: null | T;
    status: 0;
    error: string | null;
    isLoading: boolean;
}