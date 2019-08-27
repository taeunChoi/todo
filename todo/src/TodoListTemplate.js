import React from 'react'
const TodoListTemplate = ({form, children}) => {
    return (
        <main>
            <div>오늘할일</div>
            <section>
                {form}
            </section>
            <section>
                {children}
            </section>
        </main>
    )
}

export default TodoListTemplate