import { useState } from "react";
import { Button } from "../button/component";

export const AuthorizationForm = ({ onLogin, onCancel }) => {
  const [name, setName] = useState('');
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <Button onClick={onCancel}>Cancel</Button>
      <Button 
        onClick={() => {
          onLogin(name);
          setName('')
        }}
      >
        Login
      </Button>
    </div>
  );
};