import Loader from '@/components/common/Loader'
import * as Style from '@/components/templates/Details/index.styled'
import { useFilmRetrieve } from '@/lib/hooks/useFilmRetrieve'
import { useRouter } from 'next/router'
import { IoMdArrowBack } from 'react-icons/io'
import { LuDownload } from 'react-icons/lu'
import Link from 'next/link'
import { FaStar } from 'react-icons/fa6'
import { Favourite } from '@/components/common/Favourite'
const Details = () => {
    const router = useRouter()
    const { filmRetrieve, isLoading } = useFilmRetrieve(
        (router.query.id as string) || ''
    )

    if (isLoading) {
        return <Loader />
    }

    const descriptionSlice = (desc: string) =>
        desc.split('.').length > 5
            ? desc.split('.').slice(0, 5).join('. ')
            : desc

    return (
        <Style.Details>
            <Style.Header>
                <Link href="/">
                    <IoMdArrowBack />
                </Link>
                <h2>
                    {filmRetrieve?.data.movie.title ||
                        'No title data from query by id'}
                </h2>
            </Style.Header>

            <Style.Info>
                <Style.Img src={filmRetrieve?.data.movie.medium_cover_image} />
                <Style.About>
                    <Style.GroupBtn>
                        <Style.Watch>
                            <Link href={String(filmRetrieve?.data.movie.url)}>
                                Watch
                            </Link>
                        </Style.Watch>
                        <Style.Torrent>
                            <Link
                                href={String(
                                    filmRetrieve?.data.movie.torrents
                                        ? filmRetrieve?.data.movie.torrents[0]
                                              .url
                                        : ''
                                )}
                            >
                                Download Torrent
                                <LuDownload />
                            </Link>
                        </Style.Torrent>
                        <Favourite id={Number(router.query.id)} />
                    </Style.GroupBtn>
                    <Style.Characteristics>
                        Production year: &nbsp;&nbsp;{' '}
                        {filmRetrieve?.data.movie.year === 0
                            ? 'no year data from query by id'
                            : filmRetrieve?.data.movie.year}
                        <br />
                        Genre:&nbsp;&nbsp;
                        {filmRetrieve?.data.movie.genres.map((genre, idx) =>
                            (idx === filmRetrieve?.data.movie.genres.length - 1
                                ? genre
                                : `${genre}, `
                            ).toLowerCase()
                        )}
                        <br />
                        Rating:&nbsp;&nbsp;{
                            filmRetrieve?.data.movie.rating
                        }/10 <FaStar />
                    </Style.Characteristics>

                    <br />
                    <p style={{ alignSelf: 'end' }}>
                        {filmRetrieve?.data.movie.description_full
                            ? descriptionSlice(
                                  filmRetrieve?.data.movie.description_full
                              )
                            : "No film's description"}
                    </p>
                </Style.About>
            </Style.Info>
        </Style.Details>
    )
}

export default Details
