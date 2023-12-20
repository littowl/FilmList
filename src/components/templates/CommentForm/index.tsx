import { useState } from 'react'
import * as Style from './index.styled'
import { IoSend } from 'react-icons/io5'
export const CommentForm = () => {
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState<
        {
            id: number
            text: string
        }[]
    >([])
    const createComment = () => {
        setComments([
            ...comments,
            {
                id: Date.now(),
                text: comment,
            },
        ])
        setComment('')
    }
    return (
        <Style.Comments>
            <Style.InputForm>
                <Style.Input
                    placeholder="Enter a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') createComment()
                    }}
                />
                <Style.Send onClick={createComment}>
                    <IoSend />
                </Style.Send>
            </Style.InputForm>
            <Style.List>
                {comments.length ? (
                    comments.map(({ id, text }) => (
                        <Style.Comment key={id}>
                            <Style.Text>{text}</Style.Text>
                        </Style.Comment>
                    ))
                ) : (
                    <Style.Placeholder>
                        No comments yet. Leave him first!
                    </Style.Placeholder>
                )}
            </Style.List>
        </Style.Comments>
    )
}
