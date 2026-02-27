import SectionHeading from "@/components/Helper/SectionHeading";
import { highlights, stats } from "@/data";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="py-16 bg-gray-100 dark:bg-gray-900">
      {/* Section heading */}
      <SectionHeading
        title_1="O"
        title_2="Mnie"
        description="Poznaj mnie — twórcę projektów"
      />
      <div className="grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden p-2">
            <Image
              src={"/images/user.png"}
              alt="profile"
              width={700}
              height={700}
              className="w-full h-full object-top object-cover rounded-xl"
            />
          </div>
        </div>
        {/* Content */}
        <div
          data-aos="fade-left"
          data-aos-delay="150"
          data-aos-anchor-placement="top-center"
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold">
            Kreatywny deweloper z pasją do kodu
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Frontend Developer z 3+ latami doświadczenia w tworzeniu
            customowych, responsywnych interfejsów webowych. Tworzę modularne
            komponenty UI w JavaScript (ES6+) i Tailwind CSS, implementuję
            dynamiczne funkcjonalności oraz integruję je z CMS (WordPress,
            WooCommerce). Współpracuję z zespołem przy rozwoju i refaktoryzacji
            istniejących projektów.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Posiadam praktyczne doświadczenie w React, Next.js i TypeScript,
            zdobyte w projektach osobistych. Tworzę skalowalne, modularne
            interfejsy, stosuję nowoczesne biblioteki i najlepsze praktyki
            ekosystemu React. Moje portfolio i projekty pokazują praktyczne
            zastosowanie tych technologii w pełnych, funkcjonalnych interfejsach
            webowych.
          </p>
          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {highlights.map((item) => {
              return (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Stats */}
      <div className="mt-16 w-[80%] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            return (
              <div
                data-aos="zoom-in"
                data-aos-delay="250"
                data-aos-anchor-placement="top-center"
                key={stat.label}
                className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
