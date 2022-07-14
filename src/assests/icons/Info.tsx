import * as React from "react"

interface Props {
  height?: number;
  width?: number;
  className?: string;
  onClick?: () => void;
}

export default function Info({ width, height, className, onClick }: Props) {
  return (
    <svg
      className={className}
      width={width ? width : 100}
      height={height ? height : 100}
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      onClick={onClick}
    >
      <circle cx={256} cy={256} r={245.801} fill="#bcc987" />
      <g fill="#ffe6b8">
        <path d="M256 411.538c-14.082 0-25.498-11.416-25.498-25.498V208.574c0-14.082 11.416-25.498 25.498-25.498s25.498 11.416 25.498 25.498V386.04c0 14.082-11.416 25.498-25.498 25.498zM256 151.458c-6.711 0-13.28-2.723-18.033-7.466-4.742-4.753-7.465-11.321-7.465-18.032s2.723-13.29 7.465-18.033c4.753-4.742 11.322-7.465 18.033-7.465 6.711 0 13.279 2.723 18.032 7.465 4.743 4.743 7.466 11.322 7.466 18.033s-2.723 13.279-7.466 18.032c-4.753 4.743-11.321 7.466-18.032 7.466z" />
      </g>
      <g fill="#4d3d36">
        <path d="M256 512c-68.381 0-132.667-26.628-181.019-74.981C26.628 388.667 0 324.381 0 256S26.628 123.333 74.981 74.981C123.333 26.628 187.619 0 256 0s132.667 26.628 181.019 74.981C485.372 123.333 512 187.619 512 256s-26.628 132.667-74.981 181.019C388.667 485.372 324.381 512 256 512zm0-491.602C126.089 20.398 20.398 126.089 20.398 256S126.089 491.602 256 491.602 491.602 385.911 491.602 256 385.911 20.398 256 20.398z" />
        <path d="M430.023 383.95c-1.97 0-3.961-.57-5.715-1.758-4.662-3.162-5.88-9.503-2.719-14.166 12.984-19.151 22.453-40.188 28.142-62.528a10.193 10.193 0 0112.4-7.367c5.46 1.389 8.757 6.943 7.367 12.4-6.272 24.634-16.711 47.83-31.024 68.94a10.186 10.186 0 01-8.451 4.479zM465.914 275.378c-.149 0-.298-.003-.448-.01-5.628-.243-9.993-5.002-9.749-10.63.124-2.883.188-5.824.188-8.739 0-5.632 4.567-10.199 10.199-10.199s10.199 4.567 10.199 10.199c0 3.208-.069 6.444-.207 9.62-.237 5.478-4.752 9.759-10.182 9.759zM256 421.737c-19.683 0-35.697-16.014-35.697-35.697V208.574c0-19.683 16.014-35.697 35.697-35.697 19.683 0 35.697 16.014 35.697 35.697V386.04c0 19.683-16.014 35.697-35.697 35.697zm0-228.462c-8.436 0-15.299 6.863-15.299 15.299V386.04c0 8.436 6.863 15.299 15.299 15.299s15.299-6.863 15.299-15.299V208.574c0-8.436-6.863-15.299-15.299-15.299zM256 161.657c-9.386 0-18.585-3.807-25.237-10.446-6.654-6.668-10.46-15.867-10.46-25.251 0-9.4 3.809-18.6 10.451-25.244 6.662-6.647 15.861-10.453 25.246-10.453 9.384 0 18.583 3.806 25.235 10.444 6.653 6.652 10.462 15.853 10.462 25.253 0 9.385-3.807 18.584-10.446 25.236-6.667 6.654-15.866 10.461-25.251 10.461zm0-50.996a15.447 15.447 0 00-10.829 4.486c-2.836 2.837-4.469 6.781-4.469 10.813 0 4.024 1.636 7.971 4.486 10.829a15.434 15.434 0 0010.813 4.47c4.024 0 7.97-1.636 10.827-4.486a15.436 15.436 0 004.471-10.813c0-4.031-1.633-7.974-4.479-10.82a15.436 15.436 0 00-10.82-4.479z" />
      </g>
    </svg>
  )
}