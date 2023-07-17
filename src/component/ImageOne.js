import { Parallax } from "react-parallax";
import Na1 from "../images/na1.jpg";

const ImageOne = () => (
  <Parallax className="image" bgImage={Na1} strength={800}>
    <div className="content">
      <span className="img-txt"> a trip to space</span>
    </div>
  </Parallax>
);

export default ImageOne;
