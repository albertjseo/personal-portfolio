import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
    return (
        <Col sm={4} md={5}>
            <div className="project-imgbx">
                <img src={imgUrl} alt="Project Image" className="project-card"/>
                <div className="project-text">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}