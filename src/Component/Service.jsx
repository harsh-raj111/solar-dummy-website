import "../style/Service.css";
import image1 from '../Resource/pexels-cristian-rojas-8853511.jpg';
import image2 from '../Resource/pexels-h-o-m-a-d-3758008-5579195.jpg';
import image3 from '../Resource/pexels-kindelmedia-9800101.jpg';
import image4 from '../Resource/pexels-nc-farm-bureau-mark-15751124.jpg';

export default function Service() {
  return (
    <div className="service">
      <div className="service-title">
        <h1 className="servicetitle">Explore Our Facilities</h1>
        <button className="servicebtn">View All</button>
      </div>

      <div className="serviceCard">
        <div
          className="serviceCard-Box"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <div className="service-boxItems">
            <button className="boxbtn">view more</button>
            <p className="boxCnt"><span className="bold">Residential Solar Solutions</span><br/>Power your home with clean, renewable energy and reduce your electricity bills.</p>
          </div>
        </div>

        <div
          className="serviceCard-Box"
          style={{ backgroundImage: `url(${image2})` }}
        >
          <div className="service-boxItems">
            <button className="boxbtn">view more</button>
            <p className="boxCnt"><span className="bold">Small Industrial Installations</span>Affordable solar systems tailored for workshops, small factories, and local businesses.</p>
          </div>
        </div>

        <div
          className="serviceCard-Box"
          style={{ backgroundImage: `url(${image3})` }}
        >
          <div className="service-boxItems">
            <button className="boxbtn">view more</button>
            <p className="boxCnt"><span className="bold">Customized Solar Kits</span>Pre-designed solar kits perfect for homes, shops, and rural areas—easy to install and maintain.</p>
          </div>
        </div>

        <div
          className="serviceCard-Box"
          style={{ backgroundImage: `url(${image4})` }}
        >
          <div className="service-boxItems">
            <button className="boxbtn">view more</button>
            <p className="boxCnt"><span className="bold">Battery Backup & Storage</span><br/>Store excess solar energy with our reliable battery solutions—stay powered even at night.</p>
          </div>
        </div>
      </div>

      <div className="serviceinfo">
        <p className="info-cnt">We offer best-in-class services with modern equipment and eco-friendly solutions tailored for your needs.</p>
      </div>
    </div>
  );
}
