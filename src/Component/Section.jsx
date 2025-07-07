 import '../style/Section.css';
 
 export default function(){
    const title ="Who We Are at SunRock";
    const cnt="At SunRock, we specialize in high-quality solar plate solutions designed to make clean energy accessible and reliable for everyone. With a passion for innovation and sustainability, we’re powering homes and businesses across India—one panel at a time."
    const subcnt="By combining cutting-edge technology with eco-friendly practices, we help our customers reduce electricity costs, minimize carbon footprints, and embrace a greener future. Together, we’re lighting the way to a cleaner, smarter world."
    return(
        <>
        <div className="section">
<div className="section-cnt1">
    <p className="section-headTitle">{title}</p>
</div>
<div className="section-cnt2">
    <p className="sectionCnt">{cnt}</p>
    <p className="section-SubCnt">{subcnt}</p>
    <button className="more">More</button>
</div>


        </div>
        
        </>
    )
 }