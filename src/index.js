import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Router from './router';

import ThemeWrapper from './shared/styles/Theme';

const Routes = <ThemeWrapper>
  {Router}
</ThemeWrapper>;

ReactDOM.render(Routes, document.getElementById('root'));