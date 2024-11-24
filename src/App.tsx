import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Services from "./components/Services";
import Technologies from "./components/Technologies";

function App() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("floatingButton", {
        calLink: "optiq/15min",
        config: { layout: "month_view", theme: "light" },
        buttonText: "Quick chat?",
        buttonColor: "#2564eb",
      });
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Process />
        <Services />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
