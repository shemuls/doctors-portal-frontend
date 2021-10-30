import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import exceDenatalImg from "../../../assets/frontend/d-1.jpg";
import appoinmentSectionImg from "../../../assets/frontend/d-2.jpg";
import Banner from "../../Banner.js";
import BlogItem from "../../BlogItem.js";
import Doctor from "../../Doctor.js";
import FancyHeading from "../../FancyHeading.js";
import HeaderFooterLayout from "../../HeaderFooterLayout.js";
import ImageNtext from "../../ImageNtext.js";
import Information from "../../Information.js";
import Service from "../../Service.js";
import TestimonialSlider from "../../TestimonialSlider.js";

export default function Home() {
  return (
    <HeaderFooterLayout>
      {/* Banner section */}
      <Banner />

      {/* Some information */}
      <section
        style={{ marginTop: "-50px", zIndex: "999", paddingBottom: "50px" }}
      >
        <Container>
          <Row>
            <Information />
          </Row>
        </Container>
      </section>

      {/* Our service section */}
      <section className="s-section-area">
        <Container>
          <Row className="mb-5">
            <Col>
              <FancyHeading
                title="Our Services"
                subTitle="Services We Provide"
              />
            </Col>
          </Row>
          <Row>
            <Service />
          </Row>
        </Container>
      </section>

      {/* Exceptional Dental section */}
      <section className="s-section-area bg-light">
        <Container>
          <ImageNtext
            imgPosition="left"
            imgSrc={exceDenatalImg}
            heading="Exceptional Dental Care, on Your Terms"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its  layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page "
            btnText="Learn More"
            btnLink="/m"
          />
        </Container>
      </section>

      {/* Get appoinment section */}
      <section className="s-section-area">
        <Container>
          <ImageNtext
            imgPosition="right"
            imgSrc={appoinmentSectionImg}
            heading="Make an appointment Today"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page "
            btnText="Get appoinment"
            btnLink="/appoinment"
          />
        </Container>
      </section>

      {/* Testiomonials section */}
      <section className="s-section-area bg-light">
        <Container>
          <Row className="mb-5">
            <FancyHeading
              title="Testimonials"
              subTitle="What’s Our Patients Says"
            />
          </Row>
          <Row>
            <TestimonialSlider />
          </Row>
        </Container>
      </section>

      {/* Blog Section */}
      <section className="s-section-area">
        <Container>
          <Row className="mb-5">
            <FancyHeading title="Our Blog" subTitle="From Our Blog News" />
          </Row>
          <Row>
            <BlogItem colPerRow={3} />
          </Row>
        </Container>
      </section>

      {/* Our doctors section */}
      <section className="s-section-area bg-light">
        <Container>
          <Row className="mb-5">
            <FancyHeading
              title="Our Doctors"
              subTitle="Meet our special doctors"
            />
          </Row>
          <Row>
            <Doctor />
          </Row>
        </Container>
      </section>
    </HeaderFooterLayout>
  );
}
