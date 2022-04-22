import React from "react";
import bizInsiderImg from './images/bizinsider.png';
import mashableImg from './images/mashable.png';
import techCrunchImg from './images/TechCrunch.png';
import tnwImg from './images/tnw.png';

const Press = () => {
  return (
    <section id="press">
      <img class="press-logo" src={techCrunchImg} alt="tc-logo" />
      <img class="press-logo" src={tnwImg} alt="tnw-logo" />
      <img
        class="press-logo"
        src={bizInsiderImg}
        alt="biz-insider-logo"
      />
      <img class="press-logo" src={mashableImg} alt="mashable-logo" />
    </section>
  );
};
export default Press;