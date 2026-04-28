import { useState } from 'react';

const serviceIds = {
  uxUi: 'ux-ui',
  digitalMarketing: 'digital-marketing',
  equityResearch: 'equity-research',
  development: 'development',
};

export default function ServiceCategoriesSection({ badgeLabel = 'Project Category' }) {
  const [activeService, setActiveService] = useState(serviceIds.uxUi);

  function handleKey(event, id) {
    if (event.key === 'Enter' || event.key === ' ') {
      setActiveService(id);
    }
  }

  function cardClass(id) {
    const isActive = activeService === id;

    return `relative h-[212.20px] w-[322.57px] rounded-[20.41314125061035px] border border-[rgba(142,131,131,0.35)] cursor-pointer ${
      isActive ? 'bg-[rgba(1,97,254,1.00)]' : 'bg-white'
    }`;
  }

  function titleClass(id) {
    const isActive = activeService === id;

    return `whitespace-nowrap bg-clip-text text-transparent not-italic text-[18.0px] font-normal leading-[24.00px] capitalize ${
      isActive ? 'bg-white' : 'bg-[rgba(1,97,254,1.00)]'
    }`;
  }

  function descriptionClass(id) {
    const isActive = activeService === id;

    return `bg-clip-text text-transparent not-italic text-[16.0px] font-normal leading-[22.00px] ${
      isActive ? 'bg-[rgba(255,255,255,0.80)]' : 'bg-[rgba(109,109,110,0.80)]'
    }`;
  }

  return (
    <div
      id="service-categories-section"
      className="relative mx-auto mt-6 h-[503.00px] w-full max-w-[1420px] overflow-hidden rounded-[20.41314125061035px] bg-[rgba(246,247,249,1.00)]"
    >
      <div
        id="service-categories-border"
        className="absolute left-[50%] top-[calc(50%-202.50px)] flex h-[36.50px] w-fit -translate-x-1/2 items-center justify-center rounded-[204.1089324951172px] border border-[#202833] px-[20px]"
      >
        <span className="flex items-center justify-center text-center">
          <span className="whitespace-nowrap bg-[rgba(32,40,51,1.00)] bg-clip-text text-transparent not-italic text-[14.0px] font-medium uppercase leading-[18.00px] tracking-[1.7862435579299927px]">
            {badgeLabel}
          </span>
        </span>
      </div>

      <span className="absolute left-[calc(50%-232.45px)] top-[118.00px] flex h-[72.00px] w-[466.00px] items-center justify-center text-center">
        <span className="bg-[rgba(17,17,17,1.00)] bg-clip-text text-center text-[36.0px] font-normal leading-[42.00px] text-transparent not-italic">
          Explore My Core Service Categories
        </span>
      </span>

      <div
        id="service-categories-cards"
        role="tablist"
        aria-label="Service categories"
        className="absolute left-[42.00px] top-[240.00px] flex h-[213.20px] w-[1336.32px] flex-row flex-nowrap items-center justify-start gap-3.5"
      >
        <div
          role="tab"
          tabIndex={0}
          aria-selected={activeService === serviceIds.uxUi}
          onClick={() => setActiveService(serviceIds.uxUi)}
          onKeyDown={(event) => handleKey(event, serviceIds.uxUi)}
          className={cardClass(serviceIds.uxUi)}
        >
          <div className="absolute left-[calc(50%-19.04px)] top-[calc(50%-62.38px)] h-[38.10px] w-[38.10px]">
            <img
              src="/assets/Home/images/vector_5.svg"
              alt="Vector"
              className="absolute left-[calc(100%_*_0.01)]"
            />
            <img
              src="/assets/Home/images/vector_6.svg"
              alt="Vector"
              className="absolute left-[calc(50%-8.24px)] top-[calc(50%-8.50px)]"
            />
          </div>
          <span className="absolute left-[calc(50%-33.39px)] top-[108.02px] flex h-[20.00px] w-[67.00px] items-center justify-center text-center">
            <span className={titleClass(serviceIds.uxUi)}>UX/UI</span>
          </span>
          <span className="absolute left-[calc(50%-118.23px)] top-[139.90px] flex h-[39.00px] w-[236.00px] items-center justify-center text-center">
            <span className={descriptionClass(serviceIds.uxUi)}>
              Designing intuitive experiences that elevate your brand.
            </span>
          </span>
        </div>

        <div
          role="tab"
          tabIndex={0}
          aria-selected={activeService === serviceIds.digitalMarketing}
          onClick={() => setActiveService(serviceIds.digitalMarketing)}
          onKeyDown={(event) => handleKey(event, serviceIds.digitalMarketing)}
          className={cardClass(serviceIds.digitalMarketing)}
        >
          <div className="absolute left-[calc(50%-19.05px)] top-[calc(50%-62.59px)] h-[38.10px] w-[38.10px]">
            <img
              src="/assets/Home/images/vector_7.svg"
              alt="Vector"
              className="absolute left-[calc(100%_*_0.01)]"
            />
            <div className="absolute left-[11.64px] top-[11.75px] h-[14.58px] w-[14.48px]">
              <img
                src="/assets/Home/images/vector_8.svg"
                alt="Vector"
                className="absolute left-[calc(100%_*_0.84)] top-[calc(100%_*_0.58)]"
              />
              <img
                src="/assets/Home/images/vector_9.svg"
                alt="Vector"
                className="absolute top-[calc(100%_*_0.26)]"
              />
              <img
                src="/assets/Home/images/vector_10.svg"
                alt="Vector"
                className="absolute left-[calc(100%_*_0.28)]"
              />
            </div>
          </div>
          <span className="absolute left-[calc(50%-63.81px)] top-[107.90px] flex h-[20.00px] w-[128.00px] items-center justify-center text-center">
            <span className={titleClass(serviceIds.digitalMarketing)}>
              Digital Marketing
            </span>
          </span>
          <span className="absolute left-[calc(50%-128.81px)] top-[139.77px] flex h-[44.00px] w-[258.00px] items-center justify-center text-center">
            <span className={descriptionClass(serviceIds.digitalMarketing)}>
              Building smart campaigns that connect you with customers.
            </span>
          </span>
        </div>

        <div
          role="tab"
          tabIndex={0}
          aria-selected={activeService === serviceIds.equityResearch}
          onClick={() => setActiveService(serviceIds.equityResearch)}
          onKeyDown={(event) => handleKey(event, serviceIds.equityResearch)}
          className={cardClass(serviceIds.equityResearch)}
        >
          <div className="absolute left-[calc(50%-18.59px)] top-[calc(50%-62.59px)] h-[38.10px] w-[38.10px]">
            <div className="absolute top-[calc(100%_*_0.01)] h-[98.91%] w-[98.91%]">
              <img src="/assets/Home/images/vector_11.svg" alt="Vector" className="absolute" />
              <img
                src="/assets/Home/images/vector_12.svg"
                alt="Vector"
                className="absolute left-[calc(100%_*_0.28)] top-[calc(100%_*_0.67)]"
              />
              <img
                src="/assets/Home/images/vector_13.svg"
                alt="Vector"
                className="absolute left-[calc(100%_*_0.45)] top-[calc(100%_*_0.30)]"
              />
              <img
                src="/assets/Home/images/vector_14.svg"
                alt="Vector"
                className="absolute left-[calc(100%_*_0.32)] top-[calc(100%_*_0.42)]"
              />
              <img
                src="/assets/Home/images/vector_15.svg"
                alt="Vector"
                className="absolute left-[calc(100%_*_0.60)] top-[calc(100%_*_0.52)]"
              />
            </div>
          </div>
          <span className="absolute left-[calc(50%-94.39px)] top-[107.90px] flex h-[20.00px] w-[188.00px] items-center justify-center text-center">
            <span className={titleClass(serviceIds.equityResearch)}>
              Equity Research Analysis
            </span>
          </span>
          <span className="absolute left-[calc(50%-115.39px)] top-[142.77px] flex h-[39.00px] w-[231.00px] items-center justify-center text-center">
            <span className={descriptionClass(serviceIds.equityResearch)}>
              Delivering data-driven insights to strengthen decisions.
            </span>
          </span>
        </div>

        <div
          role="tab"
          tabIndex={0}
          aria-selected={activeService === serviceIds.development}
          onClick={() => setActiveService(serviceIds.development)}
          onKeyDown={(event) => handleKey(event, serviceIds.development)}
          className={cardClass(serviceIds.development)}
        >
          <div className="absolute left-[calc(50%-19.05px)] top-[calc(50%-62.59px)] h-[38.10px] w-[38.10px]">
            <div className="absolute left-[0.38px] top-[0.34px] h-[37.68px] w-[37.68px]">
              <img src="/assets/Home/images/vector_16.svg" alt="Vector" className="absolute" />
              <img
                src="/assets/Home/images/vector_17.svg"
                alt="Vector"
                className="absolute left-[calc(100%_*_0.26)] top-[calc(100%_*_0.28)]"
              />
            </div>
          </div>
          <span className="absolute left-[calc(50%-98.77px)] top-[107.90px] flex h-[20.00px] w-[198.00px] items-center justify-center text-center">
            <span className={titleClass(serviceIds.development)}>
              Full-Stack Developement
            </span>
          </span>
          <span className="absolute left-[calc(50%-126.77px)] top-[142.77px] flex h-[43.00px] w-[254.00px] items-center justify-center text-center">
            <span className={descriptionClass(serviceIds.development)}>
              Creating reliable systems that support your business growth.
            </span>
          </span>
          <img
            src="/assets/Home/images/team.png"
            alt="Team"
            className="absolute left-[calc(55%-31px+100.03px)] top-[15.77px] h-[28.00px] w-[62.00px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
