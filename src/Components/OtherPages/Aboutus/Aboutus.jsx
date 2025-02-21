import React from 'react';
import Img1 from '../../../Assets/aboutus/banner1.png';
import Img2 from '../../../Assets/aboutus/banner2.png';
import Banner from '../Banner/Banner';

const BannerData = {
  image: Img1,
  tag: "EXPLORE THE FUTURE OF AI",
  title: "Empowering College Students with Generative AI Knowledge",
  subtitle:
    "At MarbleSlab, we conduct interactive **seminars and workshops** on Generative AI, helping students understand the potential of AI in shaping the future. Join us in unlocking new possibilities with cutting-edge technology.",
  link: "#",
};

const BannerData2 = {
  image: Img2,
  tag: "LEARN FROM AI EXPERTS",
  title: "Workshops Designed for Practical AI Learning",
  subtitle:
    "Our hands-on AI workshops allow students to explore real-world applications of Generative AI. From **AI-driven creativity** to **automated workflows**, we bring knowledge and innovation to your college campus.",
  link: "#",
};

const Aboutus = () => {
  return (
    <div className="mt-10">  {/* Added margin from the top */}
      <Banner {...BannerData} />
      <Banner {...BannerData2} reverse={true} />
    </div>
    
  );
};

export default Aboutus;
