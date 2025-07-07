import '../style/Review.css'
export default function Review(props) {
    return (
        <>
            <div className="review">
                <div className="review-box">
                    <div className="review-img"><img src={props.img} alt="" className="reviewProfile" /></div>
                    <div className="review-comment">
                        <p className="reviewFeedback">"{props.text}"</p>
                        <p className="user-name">{props.name}</p>
                    </div></div>
 <div className="review-box review-box1">
                    <div className="review-img"><img src={props.img1} alt="" className="reviewProfile" /></div>
                    <div className="review-comment">
                        <p className="reviewFeedback">"{props.text1}"</p>
                        <p className="user-name">{props.name1}</p>
                    </div></div>
              

            </div>

        </>
    )
}