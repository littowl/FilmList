import * as Style from './SortBy.styled'

interface SortByProps {
    variant: string
    setVariant: (variant: string) => void
}

export const SortBy = ({ variant, setVariant }: SortByProps) => {
    return (
        <Style.SortBy>
            <Style.Item
                onClick={() => {
                    setVariant(variant === 'rating' ? '' : 'rating')
                }}
            >
                <p
                    style={{
                        textDecoration: variant === 'rating' ? 'underline' : '',
                    }}
                >
                    Highly rated movies
                </p>
            </Style.Item>
            {/* <Style.Item onClick={() => {
                setVariant(variant === 'download_count' ? '' : 'download_count')
            }}>
                <p style={{textDecoration: variant === 'download_count' ? 'underline' : ''}}>By download count</p>
            </Style.Item> */}
        </Style.SortBy>
    )
}
