const BasketIcon = (props: ReactTagProps<"svg">) => {
  const { stroke, ...otherProps } = props;
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <g clipPath="url(#clip0_250_1839)">
        <path
          d="M18.3997 17.7011C18.4222 17.9015 18.402 18.1044 18.3405 18.2965C18.2789 18.4886 18.1774 18.6654 18.0426 18.8154C17.9074 18.9652 17.7421 19.0846 17.5574 19.1659C17.3727 19.2471 17.1729 19.2884 16.9712 19.2868H3.02831C2.82655 19.2884 2.62676 19.2471 2.44209 19.1659C2.25742 19.0846 2.09205 18.9652 1.95688 18.8154C1.82207 18.6654 1.72054 18.4886 1.65899 18.2965C1.59743 18.1044 1.57724 17.9015 1.59974 17.7011L2.85688 6.42969H17.1426L18.3997 17.7011Z"
          strokeWidth="1.625"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.42822 6.42913V4.28627C6.42822 3.33907 6.8045 2.43066 7.47427 1.76089C8.14404 1.09112 9.05245 0.714844 9.99965 0.714844C10.9469 0.714844 11.8553 1.09112 12.525 1.76089C13.1948 2.43066 13.5711 3.33907 13.5711 4.28627V6.42913"
          strokeWidth="1.625"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_250_1839">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export { BasketIcon };
