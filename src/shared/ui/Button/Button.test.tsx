import {render, screen} from '@testing-library/react'
import { Button, ButtonTheme } from './Button'

describe('btn', () => {
    test('btn test render', () => {
        render(<Button>test</Button>)
        expect(screen.getByText('test')).toBeInTheDocument()
    })
    
    test('btn test theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>test</Button>)
        expect(screen.getByText('test')).toHaveClass('clear')
        screen.debug
    })
})