import './styles/App.css';
import './styles/Campaign.css';
import './styles/Modal.css';
import './styles/Table.css';
import { useTranslation } from "react-i18next";
import  LayoutComponent  from './components/LayoutComponent';
function App() {
  const { t, i18n, ready } = useTranslation();
 
  if (ready) {
  return (
    <div className="App">
      <LayoutComponent></LayoutComponent>
    </div>
  );
  }
  return <span>Loading...</span>;
}

export default App;
