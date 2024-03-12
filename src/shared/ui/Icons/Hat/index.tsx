import React from "react";

interface HatProps {
  margin?: string;
}

export const Hat: React.FC<HatProps> = ({ margin }) => {
  return (
    <div className={margin}>
      <svg
        width="clamp(27.5px,2.8644000000000003vw,110px)"
        height="clamp(18px,1.87488vw,72px)"
        viewBox="0 0 54 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.9734 1.21127C16.0942 1.63911 14.5888 2.93307 13.9243 4.68618C13.8205 4.95749 12.9795 8.16109 12.0555 11.803C11.1211 15.4448 10.3424 18.4815 10.3217 18.5545C10.2075 18.8676 13.5921 20.2659 15.9592 20.8816C23.6421 22.8851 34.3774 22.6034 41.2297 20.2033C42.3926 19.7963 44.5521 18.8154 44.5521 18.6902C44.5521 18.6484 43.7838 15.497 42.8494 11.6986C40.9494 3.99746 40.9079 3.87224 39.8177 2.75567C38.7276 1.63911 36.8588 0.929519 35.4676 1.10692C34.5539 1.2217 34.1802 1.35736 30.889 2.7348C29.1032 3.4757 27.5874 4.08094 27.5044 4.08094C27.4213 4.08094 25.8951 3.4757 24.1093 2.72437C22.3236 1.98347 20.6936 1.32606 20.4859 1.27388C19.7799 1.07561 18.6794 1.05474 17.9734 1.21127Z"
          fill="#BF2316"
        />
        <path
          d="M9.78194 20.7564C9.71964 20.9651 9.53276 21.706 9.36664 22.3947L9.05518 23.647L9.28359 23.8244C9.71964 24.1687 11.7027 25.1496 12.8862 25.6192C17.2676 27.3306 23.7565 28.1967 29.9443 27.8836C35.6234 27.5915 40.0567 26.6419 43.5451 24.9618C44.3549 24.5653 45.5489 23.887 45.7254 23.7096C45.7877 23.647 45.2374 21.1216 45.0194 20.4955C44.9883 20.4121 44.6249 20.5373 43.9085 20.8712C39.3714 23.0313 32.706 24.0644 25.1892 23.7931C19.5309 23.5843 14.537 22.5513 10.8409 20.819L9.87538 20.3808L9.78194 20.7564Z"
          fill="#BF2316"
        />
        <path
          d="M6.77103 21.7267C4.0924 22.9998 2.50391 24.5651 2.50391 25.9425C2.50391 28.9896 9.64692 32.141 19.0637 33.2367C22.0538 33.5811 23.5177 33.6646 27.4214 33.6646C31.5951 33.6541 33.0382 33.5811 36.5059 33.1428C42.2162 32.4228 47.3658 30.8575 50.0755 29.0105C51.4668 28.0609 52.3389 26.8817 52.3389 25.9425C52.3389 24.9616 51.4564 23.7824 50.0029 22.812C49.1827 22.2589 47.0439 21.1632 46.9609 21.2467C46.9297 21.2676 47.0647 21.9041 47.2516 22.645C47.4488 23.4276 47.563 24.1164 47.5215 24.2625C47.4384 24.6068 46.1822 25.5147 44.874 26.193C41.5724 27.8939 37.4507 28.9583 32.1972 29.4592C30.0689 29.6574 24.4624 29.6261 22.2303 29.3966C17.9008 28.9687 14.1528 28.0609 11.142 26.746C9.29392 25.9321 7.43549 24.732 7.32129 24.2729C7.27976 24.1164 7.39396 23.4485 7.59123 22.645C7.77811 21.9041 7.91308 21.278 7.89231 21.2467C7.87155 21.2258 7.36282 21.445 6.77103 21.7267Z"
          fill="#BF2316"
        />
      </svg>
    </div>
  );
};
