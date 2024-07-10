const Arrow = (props: ReactTagProps<"svg">) => {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.3968 12L5.24537e-07 6L6.3968 -1.40156e-07L8 1.5L3.1984 6L8 10.5L6.3968 12Z"
      />
    </svg>
  );
};

export { Arrow };
