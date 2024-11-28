import React, { useState } from 'react';
import { User } from '../User/User';
import styles from './List.module.css'; 

export const List = ({ people }) => {
  const [sortedPeople, setSortedPeople] = useState(people);

  // Sort in ascending order by first name
  const sortAscending = () => {
    const sorted = [...sortedPeople].sort((a, b) => a.first_name.localeCompare(b.first_name));
    setSortedPeople(sorted);
  };

  // Sort in descending order by first name
  const sortDescending = () => {
    const sorted = [...sortedPeople].sort((a, b) => b.first_name.localeCompare(a.first_name));
    setSortedPeople(sorted);
  };

  return (
    <section>
      <div className={styles.sort}>
        <button onClick={sortAscending}>Sort Ascending</button>
        <button onClick={sortDescending}>Sort Descending</button>
      </div>

      {/* Map through the sortedPeople array to render User components */}
      {sortedPeople.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </section>
  );
};
