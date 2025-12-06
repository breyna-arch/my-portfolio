import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="about">
        <h1>About Me</h1>
        <p>
          I’m a Computer Science student with hands-on experience in data systems,
          IoT integrations, and cloud infrastructure. At Veritel Energy, I work
          with platforms like Grafana, InfluxDB, Home Assistant, and AWS to collect,
          visualize, and analyze energy data from solar and smart home devices.
          My academic work deepens my understanding of systems, networking, and
          software design, while my passion for ultrarunning fuels my drive for
          consistency, endurance, and growth — both on the trail and in my
          technical career.
        </p>
        <Link to="/foodblog">Visit my Food Blog</Link>
      </div>

    </>
  );
}
