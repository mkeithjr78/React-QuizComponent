import React from 'react'

class QuizQuestionButton {
    rendor() {
        return (
            <li><button>{this.props.button_text}</button></li>
        )
    }
}

export default QuizQuestionButton
