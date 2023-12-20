import { useState } from 'react'
import * as Style from './Filter.styled'
import { FaChevronDown } from 'react-icons/fa6'
import { IoMdClose } from 'react-icons/io'

interface FilterProps {
    select: string
    setSelect: (select: string) => void
    genres: string[]
}

export const Filter = ({ select, setSelect, genres }: FilterProps) => {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <Style.Select onClick={() => setVisible(!visible)}>
                {select || <p style={{ color: '#A1A8AB' }}>Select genre</p>}
                {select ? (
                    <IoMdClose
                        onClick={() => setSelect('')}
                        style={{ width: 24, height: 24 }}
                    />
                ) : (
                    <FaChevronDown />
                )}
            </Style.Select>
            <Style.OptionsGroup style={{ display: visible ? 'block' : 'none' }}>
                {genres.map((genre) => (
                    <Style.Option
                        key={genre}
                        onClick={() => {
                            setSelect(genre)
                            setVisible(false)
                        }}
                    >
                        {genre}
                    </Style.Option>
                ))}
            </Style.OptionsGroup>
        </>
    )
}
