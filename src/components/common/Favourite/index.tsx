import { MdOutlineFavorite } from 'react-icons/md'
import { ThemeContext } from '@/components/providers/ThemeProvider'
import { useContext, useEffect, useState } from 'react'
import * as Style from './index.styled'

export const Favourite = ({ id }: { id: number }) => {
    const context = useContext(ThemeContext)
    const [color, setColor] = useState('')
    useEffect(() => {
        if (localStorage.getItem(`film_${id}`)) {
            setColor('rgba(255, 146, 146, 0.9)')
        } else setColor(context?.theme === 'light' ? '#ADADAD' : '#E5E5E5')
    }, [setColor, context?.theme])
    return (
        <Style.Favourites
            onClick={() => {
                if (localStorage.getItem(`film_${id}`)) {
                    setColor(context?.theme === 'light' ? '#ADADAD' : '#E5E5E5')
                    localStorage.removeItem(`film_${id}`)
                } else {
                    localStorage.setItem(`film_${id}`, String(id))
                    setColor('rgba(255, 146, 146, 0.9)')
                }
            }}
        >
            <MdOutlineFavorite style={{ fill: color, width: 24, height: 24 }} />
        </Style.Favourites>
    )
}
