import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Discover a new way to cherish your culinary experiences and plan your next food adventure with ease."
    description="Embark on a flavorful journey and make every dining experience memorable. Whether you're exploring new spots in your city or traveling the world, Bitetrail is your trusted companion on every food adventure."
  >
    <VerticalFeatureRow
      title="Log Every Bite"
      description="Never forget that hidden gem or your favorite dish. After every meal, simply add the restaurant to your Bitetrail diary, rate your experience, jot down the amount spent, and set the date."
      image="/assets/images/bitetrail-logging.png"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Wishlist Your Tasteful Adventures"
      description="Came across a restaurant you want to try? Add it to your Bitetrail wishlist. Say goodbye to forgotten recommendations and hello to your next dining experience!"
      image="/assets/images/bitetrail-to-try-list.png"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Visualize Your Culinary Trail on a Map"
      description="With our interactive map feature, see all the restaurants you’ve visited or wish to try. Perfect for planning trips or revisiting old favorites."
      image="/assets/images/bitetrail-map.png"
      imageAlt="Third feature alt text"
    />
    <VerticalFeatureRow
      title="Dining Dashboard"
      description="Dive deep into your dining data! Check out stats on your average spending, top-rated spots, most visited categories, and more. A dashboard that speaks to the foodie in you."
      image="/assets/images/bitetrail-dashboard.png"
      imageAlt="Third feature alt text"
      reverse
    />
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-bold text-gray-900">Key Features</h2>
      <ul className="p-0 m-0 text-left">
        <li>
          <div className="mt-6 text-xl leading-9">
            <span className="font-bold">{'Custom Ratings: '}</span>
            {
              "Rate restaurants on your terms. Was it a 5-star experience or something you'd rather forget? You decide."
            }
          </div>
        </li>
        <li>
          <div className="mt-6 text-xl leading-9">
            <span className="font-bold">{'Comprehensive Visit Details: '}</span>
            {
              'Record essential details like the date of your visit, amount spent, and categories (e.g., "Italian", "Date Night", "Budget Eats").'
            }
          </div>
        </li>
        <li>
          <div className="mt-6 text-xl leading-9">
            <span className="font-bold">{'Easy-to-Use Interface: '}</span>
            {
              'Sleek, simple, and intuitive. Bitetrail is designed with the user in mind, making it a delight to use every time.'
            }
          </div>
        </li>
      </ul>
    </div>
  </Section>
);

export { VerticalFeatures };
