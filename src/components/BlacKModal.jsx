import "./BlackModal.css";
import linkedin from "../asset/linkedIn.png";
import twitter from "../asset/twitter.png";
import youtube from "../asset/youtube.png";
import reddit from "../asset/reddit.png";

const BlackModal = () => {
  return (
    <div className="modal-black">
      {/* Social-tag */}
      <div className="social-tag">
        <div className="modal-social">
          <img src={linkedin} alt="" />
        </div>
        <div className="modal-social">
          <img src={twitter} alt="" />
        </div>
        <div className="modal-social">
          <img src={youtube} alt="" />
        </div>
      </div>
      {/* Main social Tag */}
      <div className="main-tag">
        <img src={youtube} alt="" />
        <p>Youtube</p>
      </div>
      {/* media profile */}
      <div className="media-profile">
        <div className="profile-tag">
          <img src={reddit} alt="" />
          <p style={{ color: "red", fontSize: "12px" }}>Reddit</p>
        </div>
        <div className="profile-tag">
          <img src={reddit} alt="" />
          <p style={{ color: "red", fontSize: "12px" }}>Reddit</p>
        </div>
        <div className="profile-tag">
          <img src={reddit} alt="" />
          <p style={{ color: "red", fontSize: "12px" }}>Reddit</p>
        </div>
      </div>
    </div>
  );
};

export default BlackModal;
