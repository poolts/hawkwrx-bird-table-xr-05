
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type CapabilityProps = {
  title: string;
  description: string;
};

const Capability = ({ title, description }: CapabilityProps) => {
  return (
    <div className="border-l-4 border-hawk-accent-blue pl-4 mb-8">
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const TechCapabilities = () => {
  return (
    <section className="py-20 bg-hawk-dark-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Advanced Technical Capabilities
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              The Virtual Bird Table is built on a foundation of robust, military-grade technology, 
              designed to perform in the most demanding environments.
            </p>

            <div className="space-y-6">
              <Capability
                title="Optimized for Austere Networks"
                description="Our stacked architecture ensures high performance even with limited bandwidth, making it ideal for deployment in challenging operational environments."
              />
              <Capability
                title="Cross-Platform Support"
                description="Designed for XR devices with support for desktop, ensuring flexible access across different hardware configurations."
              />
              <Capability
                title="Full ArcGIS Support"
                description="Seamlessly integrate with ESRI ArcGIS for live dynamic mapping, layers and overlay support, providing comprehensive situational awareness."
              />
              <Capability
                title="C2 System Agnostic"
                description="Out of the box support for planning and rehearsal, easily integrating with your existing command and control systems."
              />
            </div>
          </div>

          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                <iframe 
                  src="https://player.vimeo.com/video/1078775185?h=478151ecdc&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                  title="ALT_LOGO_HAWKWRX_Presents_VBT"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-hawk-accent-blue/10 rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-hawk-accent-blue/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechCapabilities;
