import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { NotFound } from './pages/NotFound/NotFound';
import DummyChart from './pages/tabs/DummyChart';
import DummyList from './pages/tabs/DummyList';
import DummyTable from './pages/tabs/DummyTable';

const tabsData = require('./tabs.json');

function capitalizeLastWord(path) {
  const parts = path.split('/');
  const lastPart = parts[parts.length - 1];
  const capitalizedLastPart = lastPart.charAt(0).toUpperCase() + lastPart.slice(1);
  parts[parts.length - 1] = capitalizedLastPart;
  return parts.join('/');
}

function lazyLoadComponent(path) {
  const formattedPath = capitalizeLastWord(path);
  return React.lazy(() => import(`./pages/${formattedPath}`));
}


const lazyTabs = tabsData.map(tab => ({
  ...tab,
  component: lazyLoadComponent(tab.path)
}));


function App() {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    setTabs(lazyTabs);
  }, []);
  const defaultPath = tabsData.sort((a, b) => a.order - b.order)[0].id;

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout tabs={tabs} />}>
          <Route path="/" element={<Navigate to={`/${defaultPath}`} />} />
          <Route path="dummyChart" element={<DummyChart />} />
          <Route path="dummyList" element={<DummyList />} />
          <Route path="dummyTable" element={<DummyTable />} />
          {/* {lazyTabs.map(tab => (
            <Route key={tab.id} path={`/${tab.id}`} element={<tab.component />} />
          ))} */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App;