import React from 'react';
import ReactDOM from 'react-dom';
import {createHistory as browserHistory } from 'history/createBrowserHistory';

import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';

// "build": "react-scripts build && yarn run delete-maps",
// "postbuild": "rimraf build/**/*.map",
// "delete-maps": "yarn run delete-map-files && yarn run delete-references-to-map-files",
// "delete-map-files": "find ./build -name '*.map' -delete",
// "delete-references-to-map-files": "find ./build -regex '.*\\.\\(js\\|css\\)' -exec sed -i -E '\\/[\\*\\/]#\\ssourceMappingURL=main(\\.[0-9a-f]+)?\\.(css|js)\\.map(\\*\\/)?/g' {} +",

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
registerServiceWorker();