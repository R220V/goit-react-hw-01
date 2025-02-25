import './App.module.css'

import Profile from '../Profile/Profile';
import userData from "../../consigs/userData.json";

import FriendList from "../FriendList/FriendList"
import friends from "../../consigs/FriendList.json"

import TransactionHistory from "../TransactionHistory/TransactionHistory"
import transactions from "../../consigs/TransactionHistory.json"

export default function App() {
  return (
    <>
    <h1>React-hw-01</h1>
    <h2>"Profile"</h2>
      <Profile profile={userData}
        // name={userData.username}
        // tag={userData.tag}
        // location={userData.location}
        // image={userData.avatar}
        // stats={userData.stats}
      />
      <h2>"Friends"</h2>
      <FriendList friends={friends} />
      <h2>"Transactions"</h2>
      <TransactionHistory items={transactions} />
    </>
  );
}
