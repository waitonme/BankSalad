
/*
JaeTechScreen test
*/

import 'react-native';
import React from 'react';
import JaeTech from './index';
import { render } from '@testing-library/react-native';


describe('JaeTechScreen', () => {
    it('has center message', () => {
        const utils = render(<JaeTech/>);
        utils.getByText('JaeTech'); 
      });
    
})