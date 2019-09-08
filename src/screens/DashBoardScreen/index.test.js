
/*
DashBoardScreen test
*/

import 'react-native';
import React from 'react';
import DashBoard from './index';
import { render } from '@testing-library/react-native';


describe('DashBoardScreen', () => {
    it('has center message', () => {
        const utils = render(<DashBoard/>);
        utils.getByText('DashBoard'); 
      });
    
})