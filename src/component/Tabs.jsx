import React, { useState } from "react";
import oreocake from "../assets/images/cake/oreo.png";
// import oreocakeTitle from "../assets/images/cake/oreo-title.png";
import tarocake from "../assets/images/cake/taro.png";
// import tarocakeTitle from "../assets/images/cake/taro-title.png";
import redbeancake from "../assets/images/cake/redbean.png";
// import redbeancakeTitle from "../assets/images/cake/redbean-title.png";
import vanillacake from "../assets/images/cake/vanilla.png";
// import vanillacakeTitle from "../assets/images/cake/vanilla-title.png";

const tabs = [
  {
    id: "tab1",
    labelImage: oreocake,
    // labelTitleImage: oreocakeTitle,
    titleText: "oreo",
    content: {
      image: oreocake,
      textList: [
        "Crunchy Oreo cookies paired with cream, every bite feels like dancing on clouds !",
      ],
    },
  },
  {
    id: "tab2",
    labelImage: tarocake,
    // labelTitleImage: tarocakeTitle,
    titleText: "taro",
    content: {
      image: tarocake,
      textList: [
        "Smooth and sweet taro filling melts softly in your mouth, making you fall in love instantly !",
      ],
    },
  },
  {
    id: "tab3",
    labelImage: redbeancake,
    // labelTitleImage: redbeancakeTitle,
    titleText: "red bean",
    content: {
      image: redbeancake,
      textList: [
        "Smooth, lightly sweet red bean filling brings back cozy childhood memories in every bite !",
      ],
    },
  },
  {
    id: "tab4",
    labelImage: vanillacake,
    // labelTitleImage: vanillacakeTitle,
    titleText: "Vanilla",
    content: {
      image: vanillacake,
      textList: [
        "The classic aroma of vanilla meets a silky - smooth filling — simple, timeless, and utterly satisfying !",
      ],
    },
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  // 找出目前被選中的 tab 完整物件
  const currentTab = tabs.find((tab) => tab.id === activeTab);

  // 從 currentTab 取出 content
  const currentContent = currentTab?.content;

  return (
    <div className="relative text-center ml-10 py-4 px-4 mb-[80px] bg-light rounded-l-3xl md:px-[120px]">
      {currentContent && currentTab && (
        <div
          key={activeTab}
          className="relative flex justify-center flex-col items-center bounce-in"
        >
          <img
            className="relative aspect-square w-64 h-fit md:w-72 xl:w-auto xl:max-w-[40rem] xl:left-10"
            src={currentContent.image}
            alt="nunu Wheel Cake"
          />
          <div className="relative">
            <div className="text-sm font-semibold capitalize">
              {currentTab.titleText}
            </div>
            {currentContent.textList.map((item, index) => (
              <p
                key={index}
                className="relative mb-2 text-xs/5 tracking-wide text-dark"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      )}
      {/* 標籤 */}
      <div className="flex justify-center items-center gap-4">
        {tabs.map((tab) => (
          <div
            className="flex flex-col justify-center items-center cursor-pointer"
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            <img
              className="w-32 h-auto aspect-square"
              src={tab.labelImage}
              alt="nunu Wheel Cake"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
