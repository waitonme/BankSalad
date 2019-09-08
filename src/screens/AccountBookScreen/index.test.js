
/*
AccountBookScreen test
*/

import 'react-native';
import React from 'react';
import AccountBook from './index';
import { render } from '@testing-library/react-native';


describe('AccountBookScreen', () => {
    it('has center message', () => {
        const utils = render(<AccountBook/>);
        utils.getByText('AccountBook'); 
      });
    
})