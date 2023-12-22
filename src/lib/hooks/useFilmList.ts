import { useQuery, useQueryClient } from '@tanstack/react-query'

import { filmListQuery } from '@/lib/api'

export const useFilmList = (
    currentPage: string,
    pageSize: string,
    genre: string,
    variant: string
) => {
    const queryClient = useQueryClient()

    const {
        data: filmList,
        isSuccess,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['getFilmList', currentPage, pageSize, genre, variant],
        queryFn: () => filmListQuery(currentPage, pageSize, genre, variant),
        keepPreviousData: true,
        cacheTime: 1000 * 60 * 60,
        staleTime: 1000 * 60 * 60,
    })

    const updateFilmList = () => {
        return queryClient.invalidateQueries({ queryKey: ['getFilmList'] })
    }

    return {
        filmList,
        updateFilmList,
        isSuccess,
        isLoading,
        isError,
    }
}
