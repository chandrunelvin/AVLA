import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function SiteFooter() {
  const navigate = useNavigate();
  useLocation();
  const [email, setEmail] = useState('');

  const go = (path) => {
    navigate(path);
  };

  const handleKey = (event, path) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(path);
    }
  };

  const subscribe = () => {
    if (!email) {
      return;
    }

    console.log('Subscribed email:', email);

    try {
      alert(`Subscribed: ${email}`);
    } catch {
      // Keep the footer working in environments where alert is blocked.
    }

    setEmail('');
  };

  return (
    <div
      id="Footer"
      className="relative mx-auto mt-6 h-[361.28px] w-[1420px] shrink-0 overflow-hidden"
    >
      <div
        id="Footer__Background"
        className="absolute left-[0.00px] top-[0.00px] h-[361.28px] w-[calc(100%+-0.00px)] rounded-[20px] bg-[rgba(35,35,35,1.00)]"
      >
        <span
          id="Footer__Subscribe_to_our_new"
          className="absolute left-[51.00px] top-[141.00px] flex h-[25.00px] w-[262.00px] items-center justify-start text-left"
        >
          <span className="whitespace-nowrap bg-white bg-clip-text text-[22.0px] font-normal leading-[28.00px] text-transparent not-italic">
            Subscribe to our news later
          </span>
        </span>

        <div
          id="Footer__Form_Email_Form"
          className="absolute left-[50.62px] top-[179.80px] h-[39.45px] w-[calc(100%-1113.48px)]"
        >
          <div
            id="Footer__Input_1"
            className="absolute left-[0.00px] top-[calc(50%-18.71px)] h-[37.42px] w-[calc(100%-106.76px)] overflow-hidden rounded-[204.10891723632812px] bg-[rgba(255,255,255,0.10)]"
          >
            <div
              id="Footer__Container"
              className="absolute left-[20.41px] top-[12.34px] h-[12.75px] w-[calc(100%-40.82px)] overflow-hidden"
            >
              <input
                id="Footer__Enter_your_email"
                aria-label="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                className="absolute left-[-0.03px] top-[0.02px] h-[13px] w-full border-0 bg-transparent text-[14.0px] font-medium text-[rgba(153,153,153,1.00)] outline-none placeholder:text-[rgba(153,153,153,1.00)]"
              />
            </div>
          </div>

          <div
            id="Footer__Input_2"
            role="button"
            tabIndex={0}
            onClick={subscribe}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                subscribe();
              }
            }}
            className="absolute left-[208.38px] top-[calc(50%-19.35px)] h-[39.00px] w-[103.00px] cursor-pointer overflow-hidden rounded-[85.04350280761719px] bg-[rgba(1,97,254,1.00)]"
          >
            <span
              id="Footer__Subscribe"
              className="absolute left-[calc(50%-31.50px)] top-[calc(50%-7.50px)] flex h-[15.00px] w-[63.00px] items-center justify-center text-center"
            >
              <span className="whitespace-nowrap bg-white bg-clip-text text-[14.0px] font-medium leading-[18.00px] text-transparent not-italic">
                Subscribe
              </span>
            </span>
          </div>
        </div>

        <div
          id="Footer__Frame_14"
          className="absolute right-[450.00px] top-[50.16px] h-[204.00px] w-[130px]"
        >
          <div
            id="Footer__Link_Home"
            className="absolute left-[0.00px] top-[0.00px] h-[40.80px] w-[calc(100%+-0.00px)] opacity-70"
          >
            <span
              id="Footer__Home"
              role="button"
              tabIndex={0}
              onClick={() => go('/')}
              onKeyDown={(event) => handleKey(event, '/')}
              className="absolute left-[0px] top-[11.84px] flex h-[16.00px] w-[69.00px] cursor-pointer items-center justify-start text-left"
            >
              <span className="whitespace-nowrap bg-white bg-clip-text text-[16.0px] font-normal leading-[20.41px] text-transparent not-italic">
                Home
              </span>
            </span>
          </div>

          <div
            id="Footer__Link_About"
            className="absolute left-[0.00px] top-[54.40px] h-[40.80px] w-[calc(100%+-0.00px)] opacity-70"
          >
            <span
              id="Footer__About"
              role="button"
              tabIndex={0}
              onClick={() => go('/about')}
              onKeyDown={(event) => handleKey(event, '/about')}
              className="absolute left-[0px] top-[11.44px] flex h-[17.00px] w-[73.00px] cursor-pointer items-center justify-start text-left"
            >
              <span className="whitespace-nowrap bg-white bg-clip-text text-[16.0px] font-normal leading-[20.41px] text-transparent not-italic">
                About
              </span>
            </span>
          </div>

          <div
            id="Footer__Link_Service"
            className="absolute left-[0.00px] top-[108.80px] h-[40.80px] w-[calc(100%+-0.00px)] opacity-70"
          >
            <span
              id="Footer__Service"
              role="button"
              tabIndex={0}
              onClick={() => go('/products')}
              onKeyDown={(event) => handleKey(event, '/products')}
              className="absolute left-[0px] top-[12.03px] flex h-[16.00px] w-[73.00px] cursor-pointer items-center justify-start text-left"
            >
              <span className="whitespace-nowrap bg-white bg-clip-text text-[16.0px] font-normal leading-[20.41px] text-transparent not-italic">
                Service
              </span>
            </span>
          </div>

          <div
            id="Footer__Link_Blog"
            className="absolute left-[0.00px] top-[163.20px] h-[40.80px] w-[calc(100%+-0.00px)] opacity-70"
          >
            <span
              id="Footer__Blog"
              role="button"
              tabIndex={0}
              onClick={() => go('/blog')}
              onKeyDown={(event) => handleKey(event, '/blog')}
              className="absolute left-[0px] top-[11.64px] flex h-[17.00px] w-[34.00px] cursor-pointer items-center justify-start text-left"
            >
              <span className="whitespace-nowrap bg-white bg-clip-text text-[16.0px] font-normal leading-[20.41px] text-transparent not-italic">
                Blog
              </span>
            </span>
          </div>
        </div>

        <div
          id="Footer__Link_UXUI"
          className="absolute right-[250.00px] top-[50.16px] h-[40.80px] w-[150px] opacity-70"
        >
          <span
            id="Footer__UX_UI"
            className="absolute left-[0px] top-[11.84px] flex h-[16.00px] w-[69.00px] items-center justify-start text-left"
          >
            <span className="whitespace-nowrap bg-white bg-clip-text text-[16.0px] font-normal leading-[20.41px] text-transparent not-italic">
              UX/UI
            </span>
          </span>
        </div>

        <div
          id="Footer__Link_DigitalMarketing"
          className="absolute right-[250.00px] top-[104.30px] h-[41.00px] w-[150px] opacity-70"
        >
          <span
            id="Footer__Digital_Marketing"
            className="absolute left-[0px] top-[11.70px] flex h-[16.00px] w-[129.00px] items-center justify-start text-left"
          >
            <span className="whitespace-nowrap bg-white bg-clip-text text-[16.0px] font-normal leading-[20.41px] text-transparent not-italic">
              Digital Marketing
            </span>
          </span>
        </div>

        <div
          id="Footer__Link_EquityResearch"
          className="absolute right-[250.00px] top-[159.30px] h-[40.00px] w-[150px] opacity-70"
        >
          <span
            id="Footer__Equity_Research"
            className="absolute left-[0px] top-[11.70px] flex h-[16.00px] w-[128.00px] items-center justify-start text-left"
          >
            <span className="whitespace-nowrap bg-white bg-clip-text text-[16.0px] font-normal leading-[20.41px] text-transparent not-italic">
              Equity Research
            </span>
          </span>
        </div>

        <div
          id="Footer__Link_Development"
          className="absolute right-[250.00px] top-[213.37px] h-[40.80px] w-[150px] opacity-70"
        >
          <span
            id="Footer__Development"
            className="absolute left-[0px] top-[11.63px] flex h-[16.00px] w-[109.00px] items-center justify-start text-left"
          >
            <span className="whitespace-nowrap bg-white bg-clip-text text-[16.0px] font-normal leading-[20.41px] text-transparent not-italic">
              Developement
            </span>
          </span>
        </div>

        <div
          id="Footer__Link_MyRameswaramTrip"
          className="absolute right-[50.00px] top-[50.16px] h-[41.00px] w-[160px] opacity-70"
        >
          <span
            id="Footer__MyRameswaramTrip"
            className="absolute left-[0px] top-[11.84px] flex h-[16.00px] w-[155.00px] items-center justify-start text-left"
          >
            <span className="whitespace-nowrap bg-white bg-clip-text text-[16.0px] font-normal leading-[20.41px] text-transparent not-italic">
              MyRameswaramTrip
            </span>
          </span>
        </div>

        <div
          id="Footer__Link_Seafsoft"
          className="absolute right-[50.00px] top-[104.42px] h-[40.80px] w-[160px] opacity-70"
        >
          <span
            id="Footer__Seafsoft"
            className="absolute left-[0px] top-[11.58px] flex h-[17.00px] w-[87.00px] items-center justify-start text-left"
          >
            <span className="whitespace-nowrap bg-white bg-clip-text text-[16.0px] font-normal leading-[20.41px] text-transparent not-italic">
              Seafsoft
            </span>
          </span>
        </div>

        <div
          id="Footer__Link_Contact"
          className="absolute right-[50.00px] top-[158.83px] h-[40.80px] w-[160px] opacity-70"
        >
          <span
            id="Footer__Contact"
            role="button"
            tabIndex={0}
            onClick={() => go('/contact')}
            onKeyDown={(event) => handleKey(event, '/contact')}
            className="absolute left-[0px] top-[12.17px] flex h-[16.00px] w-[87.00px] cursor-pointer items-center justify-start text-left"
          >
            <span className="whitespace-nowrap bg-white bg-clip-text text-[16.0px] font-normal leading-[20.41px] text-transparent not-italic">
              Contact
            </span>
          </span>
        </div>

        <div
          id="Footer__Link_FAQ"
          className="absolute right-[50.00px] top-[213.23px] h-[40.80px] w-[160px]"
        >
          <span
            id="Footer__FAQ"
            role="button"
            tabIndex={0}
            onClick={() => go('/faq')}
            onKeyDown={(event) => handleKey(event, '/faq')}
            className="absolute left-[0px] top-[11.77px] flex h-[16.00px] w-[67.00px] cursor-pointer items-center justify-start text-left"
          >
            <span className="whitespace-nowrap bg-white bg-clip-text text-[16.0px] font-normal leading-[20.41px] text-transparent not-italic">
              FAQ
            </span>
          </span>
        </div>

        <div
          id="Footer__Link_Designed"
          className="absolute left-[50.62px] top-[292.00px] h-[17.97px] w-[217.71px]"
        >
          <span
            id="Footer__Designed_by_Arunijone"
            className="absolute left-[0.38px] top-[calc(50%-7.19px)] flex h-[14.00px] w-[149.00px] items-center justify-start text-left"
          >
            <span className="whitespace-nowrap bg-white bg-clip-text text-[14.0px] font-normal leading-[17.96px] text-transparent not-italic">
              Designed by Arunijone
            </span>
          </span>
        </div>

        <div
          id="Footer__Link_Copyright"
          className="absolute left-[calc(50%-101.00px)] top-[292.16px] h-[18.00px] w-[203.00px]"
        >
          <span
            id="Footer__Copyright"
            className="absolute left-[calc(50%-110.50px)] top-[calc(50%-7.16px)] flex h-[14.00px] w-[222.00px] items-center justify-start"
          >
            <span className="whitespace-nowrap bg-white bg-clip-text text-[14.0px] font-normal leading-[17.96px] text-transparent not-italic">
              © 2025 Arunijone. All rights reserved.
            </span>
          </span>
        </div>

        <div
          id="Footer__Frame_280"
          className="absolute right-[50.62px] top-[282.24px] flex h-[38.22px] w-[403.78px] flex-row flex-nowrap items-center justify-end gap-3.5"
        >
          <div
            id="Footer__Link_Social_1"
            className="relative h-[36.72px] w-[36.72px] rounded-[40.818782806396484px] border-[0.7502073645591736px] border-solid border-[#ffffff1e]"
          >
            <div
              id="Footer__SVG_1"
              className="absolute left-[calc(50%-8.17px)] top-[calc(50%-8.17px)] h-[16.33px] w-[16.33px]"
            >
              <img
                id="Footer__Vector_32"
                src="/assets/Home/images/vector_32.svg"
                alt="Vector"
                className="absolute left-[calc(50%-7.81px)] top-[calc(50%-8.19px)]"
              />
            </div>
          </div>

          <div
            id="Footer__Link_Social_2"
            className="relative h-[36.72px] w-[36.72px] rounded-[40.818782806396484px] border-[0.7502073645591736px] border-solid border-[#ffffff1e]"
          >
            <div
              id="Footer__SVG_2"
              className="absolute left-[calc(50%-8.17px)] top-[calc(50%-8.17px)] h-[16.33px] w-[16.33px]"
            >
              <img
                id="Footer__Vector_33"
                src="/assets/Home/images/vector_33.svg"
                alt="Vector"
                className="absolute left-[calc(100%_*_0.22)]"
              />
            </div>
          </div>

          <div
            id="Footer__Link_Social_3"
            className="relative h-[36.72px] w-[36.72px] rounded-[40.818782806396484px] border-[0.7502073645591736px] border-solid border-[#ffffff1e]"
          >
            <div
              id="Footer__SVG_3"
              className="absolute left-[calc(50%-8.16px)] top-[calc(50%-8.17px)] h-[16.33px] w-[16.33px]"
            >
              <img
                id="Footer__Vector_34"
                src="/assets/Home/images/vector_34.svg"
                alt="Vector"
                className="absolute left-[calc(100%_*_0.00)]"
              />
              <img
                id="Footer__Vector_35"
                src="/assets/Home/images/vector_35.svg"
                alt="Vector"
                className="absolute left-[calc(100%_*_0.24)] top-[calc(100%_*_0.17)]"
              />
            </div>
          </div>

          <div
            id="Footer__Link_Social_4"
            className="relative h-[36.72px] w-[36.72px] rounded-[40.818782806396484px] border-[0.7502073645591736px] border-solid border-[#ffffff1e]"
          >
            <div
              id="Footer__SVG_4"
              className="absolute left-[calc(50%-8.17px)] top-[calc(50%-8.17px)] h-[16.33px] w-[16.33px]"
            >
              <img
                id="Footer__Vector_36"
                src="/assets/Home/images/vector_36.svg"
                alt="Vector"
                className="absolute top-[calc(100%_*_0.10)]"
              />
            </div>
          </div>

          <div
            id="Footer__Link_Social_5"
            className="relative h-[36.72px] w-[36.72px] rounded-[40.818782806396484px] border-[0.7502073645591736px] border-solid border-[#ffffff1e]"
          >
            <div
              id="Footer__SVG_5"
              className="absolute left-[calc(50%-8.16px)] top-[calc(50%-8.17px)] h-[16.33px] w-[16.33px]"
            >
              <img
                id="Footer__Vector_37"
                src="/assets/Home/images/vector_37.svg"
                alt="Vector"
                className="absolute top-[calc(100%_*_0.01)]"
              />
            </div>
          </div>

          <div
            id="Footer__Link_Social_6"
            className="relative h-[36.72px] w-[36.72px] rounded-[40.818782806396484px] border-[0.7502073645591736px] border-solid border-[#ffffff1e]"
          >
            <div
              id="Footer__SVG_6"
              className="absolute left-[calc(50%-8.17px)] top-[calc(50%-8.17px)] h-[16.33px] w-[16.33px]"
            >
              <img
                id="Footer__Vector_38"
                src="/assets/Home/images/vector_38.svg"
                alt="Vector"
                className="absolute left-[calc(50%-9.92px)] top-[calc(50%-7.19px)]"
              />
            </div>
          </div>

          <div
            id="Footer__Link_Social_7"
            className="relative h-[36.72px] w-[36.72px] rounded-[40.818782806396484px] border-[0.7502073645591736px] border-solid border-[#ffffff1e]"
          >
            <div
              id="Footer__SVG_7"
              className="absolute left-[calc(50%-8.17px)] top-[calc(50%-8.17px)] h-[16.33px] w-[16.33px]"
            >
              <img
                id="Footer__Vector_39"
                src="/assets/Home/images/vector_39.svg"
                alt="Vector"
                className="absolute left-[calc(100%_*_-0.06)] top-[calc(100%_*_-0.06)]"
              />
            </div>
          </div>

          <div
            id="Footer__Link_Social_8"
            className="relative h-[36.72px] w-[36.72px] rounded-[40.818782806396484px] border-[0.7502073645591736px] border-solid border-[#ffffff1e]"
          >
            <div
              id="Footer__SVG_8"
              className="absolute left-[calc(50%-8.17px)] top-[calc(50%-8.17px)] h-[16.33px] w-[16.33px]"
            >
              <img
                id="Footer__Vector_40"
                src="/assets/Home/images/vector_40.svg"
                alt="Vector"
                className="absolute left-[calc(50%-8.37px)] top-[calc(50%-5.19px)]"
              />
            </div>
          </div>
        </div>

        <div
          id="Footer__Frame_290"
          className="absolute left-[50.00px] top-[50.00px] h-[49.00px] w-[180.00px]"
        >
          <span
            id="Footer__Arunijone"
            className="absolute left-[66.00px] top-[9.00px] flex h-[30.00px] w-[114.00px] items-center justify-start text-left"
          >
            <span className="whitespace-nowrap bg-white bg-clip-text text-[28.0px] font-normal leading-[28.00px] text-transparent not-italic">
              Arunijone
            </span>
          </span>
          <div
            id="Footer__Logo"
            className="absolute left-[0.00px] top-[0.00px] h-[49.00px] w-[51.00px] rounded-[500px]"
            style={{
              background:
                'url(/assets/Home/images/gemini_generated_image_gyuxclgyuxclgyux_1.png) 100% / cover no-repeat',
            }}
          />
        </div>
      </div>
    </div>
  );
}
