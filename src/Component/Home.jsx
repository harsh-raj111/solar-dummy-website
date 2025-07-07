import image1 from "../Resource/pexels-h-o-m-a-d-3758008-5579195.jpg";

import { useNavigate } from 'react-router-dom';
export default function Home() {
    const box1Title = "Power up with smart, clean solar, because saving the planet should feel as good as it looks.";
    const box1subtitle = "Sustainable energy solutions made easy, reliable, and tailor-made for Europe.";
 const navigate = useNavigate();

  const goToContact = () => {
    navigate('/contact');
  };
    return (
        <> <div className="render">
            <div className="home">
                <div className="home-box box1">
                    <h1 className="box1-title" >{box1Title}</h1>
                    <h2 className="box1-subtitle">{box1subtitle}</h2>
                    <div className="homebtn">
                        <span className="homebtn-cnt">Let's solar solution</span> <button  onClick={goToContact}className="home-button">→</button>
                    </div>
                </div>
                <div className="home-box box2" style={{
                    backgroundImage: `url(${image1})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}></div>
              
            </div>

        </div>

        </>
    )
}