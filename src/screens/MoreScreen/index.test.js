
/*
MoreScreen test
*/

import 'react-native';
import React from 'react';
import More from './index';
import { render } from '@testing-library/react-native';


describe('MoreScreen', () => {
    it('has center message', () => {
        const utils = render(<More/>);
        utils.getByText('More'); 
      });
    
})