import { useFilmList } from '@/lib/hooks/useFilmList'
import { useEffect, useState } from 'react'
import Pagination from '../../common/Pagination/Pagination'
import * as Style from './index.styled'
import Loader from '@/components/common/Loader'
import Film from './Film/Film'

interface FilmProps {
    genre: string
}

const Films = ({ genre }: FilmProps) => {
    const [page, setPage] = useState(1)
    const { filmList, isLoading } = useFilmList(String(page), String(10), genre)

    useEffect(() => {
        setPage(Number(localStorage.getItem(`page`)) || 1)
    }, [])

    if (isLoading) {
        return <Loader />
    }

    return filmList ? (
        <>
            <Style.Films>
                {filmList.data.movies.map(
                    ({
                        id,
                        medium_cover_image,
                        title_long,
                        genres,
                        rating,
                    }) => (
                        <Film
                            key={id}
                            id={id}
                            medium_cover_image={medium_cover_image}
                            title_long={title_long}
                            genres={genres}
                            rating={rating}
                        />
                    )
                )}
            </Style.Films>
            <Pagination
                totalUsersCount={filmList.data.movie_count}
                pageSize={10}
                currentPage={page}
                onPageChange={setPage}
            />
        </>
    ) : null
}

export default Films
