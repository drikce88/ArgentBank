import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile } from '../actions/userProfileActions';
import { updateUserProfile } from '../actions/userProfileActions';



export default function Transaction() {
  const userProfile = useSelector(state => state.userProfile);
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [newUserName, setNewUserName] = useState('');

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  const handleEdit = () => {
    setEditMode(true);
    setNewUserName(userProfile.userName);
  };

  const handleSubmit = () => {
    dispatch(updateUserProfile({ userName: newUserName }));
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

    return(
        <main className="main bg-dark">
        <div className="header">
          <h1>
          Welcome back
          <br />
          {editMode ? (
            <input
              type="text"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
            />
          ) : (
            userProfile.userName
          )}
          !
        </h1>
        {!editMode && (
          <button className="edit-button" onClick={handleEdit}>
            Edit Name
          </button>
        )}
        {editMode && (
          <div>
            <button className="edit-button" onClick={handleSubmit}>
              Save
            </button>
            <button className="edit-button" onClick={handleCancel}>
              Cancel
            </button>
        </div>
        )}
      </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>

    )
     } 