
/*
BottomTabNavigator test
*/

import 'react-native';
import React from 'react';
import Navigation from './index';
import { render, fireEvent } from '@testing-library/react-native';


describe('BottomTabNavigator', () => {
    const setup = (props = {}) => {
        const utils = render(<Navigation />);
        const dashBoard = utils.getByTestId('My금융')
        const accBook = utils.getByTestId('가계부')
        const jTech = utils.getByTestId('재테크')
        const finanSec = utils.getByTestId('금융비서')
        const more = utils.getByTestId('더보기')

        return {
            utils,
            dashBoard,
            accBook,
            jTech,
            finanSec,
            more,
        }
    };

    it('has buttom buttons', () => {
        const { dashBoard, accBook, jTech, finanSec, more } = setup()
        expect(dashBoard).toBeTruthy
        expect(accBook).toBeTruthy
        expect(jTech).toBeTruthy
        expect(finanSec).toBeTruthy
        expect(more).toBeTruthy
    })

    it('view swipe', () => {
        const { dashBoard, more } = setup()
        expect(dashBoard.props.accessibilityStates.length).toBe(1)
        expect(more.props.accessibilityStates.length).toBe(0)
        fireEvent.press(more)
        expect(dashBoard.props.accessibilityStates.length).toBe(0)
        expect(more.props.accessibilityStates.length).toBe(1)
    })
})