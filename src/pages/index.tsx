import { MainLayout } from '@/components/layouts/Main'
import Films from '@/components/templates/Films/index'
import { Filter } from '@/components/templates/Filter'
import { useState } from 'react'

const App = () => {
    const [select, setSelect] = useState<string>('')
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
            <Films genre={select} />
        </MainLayout>
    )
}

export default App
