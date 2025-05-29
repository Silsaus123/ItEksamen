import * as React from "react";
import "./data.css";


export default function DataTable() {
  const [leaderboard, setLeaderboard] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/")
      .then((res) => res.json())
      .then((data) => {
        setLeaderboard(data.leaderboard); // Use the new key
      })
      .catch((err) => console.error("Error fetching leaderboard:", err));
  }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>username/Player</th>
                        <th>game score count</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.userName}</td>
                            <td>{entry.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
