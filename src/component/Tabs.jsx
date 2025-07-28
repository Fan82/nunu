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
    <div className="relative text-center ml-10 py-4 pt-12 px-4 mb-[80px] bg-light rounded-l-3xl lg:rounded-3xl lg:ml-0 lg:p-12">
      {currentContent && currentTab && (
        <div
          key={activeTab}
          className="relative flex justify-center items-center bounce-in flex-col lg:flex-row lg:gap-8"
        >
          <img
            className="relative aspect-square w-64 h-fit md:w-96 lg:w-[30rem]"
            src={currentContent.image}
            alt="nunu Wheel Cake"
          />
          <div className="relative max-w-96">
            <div className="text-sm font-semibold capitalize md:text-lg md:text-left ">
              {currentTab.titleText}
            </div>
            {currentContent.textList.map((item, index) => (
              <p
                key={index}
                className="relative mb-2 text-sm tracking-wide text-dark md:whitespace-break-spaces md:text-left md:leading-8 md:text-base"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      )}
      {/* 標籤 */}
      <div className="flex justify-center items-center  gap-6">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          // 在小尺寸時，如果是 active tab，就不顯示
          const isHiddenOnSmall = isActive ? "sm:flex hidden" : "flex";

          return (
            <div
              className={`${isHiddenOnSmall} flex-col justify-center items-center cursor-pointer transition-opacity duration-200 ${
                isActive ? "opacity-100" : "opacity-50"
              } active:scale-40 focus:scale-40 transform transition-transform hover:opacity-70`}
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              <img
                className="w-32 h-auto aspect-square lg:w-44"
                src={tab.labelImage}
                alt={`nunu Wheel Cake ${tab.titleText}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
