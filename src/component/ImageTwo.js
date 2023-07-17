import { Parallax } from "react-parallax";
import Na2 from "../images/na2.jpg";

const ImageOne = () => (
  <Parallax className="image" bgImage={Na2} strength={800}>
    <div className="content">
      <span className="img-txt"> a trip to space</span>
    </div>
  </Parallax>
);

export default ImageOne;
