import { useParams } from 'react-router-dom';
import './Display.css';
export default function Display() {
  const { r, g, b } = useParams();
  return (
    <div className="display" style={{ background: `rgb(${r}, ${g}, ${b})` }}>
      
    </div>
  );
}