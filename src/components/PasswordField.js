import { useState } from "react";

export default function PasswordField({ value, onChange, autoComplete = "current-password" }) {
  const [visible, setVisible] = useState(false);
  return (
    <label className="field password-field">
      <span>Password</span>
      <div className="password-control">
        <input
          type={visible ? "text" : "password"}
          name="password"
          value={value}
          onChange={onChange}
          minLength="8"
          autoComplete={autoComplete}
          required
          aria-describedby="passwordHint"
        />
        <button
          type="button"
          className="password-toggle"
          onClick={() => setVisible((current) => !current)}
          aria-pressed={visible}
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? "Hide" : "Show"}
        </button>
      </div>
      <small id="passwordHint">Use at least 8 characters.</small>
    </label>
  );
}
