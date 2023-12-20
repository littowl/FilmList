import { MainLayout } from '@/components/layouts/Main'
import { CommentForm } from '@/components/templates/CommentForm'
import Details from '@/components/templates/Details'

export default function Home() {
    return (
        <MainLayout>
            <Details />
            <CommentForm />
        </MainLayout>
    )
}
