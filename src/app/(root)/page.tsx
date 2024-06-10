import HeaderBox from "@/components/LandingPage/Hero/HeaderBox";
import TotalBalanceBox from "@/components/LandingPage/Hero/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Islam" };
  return (
    <section className="home">
      <div className="home-content">
        <HeaderBox
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext="Access and manage your account and transactions efficiently."
        />
        <TotalBalanceBox
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
        />
      </div>
    </section>
  );
};

export default Home;
