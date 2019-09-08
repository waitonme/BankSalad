
/*
FinancialSecretaryScreen test
*/

import 'react-native';
import React from 'react';
import FinancialSecretary from './index';
import { render } from '@testing-library/react-native';


describe('FinancialSecretaryScreen', () => {
    it('has center message', () => {
        const utils = render(<FinancialSecretary/>);
        utils.getByText('FinancialSecretary'); 
      });
    
})