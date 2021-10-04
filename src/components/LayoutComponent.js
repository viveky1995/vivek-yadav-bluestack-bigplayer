import HeaderComponent from './HeaderComponent';
import BodyComponent from './BodyComponent';

export default function LayoutComponent() {
  return (
    <div className="app">
        <div><HeaderComponent/></div>
        <div className = "app-body"><BodyComponent/></div>    
    </div>
  );
}


