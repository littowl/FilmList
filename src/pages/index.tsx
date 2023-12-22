import { MainLayout } from '@/components/layouts/Main'
import Films from '@/components/templates/Films/index'
import { Filter } from '@/components/templates/Filter'
import { SortBy } from '@/components/templates/SortBy'
import { useEffect, useState } from 'react'

const App = () => {
    const [select, setSelect] = useState<string>('')
    const [variant, setVariant] = useState<string>('')

    useEffect(() => {
        setSelect(localStorage.getItem(`select`) || '')
    }, [])

    return (
        <MainLayout>
            <Filter
                select={select}
                setSelect={setSelect}
                genres={[
                    'Thriller',
                    'Romance',
                    'Drama',
                    'Horror',
                    'Action',
                    'Sport',
                    'Mystery',
                ]}
            />
            <SortBy variant={variant} setVariant={setVariant} />
            <Films genre={select} variant={variant} />
        </MainLayout>
    )
}

export default App
