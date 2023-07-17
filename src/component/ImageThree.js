import { Parallax } from "react-parallax";
import Na3 from "../images/na3.jpg";

const ImageOne = () => (
  <Parallax className="image" bgImage={Na3} strength={800}>
    <div className="content">
      <span className="img-txt"> a trip to space</span>
    </div>
  </Parallax>
);

export default ImageOne;
