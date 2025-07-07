import '../style/Cta.css';
import { useNavigate } from 'react-router-dom';
export default function Cta() {
     const navigate1 = useNavigate();

  const goToContact1 = () => {
    navigate1('/contact');}
    return (
        <>
            <div className="cta">
                <div className="cta-box">
                    <div className="cntdetail">
                        <img src="https://i.pinimg.com/736x/71/fa/ca/71faca59b3dda6383d812bc11ec48857.jpg" alt="" className="contactImg" />
                        <p className="cta-cnt">Don’t Just Save Money — Invest in Sustainability. Contact Us Today.</p> </div>
       
                <button className="ctaBtn" onClick={goToContact1}>Connect with us</button>
            </div></div>

        </>
    )
}