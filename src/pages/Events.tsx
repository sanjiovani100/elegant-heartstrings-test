import Navbar from "@/components/Navbar";
import EventHero from "@/components/events/EventHero";
import EventCalendar from "@/components/events/EventCalendar";
import EventDetails from "@/components/events/EventDetails";
import VenueInfo from "@/components/events/VenueInfo";
import EventSchedule from "@/components/events/EventSchedule";
import PastEventsGallery from "@/components/events/PastEventsGallery";
import Footer from "@/components/footer/Footer";

const Events = () => {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <EventHero />
      <EventCalendar />
      <EventDetails />
      <VenueInfo />
      <EventSchedule />
      <PastEventsGallery />
      <Footer />
    </main>
  );
};

export default Events;