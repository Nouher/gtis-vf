const Wave = ({className=""}) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className={` ${className}`}
    >
      <path
        fill="#ffffff"
        fillOpacity="1"
        d="M0,320L1440,32L1440,320L0,320Z"
      />
    </svg>
  );
  
  export default Wave;