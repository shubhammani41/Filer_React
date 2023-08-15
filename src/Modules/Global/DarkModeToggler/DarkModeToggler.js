import { useContext } from 'react';
import { AppContext } from '../../../AppContext';
import './DarkModeToggler.css';
import { MaterialUISwitch } from '../../../Constants/MuiSwitch';

function DarkModeToggler() {
    const toggleMode = (ev) => {
        let data = { ...app_context_obj };
        data.darkMode = ev.target.checked;
        setAppContext(data);
    }
    const [app_context_obj, setAppContext] = useContext(AppContext);
    return (
        <div className="FloatingDarkModeToggler">
                <MaterialUISwitch checked={app_context_obj.darkMode} onChange={(ev) => { toggleMode(ev) }}></MaterialUISwitch>
        </div>
    )
}

export { DarkModeToggler }