import { Col } from "react-bootstrap";

export const PublicationCard = ({ title, imgUrl }) => {
  return (
    <Col sm={6} md={6}>
      <div className="publication-imgbx">
        <img
          src={imgUrl}
          alt={title}
          className="publication-card"
        />
        <div className="publication-text">
          <h4>{title}</h4>
        </div>
      </div>
    </Col>
  );
};
