import React from 'react'

export function Error ({ error } : { error: Error }) {
    return (
        <div>
            <div>{error.message}</div>
        </div>
    )
}
