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
    <div className="content-box relative">
      {currentContent && (
        <div key={activeTab} className="tab-content bounce-in">
          <img src={currentContent.image} alt="nunu Wheel Cake" />
          <ul className="absolute center">
            {currentContent.textList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {/* 標籤 */}
      <div className="tab-list">
        {tabs.map((tab) => (
          <div key={tab.id} onClick={() => setActiveTab(tab.id)}>
            <img src={tab.labelImage} alt="nunu Wheel Cake" />
            <img
              className="labelTitle"
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
