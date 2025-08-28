import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { DemoHeroGeometric } from "./components/DemoHeroGeometric";
import Process from "./components/Process";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"15min"});
		cal("floatingButton", {"calLink":"optiq/15min","config":{"layout":"month_view"},"buttonColor":"#2564eb","buttonPosition":"bottom-left","buttonText":"Quick Chat?"});
		cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="optiq-ui-theme">
      <div className="min-h-screen">
        <Header />
        <main>
          <DemoHeroGeometric />
          <Process />
          <Services />
          <Technologies />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
