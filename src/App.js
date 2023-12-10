import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PublicRoute } from '~/routes';
import { DeafaultLayout } from '~/components/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {PublicRoute.map((route, index) => {
            const Page = route.element;
            let Layout = DeafaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                path={route.path}
                key={index}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
