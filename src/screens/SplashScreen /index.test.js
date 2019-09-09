
/*
SplashScreen test
*/

import 'react-native';
import React from 'react';
import Splash from './index';
import { render } from '@testing-library/react-native';


describe('SplashScreen', () => {
    it('has center message', () => {
        const utils = render(<Splash />);
        utils.getByText('Splash');
    });
})