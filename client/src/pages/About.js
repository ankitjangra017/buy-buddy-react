import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Buy Buddy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Buy Buddy: Your Ultimate Shopping Companion

Discover a seamless shopping experience with Buy Buddy, the eCommerce app designed to make your online shopping effortless and enjoyable. Whether you're searching for the latest fashion, electronics, home essentials, or unique gifts, Buy Buddy has you covered with an extensive range of products from trusted sellers.

Key Features:

User-Friendly Interface: Navigate through our intuitive and clean design that makes finding and purchasing items a breeze.
{/* Personalized Recommendations: Get tailored product suggestions based on your browsing history and preferences, ensuring you never miss out on items you'll love. */}
Secure Transactions: Shop with confidence knowing that your personal information and payment details are protected with state-of-the-art security measures.
Fast and Reliable Shipping: Enjoy prompt delivery services with real-time tracking, so you always know when to expect your order.
{/* Customer Reviews and Ratings: Make informed decisions with honest feedback from other buyers and detailed product reviews.
Easy Returns and Exchanges: Experience hassle-free returns and exchanges if your purchase doesn’t meet your expectations. */}
Why Choose Buy Buddy?

With Buy Buddy, shopping is more than just a transaction—it's a personalized experience designed to save you time and enhance your shopping pleasure. Our commitment to customer satisfaction and a wide selection of products ensures you get the best value every time you shop.


Download Buy Buddy today and let your shopping adventure begin!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
