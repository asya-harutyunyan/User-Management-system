import { Link } from "react-router-dom";
import classes from "./index.module.css";
import { FC } from "react";

type HomePageProps = {};

const HomePage: FC<HomePageProps> = () => {
  return (
    <div className={classes.home_page}>
      <h1 className={classes.title}>Home Page</h1>
      <p className={classes.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem qui odit
        delectus, quo, error ipsum, dolor omnis similique iure nemo aliquid
        iusto corrupti itaque! Nulla nihil placeat minus facilis provident
        maiores dolorem nam, sed cum similique tenetur sit dignissimos
        temporibus accusantium atque voluptate, quod fugit totam tempora
        incidunt, blanditiis amet. Distinctio aspernatur ducimus praesentium
        dolores totam dolor pariatur et ipsum fugit, laudantium id doloremque
        autem. Minus laboriosam aliquid magni at molestiae sapiente corrupti
        harum, quod unde ipsa recusandae quis, doloribus voluptatibus culpa,
        odio facere repellat possimus vero deserunt! Magnam enim, dolore quam
        numquam ab ipsam consectetur blanditiis illum provident tempora impedit
        odio. Repellendus eum dolore inventore iste, aperiam nemo corrupti eius,
        aspernatur accusamus similique, nisi error! Accusantium earum optio
        ipsum mollitia fugit sequi assumenda voluptate, odit qui! Incidunt saepe
        optio non, fugiat voluptatibus accusamus temporibus nihil fugit possimus
        officiis officia! Deleniti repellat totam soluta quaerat, voluptatum
        incidunt nulla velit eum.
      </p>
      <div className={classes.link}>
        <Link to="/users">Go to User Management Page </Link>
      </div>
    </div>
  );
};

export default HomePage;
