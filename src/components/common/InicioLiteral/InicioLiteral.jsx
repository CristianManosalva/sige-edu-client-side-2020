import * as React from "react"

function InicioLiteral(props) {
  return (
    <svg
      width={258.85}
      height={122.021}
      viewBox="120.575 13.989 258.85 122.021"
      style={{
        background: "0 0",
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <filter id="prefix__editing-extrude-glow">
          <feFlood floodColor="#4fff15" result="flood-1" />
          <feMorphology radius={1} in="SourceAlpha" result="erode" />
          <feComposite operator="in" in="flood-1" in2="erode" result="comp1" />
          <feConvolveMatrix
            order="3,3"
            divisor={1}
            in="comp1"
            result="convolve"
            kernelMatrix="0 0 0 1 1 1 0 0 0"
          />
          <feOffset dx={-3} in="convolve" result="extrude" />
          <feComposite
            operator="in"
            in="flood-1"
            in2="extrude"
            result="comp-extrude"
          />
          <feFlood floodColor="#000" result="flood-2" />
          <feComposite
            operator="in"
            in="flood-2"
            in2="SourceAlpha"
            result="comp2"
          />
          <feMorphology
            operator="dilate"
            radius={1}
            in="comp2"
            result="dilate"
          />
          <feOffset dx={-4.5} in="dilate" result="offset" />
          <feGaussianBlur in="offset" stdDeviation={5.8} result="blur" />
          <feComponentTransfer in="blur" result="shadow">
            <feFuncA type="linear" slope={0.8} intercept={-0.2} />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="comp-extrude" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#prefix__editing-extrude-glow)">
        <path
          d="M177.685 98.992h-13.96l8.13-42.24h14.08l-8.25 42.24zm36.73 1.28q-7.74 0-7.74-6.02.06-1.66.57-4.48l1.16-5.88q1.72-8.32 1.72-10.18 0-3.71-2.17-3.71-3.65 0-5.57 9.53l-3.78 19.46-12.86 1.28 6.66-33.98 10.49-1.22-1.02 6.27q3.01-6.27 12.22-6.27 4.48 0 6.37 1.89 1.89 1.89 1.89 6.11 0 3.97-2.05 13.25-.96 4.16-.96 5.73 0 1.56.86 2.46.87.9 2.15 1.02-.64 2.18-2.85 3.46-2.21 1.28-5.09 1.28zm28.42-4.8q-1.99 4.8-8.32 4.8-3.27 0-5.31-2.24-1.73-1.98-1.73-3.97 0-5.18 2.37-15.29l2.36-12.42 13-1.28-3.91 20.22q-1.09 4.74-1.09 6.4 0 3.65 2.63 3.78zm-9.47-38.02q0-2.49 2.08-3.84 2.08-1.34 5.08-1.34 3.01 0 4.84 1.34 1.82 1.35 1.82 3.84 0 2.5-2.02 3.78-2.01 1.28-5.02 1.28t-4.9-1.28q-1.88-1.28-1.88-3.78zm46.33 14.92q0 2.68-2.24 4.35-2.24 1.66-5.89 1.66-1.53 0-2.43-.45.71-1.66.93-3.74.22-2.08.22-2.66 0-2.68-1.85-2.68-1.28 0-2.72 1.6-1.44 1.6-2.66 4.09-2.69 5.76-2.69 11.59 0 3.2 1.22 4.64 1.22 1.44 3.9 1.44 3.72 0 6.66-3.08.83-.96 1.28-2.04 2.43 1.28 2.43 4.8 0 3.58-3.97 5.95-4.09 2.43-10.62 2.43-12.99 0-12.99-13.76 0-10.05 5.69-15.81 5.51-5.63 15.62-5.63t10.11 7.3zm17.09 23.1q-1.98 4.8-8.32 4.8-3.26 0-5.31-2.24-1.73-1.98-1.73-3.97 0-5.18 2.37-15.29l2.37-12.42 12.99-1.28-3.91 20.22q-1.08 4.74-1.08 6.4 0 3.65 2.62 3.78zm-9.47-38.02q0-2.49 2.08-3.84 2.08-1.34 5.09-1.34 3 0 4.83 1.34 1.82 1.35 1.82 3.84 0 2.5-2.01 3.78-2.02 1.28-5.03 1.28-3.01 0-4.89-1.28-1.89-1.28-1.89-3.78zm28.86 42.82q-14.08 0-14.08-13.25 0-9.41 5.19-15.49 5.5-6.46 15.04-6.46 6.91 0 10.43 3.2 3.52 3.2 3.52 9.92 0 10.24-5.51 16.19-5.37 5.89-14.59 5.89zm1.67-27.84q-.77 1.73-1.38 4.32-.61 2.59-1.38 6.69-.76 4.09-.76 9.15 0 1.66.54 2.75t2.02 1.09q1.47 0 2.4-.7.92-.71 1.63-2.37 1.28-2.95 2.3-8.42 1.03-5.47 1.12-7.84.1-2.37.1-4.13 0-1.76-.51-2.91-.52-1.15-1.96-1.15t-2.4.9q-.96.89-1.72 2.62z"
          fill="#009ad0"
        />
      </g>
      <style />
    </svg>
  )
}

export default InicioLiteral
