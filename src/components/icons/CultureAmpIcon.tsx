interface props {
    size?: number;
    color?: string;
}

const CultureAmpIcon = ({ size = 201, color = '#121212' }: props) => (
    <svg
        width={size}
        height={size - 153}
        viewBox="0 0 201 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M20.8102 28.3421C20.888 28.4716 20.9148 28.6255 20.8854 28.7736C20.6108 30.0213 19.9427 31.1477 18.9796 31.9871C18.9268 32.027 18.8823 32.077 18.8488 32.1341C18.8368 32.1603 18.8306 32.1887 18.8306 32.2175C18.8306 32.2463 18.8368 32.2747 18.8488 32.3008C18.8681 32.3232 18.8923 32.3408 18.9195 32.3521C18.9468 32.3635 18.9763 32.3683 19.0057 32.3662C19.1452 32.3291 19.28 32.2764 19.4078 32.2093C19.9727 31.8885 20.4718 31.4637 20.8788 30.9573C21.124 30.6598 21.3659 30.3623 21.598 30.055C22.0351 29.4481 22.3585 28.767 22.5526 28.0447C22.729 27.4596 22.8794 26.8678 23.0625 26.2827C23.1373 26.0681 23.228 25.8595 23.3339 25.6584C23.3764 25.5964 23.4258 25.5394 23.4809 25.4884H23.5267C23.5724 25.642 23.6281 25.7891 23.6607 25.946C23.7462 26.4395 23.7583 26.9429 23.6967 27.4399C23.6289 28.0868 23.4963 28.7252 23.3012 29.3457C23.1644 29.7271 22.9799 30.0895 22.752 30.4244C22.1791 31.3686 21.5026 32.2457 20.735 33.0396C20.1695 33.5857 19.5581 34.0822 18.9076 34.5238C18.8602 34.5481 18.8171 34.5801 18.7802 34.6186C18.7421 34.6644 18.7224 34.7225 18.7246 34.782C18.7383 34.8086 18.7582 34.8314 18.7827 34.8485C18.8072 34.8656 18.8355 34.8764 18.8651 34.8801C19.0019 34.8792 19.138 34.8617 19.2705 34.8277C19.8745 34.6537 20.4394 34.3651 20.9344 33.9778C22.3189 32.9571 23.4434 31.6244 24.2164 30.0877C24.709 29.0852 25.0285 28.0065 25.1611 26.8972C25.2407 26.197 25.2484 25.4905 25.1841 24.7888C25.128 24.4292 25.139 24.0623 25.2167 23.7068C25.2373 23.6253 25.2669 23.5463 25.305 23.4714C25.3932 23.3014 25.5208 23.2916 25.6057 23.4714C25.6951 23.6415 25.7611 23.823 25.8019 24.0108C25.9813 24.91 26.0375 25.8293 25.9686 26.7436C25.8417 28.229 25.4683 29.6829 24.8637 31.0456C24.2514 32.4486 23.332 33.6964 22.1733 34.697C21.7974 35.0239 21.4378 35.3508 21.0488 35.6581C20.5816 35.9978 20.0811 36.2892 19.5549 36.5276C18.394 37.1044 17.1584 37.517 15.8839 37.7534C15.1027 37.889 14.3094 37.9417 13.5171 37.9104C13.1282 37.9104 12.7358 37.8843 12.3469 37.8646C11.4674 37.8159 10.5997 37.6397 9.77088 37.3416C8.5707 36.924 7.41712 36.3827 6.32871 35.7268C5.05941 34.9485 3.97685 33.9005 3.15781 32.6571C2.75348 32.0724 2.40126 31.4533 2.10521 30.8069C2.09012 30.7686 2.06583 30.7345 2.03448 30.7077C2.00313 30.6809 1.96568 30.6622 1.92542 30.6533C1.71045 30.5998 1.51046 30.4982 1.34056 30.356C1.17066 30.2139 1.03531 30.0349 0.944727 29.8328C0.70233 29.2408 0.514141 28.6282 0.38247 28.0022C0.1429 26.9916 0.0146448 25.958 0 24.9196C0.00981828 24.2621 0.0699257 23.6064 0.179794 22.9581C0.303878 22.0774 0.523089 21.2126 0.833585 20.379C1.10819 19.6494 1.49415 18.9668 1.97772 18.3555C2.25885 18.0024 2.49095 17.6069 2.76554 17.2473C4.50827 14.944 7.00336 13.3246 9.81667 12.6707C10.3593 12.54 10.902 12.4027 11.4512 12.3014C11.9415 12.2098 12.4319 12.151 12.9352 12.1052C13.5171 12.0529 14.099 12.0071 14.6842 12.0006C17.0316 11.9679 19.3313 12.6659 21.2646 13.9979C21.4849 14.1312 21.6834 14.2977 21.853 14.4916C21.9782 14.6441 22.0616 14.8266 22.0949 15.0211C22.1078 15.0669 22.134 15.1078 22.1701 15.1388C22.631 15.5834 23.1214 16.0051 23.5463 16.4824C24.2217 17.2202 24.7104 18.1091 24.9716 19.0746C25.0913 19.4646 25.133 19.8744 25.0943 20.2804C25.0555 20.6865 24.9372 21.081 24.746 21.4414C24.4263 21.9796 23.9767 22.4292 23.4384 22.749C22.8396 23.1564 22.1212 23.351 21.3986 23.3014C20.723 23.2705 20.0818 22.9952 19.5942 22.5266C19.0818 21.9943 18.5359 21.4952 17.9597 21.0327C17.5805 20.7451 17.1882 20.4738 16.7927 20.2155C16.3145 19.9282 15.7848 19.7372 15.2333 19.6532C14.6061 19.5385 13.9673 19.5001 13.3308 19.5388C11.9394 19.5653 10.5931 20.0374 9.48975 20.8857C8.66293 21.5103 7.98239 22.308 7.49573 23.2229C7.22012 23.7781 7.04629 24.3782 6.9825 24.9948C6.92927 25.3751 6.89872 25.7582 6.89097 26.1421C6.9218 27.2366 7.2072 28.3088 7.72456 29.2738C8.10681 30.0223 8.61552 30.6991 9.22825 31.2744C9.79817 31.7865 10.4296 32.2258 11.1079 32.5819C11.88 33.0005 12.7327 33.249 13.6087 33.311C14.759 33.4311 15.921 33.2567 16.9855 32.8043C17.4957 32.5644 17.9655 32.2469 18.3781 31.8628C19.0907 31.2499 19.6885 30.5148 20.1433 29.6922C20.3133 29.3947 20.431 29.0678 20.5748 28.7541C20.6173 28.6593 20.6663 28.5644 20.7154 28.4729C20.7453 28.4285 20.7805 28.388 20.82 28.352"
            fill={color}
        />
        <path
            d="M192.009 23.3602C194.363 23.3602 195.931 25.1124 195.931 27.7014C195.931 30.2904 194.363 32.0165 192.009 32.0165C189.655 32.0165 188.06 30.2904 188.06 27.6753C188.06 25.0601 189.629 23.3602 192.009 23.3602ZM123.099 23.0987C124.93 23.0987 126.132 24.1186 126.421 25.74H119.804C120.092 24.1056 121.295 23.0987 123.099 23.0987ZM63.7872 29.4797C63.7872 31.0749 62.8458 32.0165 61.172 32.0165C59.4983 32.0165 58.5046 31.0749 58.5046 29.4797V20.5359C58.5046 20.4491 58.4702 20.366 58.4088 20.3047C58.3475 20.2434 58.2644 20.209 58.1777 20.209H54.778C54.6912 20.209 54.6081 20.2434 54.5468 20.3047C54.4855 20.366 54.451 20.4491 54.451 20.5359V29.6366C54.451 33.6117 56.7786 35.5992 59.7075 35.5992C61.7997 35.5992 63.2119 34.3178 63.8134 32.3825V34.867C63.8181 34.9522 63.854 35.0326 63.9143 35.0929C63.9746 35.1532 64.0551 35.1891 64.1403 35.1939H67.5661C67.6528 35.1939 67.736 35.1594 67.7973 35.0981C67.8586 35.0368 67.8931 34.9536 67.8931 34.867V20.5359C67.8931 20.4491 67.8586 20.366 67.7973 20.3047C67.736 20.2434 67.6528 20.209 67.5661 20.209H64.1272C64.0405 20.209 63.9574 20.2434 63.8961 20.3047C63.8347 20.366 63.8003 20.4491 63.8003 20.5359L63.7872 29.4797ZM98.9873 29.4797C98.9873 31.0749 98.0456 32.0165 96.3722 32.0165C94.6981 32.0165 93.7047 31.0749 93.7047 29.4797V20.5359C93.7047 20.4491 93.67 20.366 93.6086 20.3047C93.548 20.2434 93.4649 20.209 93.3776 20.209H89.9784C89.8912 20.209 89.808 20.2434 89.7467 20.3047C89.6853 20.366 89.6514 20.4491 89.6514 20.5359V29.6366C89.6514 33.6117 91.9789 35.5992 94.9081 35.5992C96.9998 35.5992 98.4122 34.3178 99.0131 32.3825V34.867C99.018 34.9522 99.0543 35.0326 99.1149 35.0929C99.1746 35.1532 99.2554 35.1891 99.3402 35.1939H102.766C102.853 35.1939 102.936 35.1594 102.998 35.0981C103.058 35.0368 103.093 34.9536 103.093 34.867V20.5359C103.093 20.4491 103.058 20.366 102.998 20.3047C102.936 20.2434 102.853 20.209 102.766 20.209H99.3273C99.2409 20.209 99.1577 20.2434 99.0963 20.3047C99.0349 20.366 99.0002 20.4491 99.0002 20.5359L98.9873 29.4797ZM106.441 34.867C106.441 34.9536 106.475 35.0368 106.536 35.0981C106.597 35.1594 106.681 35.1939 106.768 35.1939H110.141C110.228 35.1939 110.311 35.1594 110.372 35.0981C110.433 35.0368 110.468 34.9536 110.468 34.867V26.6553C110.468 24.5893 111.776 24.1971 113.607 24.1971H114.966C115.053 24.1971 115.136 24.1627 115.198 24.1014C115.259 24.0401 115.293 23.9569 115.293 23.8701V20.5359C115.293 20.4491 115.259 20.366 115.198 20.3047C115.136 20.2434 115.053 20.209 114.966 20.209H114.639C112.443 20.209 111.083 21.2289 110.455 23.7133V20.549C110.455 20.4622 110.421 20.379 110.359 20.3177C110.298 20.2564 110.215 20.222 110.128 20.222H106.755C106.668 20.222 106.584 20.2564 106.523 20.3177C106.462 20.379 106.428 20.4622 106.428 20.549L106.441 34.867ZM158.979 34.867C158.979 34.9536 159.014 35.0368 159.075 35.0981C159.136 35.1594 159.219 35.1939 159.306 35.1939H162.706C162.793 35.1939 162.876 35.1594 162.937 35.0981C162.998 35.0368 163.033 34.9536 163.033 34.867V25.74C163.033 24.2756 163.844 23.3602 165.386 23.3602C166.929 23.3602 167.793 24.2756 167.793 25.74V34.867C167.793 34.9536 167.827 35.0368 167.888 35.0981C167.949 35.1594 168.033 35.1939 168.119 35.1939H171.545C171.632 35.1939 171.715 35.1594 171.777 35.0981C171.838 35.0368 171.872 34.9536 171.872 34.867V25.74C171.872 24.2756 172.709 23.3602 174.226 23.3602C175.743 23.3602 176.632 24.2756 176.632 25.74V34.867C176.636 34.9522 176.672 35.0326 176.733 35.0929C176.793 35.1532 176.873 35.1891 176.958 35.1939H180.358C180.445 35.1939 180.528 35.1594 180.589 35.0981C180.651 35.0368 180.685 34.9536 180.685 34.867V25.6092C180.685 21.7388 178.397 19.7774 175.481 19.7774C173.023 19.7774 171.768 21.3727 171.114 23.3733C170.929 22.3754 170.405 21.4719 169.631 20.8164C168.856 20.161 167.878 19.7938 166.864 19.7774C164.72 19.7774 163.752 21.085 163.02 23.0202V20.5359C163.02 20.4491 162.985 20.366 162.924 20.3047C162.862 20.2434 162.78 20.209 162.693 20.209H159.293C159.206 20.209 159.123 20.2434 159.062 20.3047C159 20.366 158.966 20.4491 158.966 20.5359L158.979 34.867ZM200.273 27.7014C200.273 23.3079 197.684 19.7774 193.525 19.7774C190.806 19.7774 188.714 21.2158 188.06 23.2556V20.5359C188.06 20.4491 188.026 20.366 187.964 20.3047C187.903 20.2434 187.82 20.209 187.733 20.209H184.32C184.234 20.209 184.151 20.2434 184.089 20.3047C184.028 20.366 183.993 20.4491 183.993 20.5359V40.6727C183.993 40.7593 184.028 40.8425 184.089 40.9038C184.151 40.9651 184.234 40.9995 184.32 40.9995H187.746C187.833 40.9995 187.916 40.9651 187.977 40.9038C188.039 40.8425 188.073 40.7593 188.073 40.6727V32.1734C188.727 34.2132 190.819 35.6254 193.538 35.6254C197.697 35.6254 200.286 32.121 200.286 27.7014H200.273ZM143.628 26.8188L146.266 19.699L148.911 26.8188H143.628ZM130.552 27.708C130.552 23.236 127.885 19.6009 123.073 19.6009C118.549 19.6009 115.594 23.236 115.594 27.708C115.594 32.3368 118.889 35.7888 123.91 35.7888C126.63 35.7888 128.957 34.5858 130.056 32.9906C130.084 32.9533 130.105 32.9105 130.116 32.8649C130.128 32.8193 130.131 32.7718 130.123 32.7253C130.116 32.6788 130.099 32.6343 130.074 32.5945C130.049 32.5546 130.016 32.5203 129.977 32.4937L127.689 30.4539C127.657 30.426 127.62 30.405 127.58 30.3924C127.539 30.3798 127.496 30.3759 127.454 30.3808C127.413 30.3857 127.372 30.3995 127.337 30.4211C127.3 30.4427 127.269 30.4717 127.245 30.5062C126.854 31.07 126.329 31.5278 125.717 31.8382C125.105 32.1487 124.426 32.302 123.74 32.2845C121.805 32.2845 120.026 31.3692 119.764 28.8586H130.225C130.27 28.8627 130.313 28.8569 130.355 28.8419C130.397 28.8269 130.435 28.803 130.465 28.7718C130.497 28.7406 130.521 28.7029 130.536 28.6614C130.551 28.6199 130.557 28.5757 130.552 28.5317V27.708ZM77.2684 23.3929C77.2684 23.4796 77.3029 23.5628 77.3642 23.6241C77.4254 23.6854 77.5086 23.7198 77.5953 23.7198H79.7921V30.7416C79.7921 33.5659 81.2305 35.2135 84.238 35.2135H87.0363C87.1228 35.2135 87.2059 35.179 87.2673 35.1177C87.3287 35.0564 87.3626 34.9733 87.3626 34.8866V31.9445C87.3667 31.9006 87.361 31.8563 87.3465 31.8148C87.3311 31.7734 87.3077 31.7356 87.2762 31.7045C87.2447 31.6732 87.2076 31.6493 87.1656 31.6343C87.1244 31.6193 87.08 31.6136 87.0363 31.6177H85.1369C84.1952 31.6177 83.8818 31.2907 83.8818 30.4931V23.7263H86.9935C87.0799 23.7263 87.1631 23.6919 87.2245 23.6306C87.2859 23.5693 87.3206 23.4861 87.3206 23.3995V20.549C87.3206 20.4622 87.2859 20.379 87.2245 20.3177C87.1631 20.2564 87.0799 20.222 86.9935 20.222H83.8818V15.907C83.8818 15.8203 83.8471 15.7372 83.7857 15.6759C83.7244 15.6145 83.6412 15.5801 83.5548 15.5801H80.0797C80.0358 15.5761 79.9914 15.5818 79.95 15.5968C79.9085 15.6118 79.8708 15.6357 79.8396 15.6669C79.8084 15.6981 79.7845 15.7358 79.7695 15.7773C79.7545 15.8188 79.7488 15.8631 79.7528 15.907V20.1959H77.556C77.4694 20.1959 77.3862 20.2303 77.3249 20.2917C77.2636 20.353 77.2292 20.4361 77.2292 20.5228L77.2684 23.3929ZM136.005 34.8997C135.991 34.9349 135.985 34.973 135.989 35.0107C135.992 35.0485 136.005 35.0849 136.026 35.1168C136.046 35.1488 136.074 35.1755 136.106 35.1945C136.139 35.2136 136.177 35.2246 136.215 35.2265H140.215C140.316 35.2295 140.413 35.199 140.494 35.1397C140.575 35.0805 140.633 34.9959 140.66 34.8997L142.255 30.5585H150.31L151.944 34.8997C151.972 34.9959 152.03 35.0805 152.111 35.1397C152.191 35.199 152.289 35.2295 152.389 35.2265H156.468C156.506 35.2246 156.544 35.2136 156.577 35.1945C156.609 35.1755 156.637 35.1488 156.657 35.1168C156.678 35.0849 156.691 35.0485 156.694 35.0107C156.698 34.973 156.692 34.9349 156.678 34.8997L149.355 15.8874C149.326 15.8008 149.269 15.726 149.194 15.6742C149.118 15.6224 149.029 15.5962 148.937 15.5997H143.733C143.637 15.5903 143.541 15.6136 143.46 15.6658C143.38 15.7181 143.319 15.7962 143.288 15.8874L136.005 34.8997ZM44.8665 31.5522C41.3883 31.5522 39.0608 28.9632 39.0608 25.3805C39.0608 21.7977 41.3883 19.2087 44.8665 19.2087C45.8224 19.2185 46.7631 19.4505 47.614 19.8862C48.465 20.3219 49.203 20.9494 49.7699 21.7192C49.794 21.7617 49.8279 21.7978 49.8688 21.8246C49.9097 21.8513 49.9563 21.8679 50.005 21.873C50.0535 21.8781 50.1026 21.8716 50.1481 21.854C50.1937 21.8363 50.2343 21.808 50.2668 21.7715L53.0389 19.3917C53.1032 19.3329 53.1439 19.2528 53.1535 19.1662C53.1631 19.0796 53.141 18.9925 53.0912 18.921C51.3913 16.4366 48.5146 15.1813 44.8796 15.1813C38.6685 15.1813 34.5758 19.8101 34.5758 25.3805C34.5758 31.0031 38.6816 35.6319 44.8796 35.6319C48.5146 35.6319 51.5744 34.0889 53.0912 31.8399C53.1417 31.7687 53.1642 31.6814 53.1545 31.5946C53.1449 31.5078 53.1037 31.4276 53.0389 31.3692L50.2406 29.0809C50.2106 29.045 50.172 29.0171 50.1285 28.9996C50.085 28.9822 50.0378 28.9757 49.9913 28.9809C49.9447 28.9861 49.9001 29.0027 49.8614 29.0293C49.8228 29.0559 49.7914 29.0916 49.7699 29.1332C49.193 29.8847 48.4504 30.4928 47.5998 30.9102C46.7493 31.3275 45.8139 31.5428 44.8665 31.5392V31.5522ZM75.0194 14.5406H71.5543C71.5103 14.5366 71.4661 14.5422 71.4246 14.5573C71.383 14.5723 71.3454 14.5962 71.3142 14.6274C71.283 14.6586 71.2591 14.6963 71.244 14.7378C71.229 14.7793 71.2234 14.8235 71.2273 14.8675V34.8735C71.2273 34.9602 71.2618 35.0434 71.3231 35.1046C71.3844 35.1659 71.4676 35.2004 71.5543 35.2004H75.003C75.0897 35.2004 75.1729 35.1659 75.2342 35.1046C75.2955 35.0434 75.3299 34.9602 75.3299 34.8735V14.8609C75.3339 14.817 75.3283 14.7727 75.3132 14.7312C75.2982 14.6897 75.2742 14.6521 75.2431 14.6209C75.2119 14.5897 75.1742 14.5657 75.1327 14.5507C75.0912 14.5357 75.047 14.53 75.003 14.534"
            fill={color}
        />
    </svg >
);
export default CultureAmpIcon;
