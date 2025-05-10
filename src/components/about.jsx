import heroImage from "../assets/heroImg.svg";
import HeadingTitle from "./title";
import TwoBlockLayout from "./twoBlockLayout";

const AboutUs = () => {
  return (
    <div className=" max-lg:px-5 lg:px-30 py-10">
      <HeadingTitle text="About Us" />

      <TwoBlockLayout
        title="Empowering Businesses Through Smart Scalable ERP Solutions"
        desc="At BtoGo, we believe that growth shouldn't be complicated.
            Since our founding in 2010 we've been helping companies of all
            sizes simplify their operations, reduce inefficiencies, and make
            data-driven decisions with confidence. Our ERP platform is built
            with flexibility in mind — allowing you to manage everything from
            finance and inventory to HR and customer relationships in one
            seamless system. Backed by a team of industry experts and
            cutting-edge technology, we're committed to helping you stay
            ahead in an ever-changing business landscape."
        imgSrc={heroImage}
      />

      <TwoBlockLayout
        title="Why Choose Us?"
        desc="Over 14 years of ERP implementation experience, scalable for startups to enterprise-level operations, dedicated support and onboarding, specialists trusted by 100+ companies across Australia. Let us be the partner that grows with you."
        imgSrc={heroImage}
      />
    </div>
  );
};

export default AboutUs;
