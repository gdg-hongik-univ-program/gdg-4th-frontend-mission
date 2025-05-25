import React from 'react';

const PromoCard = ({ title, description, buttonText, onButtonClick, icon, imageSrc }) => (
  <div className="bg-skyscanner-surface p-5 rounded-lg shadow-lg mb-6 text-center">
    {icon && <div className="text-3xl text-skyscanner-primary mb-3">{icon}</div>}
    {imageSrc && <img src={imageSrc} alt={title} className="mx-auto mb-3 h-20 object-contain" />}
    <h3 className="text-md font-semibold text-skyscanner-text mb-2">{title}</h3>
    <p className="text-xs text-skyscanner-text-light mb-4 leading-relaxed">{description}</p>
    <button
      onClick={onButtonClick}
      className="w-full bg-skyscanner-dark-blue hover:bg-opacity-80 text-white font-medium py-2.5 px-4 rounded-md transition-colors duration-150 text-sm"
    >
      {buttonText}
    </button>
  </div>
);

const SidePromotions = () => {
  return (
    <aside>
      <PromoCard
        icon="🏨" 
        title="광고 안할래요?"
        description="저한테 광고맡겨주실래요?."
        onButtonClick={() => alert('광고 하실?')}
      />
      <PromoCard
        imageSrc="https://content.skyscnr.com/m/35050628238016a7/original/image_ECO-9136-Car-Hire-Dark-Blue-Illustration-Homepage-Tile-800x800.png?crop=300px:300px&quality=75" // 예시 이미지
        title="광고해드립니다 광고맡겨주세요싸게해드릴게요"
        description="제발요 광고주님."
        buttonText="진짜입니다."
        onButtonClick={() => alert('렌터카 요금 보기 클릭!')}
      />
    </aside>
  );
};
export default SidePromotions;