// Neleisti vykdyti JS kodo toliau pasitaikius klaidai
'use strict';

// Daugiau informacijos apie "Hot Module Replacement"
// https://webpack.js.org/concepts/hot-module-replacement/
if (module.hot) {
    module.hot.accept();
}

// Įtraukiami stiliai
import '../styles/common.scss';
