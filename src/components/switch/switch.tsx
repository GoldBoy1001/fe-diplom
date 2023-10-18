import "./styleSwitch.scss";

export default function Switch() {
  return (
    <label className="extras-bar__switch">
      <input type="checkbox" />
      <span className="extras-bar__slider"></span>
    </label>
  );
}
