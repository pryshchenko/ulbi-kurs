import {render, screen} from '@testing-library/react'
import { Button, ThemeButton } from './Button'

describe('btn', () => {
    test('btn test render', () => {
        render(<Button>test</Button>)
        expect(screen.getByText('test')).toBeInTheDocument()
    })
    
    test('btn test theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>test</Button>)
        expect(screen.getByText('test')).toHaveClass('clear')
        screen.debug
    })
})