import React, { useState } from "react";
import oreocake from "../assets/images/cake/oreo.png";
import oreocakeTitle from "../assets/images/cake/oreo-title.png";
import tarocake from "../assets/images/cake/taro.png";
import tarocakeTitle from "../assets/images/cake/taro-title.png";
import redbeancake from "../assets/images/cake/redbean.png";
import redbeancakeTitle from "../assets/images/cake/redbean-title.png";
import vanillacake from "../assets/images/cake/vanilla.png";
import vanillacakeTitle from "../assets/images/cake/vanilla-title.png";

const tabs = [
  {
    id: "tab1",
    labelImage: oreocake,
    labelTitleImage: oreocakeTitle,
    content: {
      image: oreocake,
      textList: [
        "Lightly sweet with a chocolatey note",
        "Real Oreo cookie bits inside",
        "A flavor loved by kids",
      ],
    },
  },
  {
    id: "tab2",
    labelImage: tarocake,
    labelTitleImage: tarocakeTitle,
    content: {
      image: tarocake,
      textList: [
        "A soft mix of sweet and savory",
        "Premium taro from Dajia, Taiwan",
        "Nature taro taste",
      ],
    },
  },
  {
    id: "tab3",
    labelImage: redbeancake,
    labelTitleImage: redbeancakeTitle,
    content: {
      image: redbeancake,
      textList: [
        "Slow-cooked for a soft, gently textured bite",
        "Made with red beans grown in Taiwane",
        "Comforting classic that never goes out of style",
      ],
    },
  },
  {
    id: "tab4",
    labelImage: vanillacake,
    labelTitleImage: vanillacakeTitle,
    content: {
      image: vanillacake,
      textList: [
        "Velvety soft, melts right in your mouth",
        "Made with real milk and a hint of vanilla",
        "A gentle favorite for all ages",
      ],
    },
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const currentContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className="relative text-center px-[120px] py-0 mb-[80px]">
      {currentContent && (
        <div
          key={activeTab}
          className="relative flex justify-center items-center bounce-in"
        >
          <img
            className="relative aspect-square w-96 h-fit md:w-72 xl:w-auto xl:max-w-[40rem] xl:left-10"
            src={currentContent.image}
            alt="nunu Wheel Cake"
          />
          <ul className="relative text-left left-4 md:text-base xl:left-20">
            {currentContent.textList.map((item, index) => (
              <li
                key={index}
                className="relative mb-10 after:content-[''] after:absolute after:bottom-[-4px] after:left-[-4px] after:w-full after:h-[1px] after:bg-dark after:opacity-30"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* 標籤 */}
      <div className="flex justify-center items-center gap-8 mt-12">
        {tabs.map((tab) => (
          <div
            className="flex flex-col justify-center items-center gap-4"
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            <img
              className="w-32 h-32"
              src={tab.labelImage}
              alt="nunu Wheel Cake"
            />
            <img
              className="labelTitle w-auto h-8"
              src={tab.labelTitleImage}
              alt="nunu Wheel Cake"
            />
            {tab.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
