import { Link } from "react-router-dom";

export default function Events() {
  const EVENTS = [
    {
      id: "e1",
      title: "first Event",
    },
    {
      id: "e2",
      title: "secont Event",
    },
    {
      id: "e3",
      title: "third Event",
    },
  ];
  return (
    <>
      <h1>This is Events Page </h1>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
