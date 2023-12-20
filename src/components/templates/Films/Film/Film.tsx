import { MovieList } from '@/lib/api'
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import * as Style from './index.styled'
import { FaStar } from 'react-icons/fa6'
import { MdOutlineFavorite } from 'react-icons/md'
import { ThemeContext } from '@/components/providers/ThemeProvider'
import { Favourite } from '@/components/common/Favourite'

interface FilmProps {
    id: number
    medium_cover_image: string
    title_long: string
    rating: number
    genres: string[]
}

const Film: React.FC<FilmProps> = ({
    id,
    medium_cover_image,
    title_long,
    rating,
    genres,
}) => {
    const context = useContext(ThemeContext)
    const [color, setColor] = useState('')
    useEffect(() => {
        if (localStorage.getItem(`film_${id}`)) {
            setColor('rgba(255, 146, 146, 0.9)')
        } else setColor(context?.theme === 'light' ? '#ADADAD' : '#E5E5E5')
    }, [setColor, context?.theme])
    return (
        <Style.Film>
            <Link href={`/films/${id}`}>
                <Style.Img src={medium_cover_image} />
                <Style.Info>
                    <Style.Title>{title_long}</Style.Title>
                    <br />
                    Genres:{' '}
                    {genres.map((genre, idx) =>
                        (idx === genres.length - 1
                            ? genre
                            : `${genre}, `
                        ).toLowerCase()
                    )}
                    <br />
                    Rating: {rating}/10 <FaStar />
                </Style.Info>
            </Link>
            <div style={{ alignSelf: 'start' }}>
                <Favourite id={id} />
            </div>
        </Style.Film>
    )
}

export default Film
