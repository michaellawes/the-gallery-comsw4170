import './Settings.css';
import React from 'react';

function Settings(props) {
  return (
    <div className="settings">
      <div className="notifications-settings">
        <span>Notifications</span>
        <span>New galleries from your favorites</span>
        <button></button>
        <span>New events from your favorites</span>
        <button></button>
      </div>
      <div className="password-settings">
        <span>Change your password</span>
        <span>Current password:</span>
        <input></input>
        <span>New password:</span>
        <input></input>
        <span>Confirm new password:</span>
        <input></input>
        <button>Confirm</button>
      </div>
      <div className="delete-settings">
        <span>Delete account:</span>
        <span>Once your account is deleted, it cannot be recovered. Enter your password to confirm.</span>
        <input></input>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default Settings;