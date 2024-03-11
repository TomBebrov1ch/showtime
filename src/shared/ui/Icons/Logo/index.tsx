import React from "react";

interface LogoProps {
  margin?: string;
}

const Logo: React.FC<LogoProps> = ({ margin }) => {
  return (
    <div className={`${margin} `}>
      <svg
        width="clamp(110px,11.457600000000001vw,440px)"
        height="clamp(50px,5.208vw,200px)"
        viewBox="0 0 542 196"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M257.613 90.8768C257.727 94.0947 257.272 97.0906 257.044 100.087C256.93 101.085 256.476 101.64 255.566 102.195C252.837 103.748 249.88 104.858 246.696 105.413C244.99 105.746 244.876 105.746 245.103 107.41C245.445 111.405 245.9 115.399 246.354 119.283C247.037 125.386 247.605 131.489 248.288 137.591C248.97 143.916 249.652 150.352 250.335 156.677C251.017 162.78 251.586 168.882 252.154 174.985C252.723 180.422 253.291 185.97 253.86 191.407C253.86 191.74 253.86 192.073 253.974 192.517C254.087 193.294 253.86 193.627 252.95 193.738C249.993 194.071 247.037 194.403 243.966 194.625C239.19 195.069 234.414 195.513 229.524 195.957C228.045 196.068 228.045 196.068 227.932 194.625C227.363 190.076 226.908 185.416 226.453 180.866C225.771 174.43 225.089 167.995 224.406 161.559C223.838 155.789 223.155 149.908 222.587 144.027C221.904 137.702 221.222 131.267 220.54 124.942C220.085 120.503 219.63 116.065 219.175 111.737C218.948 109.962 219.061 108.187 217.924 106.633C217.469 106.078 217.583 105.302 217.583 104.525C217.469 99.4208 216.673 94.4276 216.787 89.3234C216.787 88.7686 216.673 88.2138 216.559 87.7699C216.332 86.6603 216.446 85.2178 215.536 84.5521C214.399 83.6644 212.693 84.4411 211.328 84.3301C210.987 84.3301 210.646 84.5521 210.646 84.9959C210.646 85.7726 210.646 86.5494 210.646 87.4371C211.215 93.207 211.897 98.866 212.465 104.636C212.465 105.08 212.579 105.524 212.579 105.968C212.693 108.076 212.693 107.965 210.646 108.409C209.509 108.631 208.371 109.074 207.234 109.296C203.936 109.851 203.254 109.74 202.913 106.078C202.572 101.751 202.117 97.5345 201.776 93.207C201.548 89.9891 200.866 86.6603 201.321 83.4425C201.662 81.1123 200.866 78.893 200.525 76.5629C199.842 72.5683 199.274 68.4627 198.933 64.4681C198.819 63.4695 198.819 62.4708 199.274 61.5831C199.842 60.2516 200.638 59.142 202.458 59.253C203.823 59.3639 205.187 58.9201 206.552 58.9201C207.917 58.8091 208.03 58.9201 208.371 60.3626C208.713 61.8051 208.94 63.3585 209.054 64.801C209.168 67.686 209.395 70.682 209.509 73.5669C209.509 74.2327 209.509 75.0094 209.736 75.6752C209.964 76.4519 209.622 77.6725 210.646 78.0054C212.011 78.4492 213.489 78.5602 214.854 77.6725C215.308 77.3396 215.536 76.8958 215.536 76.341C215.422 75.7862 215.422 75.2314 215.308 74.7875C214.854 70.2381 214.285 65.7997 213.83 61.2503C213.83 60.9174 213.83 60.5845 213.83 60.1407C213.83 58.0324 214.171 57.6995 216.332 57.4776C218.152 57.2557 219.971 57.4776 221.677 56.8118C222.473 56.4789 223.496 57.3666 223.61 58.4762C223.724 59.253 223.724 60.0297 223.724 60.9174C223.838 65.9106 224.406 70.7929 225.316 75.6752C225.543 77.0067 225.771 78.2273 225.316 79.5588C225.089 80.2246 225.089 81.0013 225.202 81.6671C225.998 89.1015 226.794 96.5358 227.59 103.859C227.704 105.302 227.818 105.302 229.296 105.191C231.798 104.969 234.186 104.747 236.574 104.414C237.484 104.303 238.508 104.525 239.304 103.859C238.508 103.415 237.712 102.972 237.029 102.528C235.892 101.751 234.869 100.863 234.186 99.7537C233.731 99.088 233.845 98.4222 234.641 98.2002C236.802 97.6454 238.053 95.981 239.645 94.6495C239.986 94.3166 240.327 94.0947 240.782 93.8728C242.26 93.096 242.829 93.318 243.398 94.8714C243.739 96.092 244.08 97.3126 244.535 98.4222C244.99 99.5318 245.445 99.7537 246.696 99.5318C248.401 99.1989 249.539 97.9783 249.311 96.4249C248.856 92.5413 249.311 88.6576 249.084 84.8849C248.856 79.115 248.06 73.345 245.786 68.0189C245.331 67.0202 244.99 66.0216 244.08 65.3558C243.056 64.4681 242.033 63.9133 240.668 64.3572C239.417 64.801 238.166 66.5764 238.166 67.9079C238.166 68.4627 238.28 69.0175 238.394 69.4614C239.531 76.23 240.668 82.8877 241.806 89.6563C242.033 91.0988 242.033 91.0988 240.668 91.8755C239.759 92.3193 239.19 93.096 238.394 93.7618C237.712 94.4276 237.143 95.0933 236.347 95.4262C234.527 96.3139 233.959 96.092 233.504 94.2057C232.139 89.1015 230.547 83.9973 229.865 78.6711C229.296 74.6766 229.069 70.6819 230.206 66.7983C230.433 65.7997 230.888 64.801 231.343 63.8024C233.163 59.5858 236.802 57.9214 241.123 57.3666C241.351 57.3666 241.464 57.4776 241.692 57.3666C245.558 56.368 248.288 58.1434 250.676 60.8064C252.723 63.0256 253.974 65.6887 254.77 68.5737C255.907 72.4573 256.362 76.4519 256.93 80.3356C257.158 82 257.499 83.6644 257.84 85.2178C258.181 86.7713 257.954 88.4357 258.068 89.9891C257.613 90.2111 257.613 90.6549 257.613 90.8768Z"
          fill="#F0E7BE"
        />
        <path
          d="M486.079 61.6943C486.534 63.1368 486.875 64.5793 487.33 66.0218C487.444 66.2437 487.444 66.5766 487.216 66.6875C487.102 66.6875 486.761 66.4656 486.648 66.3547C486.306 66.1327 485.965 66.0218 485.851 66.5766C485.738 67.5752 485.851 68.5739 485.851 69.4615C485.851 70.3492 485.738 71.2369 485.738 72.1246C485.738 72.4575 485.738 72.7904 485.624 73.0123C485.283 72.7904 485.397 72.4575 485.397 72.2356C485.169 70.904 484.942 69.5725 484.601 68.3519C484.032 66.0218 483.122 63.8025 481.871 61.6943C479.369 57.5887 476.754 53.4832 474.252 49.3776C473.342 47.8242 473.228 47.8242 471.409 48.268C468.338 48.8228 465.154 49.4886 462.084 50.0434C460.833 50.2653 460.605 50.1544 460.378 49.0447C459.923 46.8255 459.923 46.8255 457.762 47.0475C452.076 47.6023 446.39 48.157 440.704 48.8228C434.791 49.4886 428.991 50.1544 423.077 50.7092C417.505 51.264 411.819 51.8188 406.247 52.3736C405.337 52.4845 404.882 52.7065 404.996 53.5941C405.109 55.9243 405.223 58.2545 405.564 60.4737C405.678 61.1395 406.019 61.3614 406.701 61.2504C408.294 61.0285 409.886 60.8066 411.591 60.5847C412.956 60.3627 413.411 60.5847 413.638 61.9162C413.98 63.9135 414.207 65.9108 414.548 68.0191C414.662 69.1287 414.548 69.3506 413.411 69.2396C411.478 69.2396 409.544 70.0163 407.497 69.3506C406.929 69.1287 406.701 69.5725 406.701 70.1273C406.929 72.9013 407.27 75.7863 407.497 78.5604C407.611 79.448 408.066 79.8919 409.09 80.0028C411.478 80.2248 413.866 80.1138 416.14 79.7809C416.481 79.7809 416.823 79.67 417.164 79.559C419.779 79.2261 419.779 79.2261 419.893 81.8892C420.007 83.5536 420.121 85.218 420.348 86.8824C420.462 87.7701 420.007 88.2139 419.097 88.2139C417.05 88.3249 415.117 88.5468 413.07 88.6578C409.658 88.8797 406.247 89.7674 402.721 89.5455C401.925 89.5455 401.357 89.9893 400.674 90.1003C399.537 90.3222 398.741 89.7674 398.514 88.6578C397.831 85.8838 397.831 82.9988 397.831 80.2248C397.831 76.785 397.945 73.2342 397.149 69.9054C396.58 67.4642 396.125 65.0231 395.898 62.582C395.443 55.7024 394.988 48.8228 394.988 41.8323C394.988 41.6104 394.988 41.4994 394.988 41.2775C394.874 40.3898 395.329 40.0569 396.239 40.0569C399.651 40.1679 403.176 39.835 406.588 39.3911C412.729 38.7254 418.87 38.0596 425.011 37.3938C430.924 36.7281 436.951 36.1733 442.865 35.6185C447.527 35.1746 452.304 34.6198 456.966 34.176C457.876 34.065 458.217 33.7321 458.331 32.8444C458.9 29.1827 459.468 25.521 460.492 21.8593C460.947 20.3059 461.743 19.4182 463.335 18.9743C465.837 18.4195 466.064 18.4195 467.542 20.6387C468.225 21.7483 468.907 22.747 469.589 23.8566C469.703 24.0785 469.93 24.1895 470.158 24.4114C470.272 24.1895 470.613 24.0785 470.613 23.8566C470.954 22.858 471.295 21.8593 471.75 20.8607C471.977 21.7484 472.091 22.636 472.432 23.5237C472.774 24.5224 473.683 24.8553 474.593 24.3005C475.617 23.7457 476.299 22.747 476.867 21.7483C478.46 19.0853 479.824 16.3113 481.075 13.4263C481.416 12.5386 481.757 11.6509 482.44 10.8742C482.554 10.7632 482.554 10.5413 482.667 10.4304C482.781 10.0975 482.667 10.0975 482.44 10.3194C482.326 10.4303 482.326 10.6523 482.212 10.7632C481.985 12.2057 481.757 13.7592 481.644 15.2017C481.53 15.7565 481.53 16.3113 481.644 16.7551C481.757 17.4209 482.326 17.6428 482.895 17.1989C484.373 16.0893 485.51 14.7578 486.079 12.9824C486.761 11.0961 487.216 9.09882 487.785 7.10153C488.012 6.3248 488.126 5.54807 488.353 4.77134C488.467 4.54942 488.581 4.21654 488.808 4.3275C490.4 4.99327 490.514 3.55075 491.083 2.77402C491.538 1.9973 491.879 1.2206 492.334 0.443871C492.447 0.33291 492.447 0.110961 492.561 0C492.561 0 492.675 6.77086e-06 492.675 0.110968C492.561 0.221929 492.447 0.443844 492.447 0.554805C492.334 0.887687 492.106 1.2206 491.992 1.55348C490.628 5.32615 489.377 9.0988 488.012 12.7605C487.785 13.3153 487.671 13.9811 487.557 14.5359C487.557 14.6468 487.671 14.8688 487.785 14.9797C487.898 15.0907 488.24 15.0907 488.24 14.9797C489.149 14.092 489.945 13.2044 490.855 12.3167C491.083 12.0947 491.196 11.8728 491.424 11.7619C491.31 11.9838 491.196 12.3167 491.083 12.5386C490.4 13.7592 489.604 14.9797 488.922 16.2003C488.581 16.8661 487.671 17.6428 488.467 18.1976C489.036 18.6415 489.718 17.7538 490.173 17.3099C491.538 16.0893 493.016 15.0907 494.494 14.0921C494.608 13.9811 494.835 13.9811 494.949 13.9811C495.177 14.7578 493.698 15.3126 494.494 16.0893C494.949 16.5332 495.859 16.0894 496.541 15.9784C497.11 15.8674 497.792 15.6455 498.361 15.7565C498.133 16.3113 497.678 16.5332 497.224 16.8661C493.471 19.1963 490.287 21.9703 487.444 25.2991C485.851 27.1854 484.373 28.9608 482.781 30.8472C482.667 31.0691 482.667 31.291 482.554 31.5129C482.781 31.5129 483.122 31.6239 483.35 31.5129C490.855 29.2937 498.702 27.8512 506.321 25.9649C504.047 26.9635 501.772 27.8512 499.498 28.8498C498.702 29.1827 498.02 29.5156 497.337 29.9594C497.11 30.0704 496.882 30.2923 497.11 30.6252C497.224 30.8471 497.565 30.9581 497.792 31.0691C498.475 31.18 499.271 31.18 499.953 31.18C504.274 31.18 508.482 30.6252 512.69 30.4033C517.693 30.0704 522.583 29.1827 527.587 29.0718C527.815 29.0718 527.928 29.0718 528.156 28.9608C528.497 28.8498 528.383 28.7389 528.042 28.7389C527.815 28.7389 527.701 28.8498 527.587 28.8498C527.246 29.0718 526.791 29.2937 526.45 29.5156C525.768 29.7375 524.403 29.7375 524.63 30.5143C524.744 31.18 526.109 30.7362 526.905 30.6252C531.113 30.1814 535.206 29.7376 539.414 29.2937C539.642 29.2937 539.755 29.1827 539.983 29.1827C540.551 29.1827 541.234 28.9608 541.802 29.2937C541.234 29.4047 540.551 29.5156 539.983 29.6266C534.069 30.8472 528.042 31.9568 522.129 33.1773C519.968 33.6212 517.921 34.065 515.76 34.5089C515.419 34.6198 515.078 34.8417 514.737 34.9527C514.509 35.0637 514.509 35.1746 514.509 35.3966C514.509 35.6185 514.623 35.7294 514.85 35.7294C515.533 35.8404 516.329 35.9514 517.011 35.9514C520.878 35.7294 524.858 35.5075 528.724 35.3966C528.952 35.3966 529.293 35.3966 529.52 35.2856C529.862 35.1746 529.407 34.8417 529.634 35.1746C529.862 35.5075 529.748 34.8417 529.634 35.1746L529.52 35.2856C529.179 35.2856 528.724 35.2856 528.383 35.2856C522.129 36.95 515.76 37.9487 509.505 39.2802C503.365 40.5008 497.224 41.6103 491.083 42.72C490.173 42.8309 489.263 43.1638 488.467 43.3857C487.444 43.8296 487.444 44.0515 488.353 44.9392C488.467 45.0501 488.694 45.0501 488.808 45.1611C488.581 45.1611 488.467 45.2721 488.24 45.2721C487.444 45.2721 486.648 45.2721 485.738 45.383C484.714 45.494 484.373 46.1598 484.601 47.0475C484.828 47.9351 485.397 48.6009 485.965 49.2667C489.377 52.8174 492.675 56.4791 496.428 59.697C497.337 60.4737 498.247 61.1395 499.043 62.3601C498.133 61.9162 497.451 61.5833 496.769 61.2504C496.314 61.0285 495.859 60.6956 495.29 61.2504C494.835 61.9162 495.29 62.1381 495.745 62.471C496.769 63.2477 497.792 64.0245 498.816 64.8012C499.498 65.356 500.408 65.6889 500.408 66.7985C500.408 67.4643 501.09 67.5752 501.545 67.7971C503.023 68.5739 504.388 69.3506 505.866 70.0164C505.98 70.1273 506.208 70.1273 506.435 70.1273C506.435 70.1273 506.435 70.0164 506.549 70.0164C506.435 69.9054 506.208 69.9054 506.094 69.7944C503.592 69.4616 501.431 68.352 499.157 67.5752C495.29 66.1327 492.22 63.6916 489.377 61.0285C489.036 60.6956 488.695 60.3628 488.353 60.1408C488.126 59.9189 487.898 59.4751 487.557 59.808C487.444 59.9189 487.557 60.4737 487.557 60.8066C487.671 61.2505 487.671 61.3614 487.216 61.0285C487.102 61.0285 487.102 60.9176 486.989 60.9176C486.875 60.9176 486.761 60.8066 486.761 60.8066C486.647 60.4737 486.42 60.1408 485.965 60.2518C485.51 60.4737 485.738 60.8066 485.851 61.1395C485.851 61.3614 485.965 61.4724 486.079 61.6943Z"
          fill="#F0E7BE"
        />
        <path
          d="M278.424 53.3721C279.333 53.3721 280.243 53.4831 281.153 53.3721C282.063 53.2612 282.404 53.705 282.518 54.4817C282.973 58.2544 283.769 62.0271 284.792 65.6888C285.588 68.4628 286.498 71.1259 287.408 73.7889C287.635 74.3437 287.749 75.3424 288.317 75.3424C289.114 75.3424 289.227 74.3438 289.455 73.678C289.796 72.9013 290.023 72.0136 290.251 71.1259C291.843 64.5792 293.094 57.9215 293.549 51.1529C293.549 50.82 293.549 50.4871 293.662 50.0433C293.662 49.5994 293.89 49.1556 294.458 49.1556C295.823 49.0447 297.188 48.8227 298.552 48.9337C300.372 48.9337 300.713 49.4885 300.599 51.2639C300.372 54.8146 300.031 58.3654 299.803 61.9161C299.576 65.5778 298.894 69.1286 297.643 72.5684C297.415 73.1232 297.415 73.7889 297.415 74.3437C297.074 78.8931 296.847 83.5535 296.505 88.1029C296.278 90.9879 296.505 93.7619 296.505 96.6469C296.505 98.4223 296.505 98.5332 294.572 98.8661C292.525 99.199 290.364 99.199 288.317 99.4209C287.749 99.4209 287.521 99.088 287.408 98.6442C286.953 97.0907 286.384 95.6482 285.929 94.0948C285.247 91.5427 284.792 88.8796 284.678 86.2166C284.678 85.107 284.451 84.2193 283.086 83.7754C280.926 82.9987 279.902 81.1124 279.902 78.8931C279.902 77.1178 279.22 75.4534 278.992 73.678C278.992 73.4561 278.651 73.3451 278.424 73.2341C278.31 73.3451 278.196 73.4561 278.196 73.678C278.083 75.1205 277.855 76.452 277.855 77.8945C277.514 83.2206 277.059 88.5467 276.718 93.7619C276.49 95.8702 276.377 97.9784 275.922 100.087C275.694 100.974 276.718 102.195 275.581 102.75C274.785 103.083 273.761 102.75 272.851 102.861C271.259 102.972 269.781 103.083 268.189 103.194C266.483 103.305 265.005 101.973 265.346 100.42C266.028 97.6455 265.232 95.2044 264.777 92.5414C263.981 87.4371 262.048 82.5549 261.707 77.4507C261.366 72.5684 259.546 68.019 258.864 63.1367C258.523 60.4736 258.181 57.8106 258.181 55.1475C258.181 54.3708 258.409 53.9269 259.205 54.1489C260.115 54.4817 261.024 53.9269 261.82 53.816C262.503 53.705 263.185 53.3721 263.981 53.2612C266.256 52.9283 266.597 53.1502 266.938 55.4804C268.189 62.0271 269.326 68.5738 270.463 75.1205C270.463 75.3424 270.577 75.6753 270.577 75.8972C270.577 76.0082 270.804 76.2301 270.918 76.1191C271.032 76.1191 271.259 76.0082 271.373 75.7862C271.714 75.3424 271.6 74.7876 271.6 74.2328C271.6 72.6793 271.714 71.0149 271.6 69.4615C271.6 67.2422 271.714 65.023 272.624 62.9148C272.965 62.138 272.851 61.3613 272.738 60.5846C272.51 58.6982 272.624 56.8119 273.193 55.0365C273.647 53.4831 273.989 53.2612 275.694 53.2612C276.832 53.4831 277.628 53.4831 278.424 53.3721C278.424 53.4831 278.424 53.4831 278.424 53.3721Z"
          fill="#F0E7BE"
        />
        <path
          d="M381.455 70.0163C381.455 72.0136 381.455 73.9 381.455 75.8973C381.455 76.563 381.455 77.3398 381.342 78.0055C381 78.8932 381.114 79.7809 381.342 80.6686C381.683 82.5549 381.796 84.5522 381.228 86.4386C380.887 87.881 381 89.4345 381 90.9879C381 91.8756 380.659 92.2085 379.863 92.4304C375.087 93.54 376.224 94.3168 374.746 89.8783C372.812 83.9974 370.993 78.0055 369.856 71.9027C369.401 69.3506 368.15 67.0204 367.809 64.4683C367.809 64.3573 367.581 64.1354 367.468 64.1354C367.354 64.1354 367.126 64.2463 367.013 64.3573C366.899 64.9121 366.785 65.356 366.785 65.9108C366.558 68.7958 367.013 71.5698 367.468 74.3438C368.264 80.0028 369.287 85.7728 369.742 91.4318C369.856 93.0962 369.742 93.4291 368.036 93.8729C367.126 94.0948 366.217 94.2058 365.307 94.3168C363.374 94.6496 363.374 94.6496 362.691 92.7633C362.123 91.0989 362.236 89.4345 362.236 87.7701C362.236 86.6605 362.236 85.5508 361.668 84.4412C360.985 83.2207 360.758 81.7782 360.758 80.3357C360.644 75.3425 359.507 70.4602 358.711 65.5779C357.801 59.9189 356.892 54.1489 355.868 48.4899C355.754 47.7132 355.982 47.2693 356.664 47.0474C359.962 46.1597 363.146 45.272 366.558 45.272C368.491 45.272 368.946 45.6049 369.515 47.2693C370.424 49.8214 370.993 52.5955 371.562 55.2585C372.13 58.1435 372.926 60.9175 374.063 63.6916C374.177 64.0244 374.291 64.4683 374.746 64.2464C374.973 64.1354 375.087 63.8025 375.087 63.5806C375.997 58.2545 376.679 52.9283 376.906 47.4913C377.02 44.4953 377.02 44.4953 380.091 44.0515C382.479 43.7186 384.981 43.3857 387.369 43.0528C388.279 42.9419 388.847 43.1638 389.075 44.1624C389.416 46.0488 389.984 47.9351 390.439 49.8214C390.553 50.3763 390.667 51.042 390.667 51.7078C390.78 54.7037 391.008 57.6997 391.122 60.6956C391.122 61.3614 391.349 62.1381 391.122 62.8039C390.326 65.6888 391.008 68.5738 391.235 71.5698C391.235 72.2355 391.349 72.7903 391.463 73.4561C391.918 76.1192 390.326 78.5603 390.894 81.3343C391.463 83.9974 390.667 86.6605 390.098 89.2126C389.984 89.7674 389.871 90.2112 389.643 90.766C389.302 91.7647 387.937 91.9866 387.255 91.2099C386.459 90.2112 385.89 89.1016 385.777 87.881C385.436 83.6645 384.639 79.448 384.071 75.2315C383.502 70.4602 382.479 65.7998 382.934 61.0285C382.934 60.6956 382.934 60.3627 382.934 59.9189C382.934 59.586 383.047 58.9202 382.365 58.9202C381.91 58.9202 381.91 59.3641 381.91 59.697C381.683 61.1395 381.455 62.471 381.455 63.9135C381.455 66.1327 381.569 68.019 381.455 70.0163C381.569 70.0163 381.569 70.0163 381.455 70.0163Z"
          fill="#F0E7BE"
        />
        <path
          d="M322.32 97.7566C321.069 97.7566 319.932 97.3127 318.795 98.3114C318.226 98.7552 317.203 97.9785 317.089 97.0908C316.862 96.0921 316.748 94.9825 316.748 93.8729C316.179 87.2153 315.611 80.4467 314.928 73.789C314.473 69.2396 313.905 64.8012 313.109 60.3628C312.654 57.8107 313.223 58.1435 310.379 58.4764C308.901 58.5874 307.536 58.8093 306.172 59.2531C305.262 59.586 304.807 59.2531 304.466 58.4764C303.897 57.1449 303.556 55.8133 303.67 54.3708C303.784 52.1516 304.011 51.9297 306.399 51.9297C307.195 51.9297 308.105 51.9297 308.787 51.7078C313.564 50.4872 318.567 50.7092 323.344 49.8215C325.163 49.4886 327.21 50.1543 329.03 49.4886C329.485 49.3776 329.712 49.7105 329.826 50.0434C330.508 52.0407 330.394 54.038 330.508 56.1462C330.508 56.5901 330.167 56.701 329.712 56.701C328.12 56.9229 326.528 57.1449 324.822 57.2558C323.116 57.3668 322.661 57.8106 322.775 59.3641C322.889 61.3614 323.003 63.4696 323.23 65.4669C323.799 70.7931 323.912 76.2301 324.936 81.5563C325.277 83.6645 324.936 85.9947 325.391 88.103C325.846 90.3222 326.3 92.6524 326.642 94.8716C326.983 97.0908 326.642 97.5346 324.253 97.6456C323.571 97.7566 323.003 97.7566 322.32 97.7566Z"
          fill="#F0E7BE"
        />
        <path
          d="M354.162 80.6687C353.935 83.1098 354.617 85.7729 354.617 88.5469C354.617 89.2127 354.617 89.9894 354.617 90.6552C354.617 93.7621 353.48 94.5388 350.296 93.6511C349.386 93.4292 348.704 93.5402 347.907 93.6511C346.884 93.8731 346.315 93.4292 346.315 92.4306C346.315 89.1017 345.292 85.8838 345.064 82.666C344.61 74.5658 343.017 66.6876 343.017 58.5875C343.017 55.5915 343.359 52.5956 342.335 49.5996C341.994 48.49 342.563 47.3804 342.221 46.1598C342.108 45.605 342.676 45.3831 343.131 45.3831C344.268 45.3831 345.519 45.3831 346.656 45.3831C347.68 45.3831 348.59 45.3831 349.5 44.8283C350.637 44.1626 351.66 44.6064 351.774 45.9379C352.001 48.1572 352.115 50.3764 352.229 52.5956C352.797 61.2506 353.366 69.9055 353.935 78.6714C354.162 79.2262 354.162 79.781 354.162 80.6687Z"
          fill="#F0E7BE"
        />
        <path
          d="M333.806 56.7012C332.441 56.7012 332.1 56.5903 331.986 55.2587C331.873 53.5943 331.759 51.9299 331.418 50.2655C331.304 49.7107 331.532 49.2668 332.1 49.0449C332.555 48.934 332.896 48.712 333.351 48.6011C335.626 48.1572 336.08 48.4901 336.308 50.7093C336.422 52.0409 336.535 53.3724 336.649 54.593C336.763 55.9245 336.649 56.1464 335.284 56.3683C334.829 56.7012 334.261 56.7012 333.806 56.7012Z"
          fill="#F0E7BE"
        />
        <path
          d="M194.839 87.881C193.36 85.7728 191.654 83.9974 189.266 82.8878C186.651 81.6672 184.376 79.7809 182.216 77.8945C180.396 76.452 179.486 74.4548 179.486 72.0136C179.486 70.1273 180.169 69.1286 182.557 69.3505C183.239 69.4615 184.035 69.6834 184.604 69.9053C185.513 70.2382 186.082 70.793 186.196 71.9026C186.31 72.9013 186.423 73.789 186.651 74.7876C186.878 75.7863 187.106 76.0082 188.129 75.6753C189.38 75.3424 190.517 75.0096 191.768 74.6767C192.678 74.4547 193.815 75.1205 194.27 74.2328C194.611 73.5671 194.27 72.5684 194.27 71.6807C194.156 69.3505 193.247 67.3532 191.768 65.5779C189.949 63.4696 187.56 61.9162 184.604 61.8052C182.329 61.6942 180.169 62.4709 178.235 63.8025C176.984 64.6902 175.847 65.6888 174.937 66.9094C174.71 67.2423 174.483 67.6861 174.141 67.4642C173.914 67.3532 173.8 66.9094 173.8 66.4656C173.686 65.356 173.573 64.3573 173.459 63.2477C173.459 62.4709 173.004 62.1381 172.208 62.249C170.957 62.36 169.706 62.4709 168.455 62.6929C167.318 62.8038 166.636 62.5819 165.84 61.6942C163.224 58.4764 159.699 56.4791 155.832 54.9256C153.103 53.816 150.487 52.7064 147.758 51.7077C142.527 49.7104 136.954 48.7118 131.382 48.157C130.472 48.0461 129.79 48.2679 129.108 48.8228C126.037 51.2639 123.422 54.0379 121.83 57.5887C120.692 60.2518 119.441 62.9148 118.418 65.6888C117.963 66.7984 117.508 67.4642 116.143 67.4642C112.391 67.6861 108.524 68.13 104.771 68.5738C103.179 68.6848 103.179 68.6848 103.179 70.3492C103.293 75.8972 103.52 81.3343 103.748 86.8824C103.748 87.7701 104.089 88.4358 104.658 88.9906C105.795 90.1002 106.932 91.3208 108.069 92.4304C108.865 93.3181 108.865 93.4291 107.842 93.8729C105.567 94.8715 103.179 95.8702 100.905 96.9798C98.7441 97.9785 97.152 99.6429 96.1285 101.862C95.9011 102.306 95.6737 102.861 95.4462 103.305C95.2188 104.081 94.6502 104.414 93.7404 104.303C92.9443 104.192 92.1483 104.192 91.2385 104.192C83.8466 103.859 76.341 103.526 68.2668 103.194C66.3335 103.194 63.7179 103.194 60.9886 103.194C51.8909 103.083 42.7932 103.194 33.8092 104.414C25.6213 105.524 17.4334 106.855 9.35917 108.298C6.62986 108.742 4.01426 109.296 1.28495 109.851C0.0340133 110.073 -0.0797149 110.295 0.0340064 111.405C0.261449 114.29 0.602634 117.286 0.943798 120.171C1.05752 120.836 1.17122 121.502 1.73983 122.057C3.90053 124.276 5.15149 127.05 6.06126 129.935C8.10824 136.149 8.79056 142.585 8.22195 149.131C7.99451 151.573 7.65336 154.125 6.17499 156.233C5.03777 157.675 4.92402 159.118 5.15147 160.671C5.26519 161.67 5.49265 162.78 5.49265 163.889C5.49265 164.777 5.94751 165.11 6.85729 164.999C9.47288 164.666 12.0885 164.333 14.7041 164C22.7783 163.112 30.7388 162.114 38.6993 160.782C44.499 159.784 50.1851 158.23 55.6438 155.9C62.6945 152.904 68.0394 148.355 71.5647 141.697C75.7724 133.708 82.2545 128.16 90.4424 124.276C97.4932 120.947 104.999 118.839 112.846 118.173C120.237 117.508 127.629 116.731 135.135 115.954C139.684 115.51 142.186 112.958 142.527 108.52C142.641 106.966 142.754 105.302 142.868 103.748C142.982 101.751 142.982 99.8648 142.982 97.8675C142.982 97.3127 143.095 96.8688 143.891 96.7579C148.44 96.314 152.762 96.6469 156.856 98.6442C157.652 98.9771 157.993 99.421 158.107 100.198C158.22 100.863 158.334 101.64 158.448 102.306C159.016 107.965 157.993 113.402 155.491 118.617C153.785 122.168 151.966 125.608 150.146 129.048C149.35 130.601 148.781 132.154 148.668 133.819C148.327 138.035 148.895 142.141 149.123 146.357C149.123 147.023 149.578 147.245 150.26 147.245C151.625 147.134 152.989 146.912 154.354 146.801C161.177 146.246 167.887 145.581 174.71 145.026C175.392 144.915 176.188 144.804 176.871 144.693C177.098 144.693 177.326 144.471 177.439 144.249C177.78 143.361 177.098 141.586 176.302 140.92C175.392 140.255 174.369 139.589 173.345 139.034C172.322 138.368 171.526 137.591 170.843 136.593C170.161 135.594 170.275 135.483 171.412 134.928C174.596 133.597 175.279 132.487 174.71 129.158C174.596 128.16 174.255 127.272 174.028 126.273C173.914 125.719 173.686 125.275 173.573 124.72C173.232 122.945 173.345 122.501 175.051 121.835C176.53 121.28 177.326 120.171 177.894 118.839C178.235 118.062 178.349 117.175 178.463 116.287C178.69 113.735 178.576 111.183 178.349 108.631C178.349 108.409 178.349 107.965 178.463 107.854C178.804 107.632 179.145 107.854 179.373 108.187C179.714 108.52 180.055 108.742 180.396 109.075C182.557 110.739 184.945 111.405 187.674 110.184C189.039 109.629 190.403 109.296 191.768 108.742C195.18 107.41 197.113 104.636 197.909 101.418C199.046 96.8689 197.795 92.0975 194.839 87.881ZM190.404 101.085C190.29 101.862 189.949 102.417 189.153 102.639C188.243 102.861 187.447 103.194 186.537 103.416C185.968 103.637 185.4 103.416 185.059 102.972C183.921 101.862 182.784 100.642 182.898 98.8661C182.898 98.6442 182.898 98.5333 182.898 98.3113C183.012 96.0921 182.67 96.425 180.737 96.7579C179.827 96.8688 178.918 97.0908 178.008 97.2017C177.439 97.3127 176.984 97.2017 176.871 96.425C176.643 93.0962 176.416 89.6564 176.302 86.3276C176.302 86.1056 176.188 85.7728 176.529 85.6618C176.757 85.6618 177.098 85.7728 177.212 85.8837C178.463 86.8824 179.827 87.881 181.078 88.8797C182.102 89.6564 183.012 90.5441 184.376 90.655C184.717 90.655 185.172 90.766 185.286 91.2098C185.741 92.5414 186.992 93.2071 188.129 93.9839C189.721 94.9825 190.404 96.425 190.404 98.2004C190.404 98.6442 190.517 99.0881 190.517 99.7538C190.403 100.087 190.517 100.531 190.404 101.085Z"
          fill="#F0E7BE"
        />
      </svg>
    </div>
  );
};

export default Logo;