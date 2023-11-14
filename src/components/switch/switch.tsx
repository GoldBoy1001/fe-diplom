import { useState } from "react";
import "./styleSwitch.scss";

interface SwitchProps {
  id: string;
  onSwitchChange: (id: string, checked: boolean) => void;
}

export default function Switch({ id, onSwitchChange }: SwitchProps) {
  const [checked, setChecked] = useState(false);

  const handleSwitchChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onSwitchChange(id, newChecked);
  };

  return (
    <label className="extras-bar__switch">
      <input type="checkbox" checked={checked} onChange={handleSwitchChange} />
      <span className="extras-bar__slider"></span>
    </label>
  );
}
