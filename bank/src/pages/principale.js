import HeroSection from '../HeroSection/HeroSection';
import FeatureItem from '../FeatureItem/FeatureItem';
import './principale.css';
import iconchat from '../img/icon-chat.png';
import money from '../img/icon-money.png';
import security from '../img/icon-security.png';
const HomePage = () => {
  return (
      <main>
        <HeroSection />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <FeatureItem
            icon={iconchat}
            title="You are our #1 priority"
            description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          />
          <FeatureItem
            icon={money}
            title="More savings means higher rates"
            description="The more you save with us, the higher your interest rate will be!"
          />
          <FeatureItem
            icon={security}
            title="Security you can trust"
            description="We use top of the line encryption to make sure your data and money is always safe."
          />
        </section>
      </main>
  );
}

export default HomePage;
