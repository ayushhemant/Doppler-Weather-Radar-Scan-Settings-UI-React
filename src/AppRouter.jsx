import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ScanSettings from './ScanSettings';
import SPSettings from './SPSettings';
import NRTSelection from './NRTSelection';
import CalibrationSettings from './CalibrationSettings';
import FrequencySettings from './FrequencySettings';
import SummaryPage from './SummaryPage';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scan-settings" element={<ScanSettings />} />
        <Route path="/sp-settings" element={<SPSettings />} />
        <Route path="/nrt-selection" element={<NRTSelection />} />
        <Route path="/calibration-settings" element={<CalibrationSettings />} />
        <Route path="/frequency-settings" element={<FrequencySettings />} />
        <Route path="/summary-page" element={<SummaryPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;