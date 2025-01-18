import HomePage from "@/pages/index";
import AboutPage from "@/pages/about/index";
import EventsPage from "@/pages/events/index";
import SchedulePage from "@/pages/schedule/index";
import TicketsPage from "@/pages/tickets/index";
import DesignersPage from "@/pages/designers/index";
import SponsorsPage from "@/pages/sponsors/index";
import ModelsPage from "@/pages/models/index";
import ContactPage from "@/pages/contact/index";
import FAQPage from "@/pages/faqs/index";
import SponsorshipApplicationPage from "@/pages/sponsors/Apply";
import { PublicLayout } from "@/components/layouts/PublicLayout";

export const publicRoutes = {
  element: <PublicLayout />,
  children: [
    { index: true, element: <HomePage /> },
    { path: "about", element: <AboutPage /> },
    { path: "events", element: <EventsPage /> },
    { path: "schedule", element: <SchedulePage /> },
    { path: "tickets", element: <TicketsPage /> },
    { path: "designers", element: <DesignersPage /> },
    { path: "sponsors", element: <SponsorsPage /> },
    { path: "sponsors/apply", element: <SponsorshipApplicationPage /> },
    { path: "models", element: <ModelsPage /> },
    { path: "contact", element: <ContactPage /> },
    { path: "faqs", element: <FAQPage /> },
  ],
};