// @ts-nocheck
"use client";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import boardroomBg from "./assets/boardroom-financial-services.png";

// Inline SVG logo (converted from svgviewer output)
const KbfLogoSvg = (props) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 658 463.23"
    role="img"
    {...props}
  >
    <defs>
      <filter
        id="drop-shadow-1"
        x={0}
        y={0}
        width={478}
        height={370}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx={7} dy={7} />
        <feGaussianBlur result="blur" stdDeviation={5} />
        <feFlood floodColor="#000" floodOpacity={0.75} />
        <feComposite in2="blur" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter
        id="drop-shadow-2"
        x={441}
        y={0}
        width={217}
        height={297}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx={7} dy={7} />
        <feGaussianBlur result="blur-2" stdDeviation={5} />
        <feFlood floodColor="#000" floodOpacity={0.75} />
        <feComposite in2="blur-2" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <path
      d="M116,8.33c-.17,1.13.4,3.07-.14,3.86-.38.57-10.09,3.08-12.89,4.61-5.74,3.12-16.97,14.46-16.97,21.03v104.5c22.37-22.76,46.86-44.63,68.51-67.99,7.96-8.59,27.42-29.32,28.49-40.51.76-7.92-2.04-14.23-9.32-17.68-2.85-1.35-11.22-2.43-11.63-2.87s.15-3.78-.05-4.96c19.29,0,38.59,0,57.88-.01,31.87,0,63.74-.01,95.6-.02,36.66,0,92.05.4,107.76,42.23.76,2.02,1.38,4.08,1.89,6.17,9.26,38.54-12.5,60.61-46.61,72.64l-13.51,3.97c38.67,2.12,77.44,23.35,80.98,65.53,4.42,52.61-46.21,73.52-90.44,75.53-35.07,1.59-71.35-1.28-106.54-.03,20.7,25.1,47.66,46.58,79.78,54.71,42.45,10.73,86.11,1.15,116.19-31.25,1.57-1.69,9.66-12.81,10.02-8.46.48,5.64-18.51,26.52-21.98,29.51-27.34,23.53-65.2,30.46-100.56,28.53-112.07-6.11-168.55-127.94-229.1-204.97-1.72-.29-16.79,15.55-17.34,18.45-.64,24.98-1.9,50.02,0,74.96,1.59,17.92,10.8,27.87,27.94,32.07,1.29.32,4.74.32,4.95.54s1.38,5.91-.41,5.91H10.5c-1.39,0-1.34-4.92-1.51-6,16.66-.82,32.82-11.37,33.05-29.46l-.17-201.63c-1.06-10.22-7.21-16.22-16.49-20.8-2.94-1.45-13.8-3.65-14.27-4.23-.5-.61.07-2.81-.11-3.89h105ZM156.65,84.98c-3.09,3.19-21.58,20.3-21.64,22.83,33.97,54.47,67.62,109.93,107.96,160.08,16.45-3.05,23.81-13.89,25.07-30.02.28-59.88,1.48-126.64,0-195.07-.49-22.45-12.66-31.82-34.82-24.74-20.72,6.62-60.05,49.89-76.57,66.93ZM311,128.33c16.68-.62,34.94,1.17,49.69-7.81,27.89-16.96,31.9-62.63,11.83-86.87-7.56-9.13-18.97-13.05-30.31-15.44-4.02-.84-31.21-2.56-31.21-1.88v112ZM311,263.33c29.56-1.32,63.73,6.79,81.52-22.98,17.23-28.83,11.75-76.41-19.5-93.53-18.37-10.07-41.7-8.34-62.02-8.48v125Z"
      fill="#bb992c"
      filter="url(#drop-shadow-1)"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
    <path
      d="M627,8.33l8,91-5.12-.58c-6.2-27.02-17.49-57.57-42.87-71.94-18.83-10.66-40.88-10.73-62.02-10.48v117c.73.27,1.2-1,1.5-1h32c13.33,0,24.84-10.64,29.68-22.32,1.01-2.43,3.36-13.17,3.96-13.55.96-.6,3.52.07,4.87-.14l1,89.01c-1.32-.24-5.47.41-5.96-.06-.72-.69-2.76-15.93-4.01-19.49-3.51-10.05-15.34-22.46-26.54-22.46h-36.5v102.5c0,.76,2.51,7.64,3.12,8.88,4.43,8.93,18.37,14.07,27.88,13.63-1.36,1.24-.7,5.99-1,5.99h-105c.25-1.32-.42-5.47.05-5.96.41-.43,8.9-1.74,11.63-2.86,13.61-5.58,18-16.64,19.36-30.64l-.12-189.14c0-6.64-1.72-13.23-5.31-18.81-2.51-3.89-5.78-7.25-9.91-9.78-2.75-1.69-12.18-4.38-12.56-4.94-.54-.79.04-2.73-.14-3.86h174Z"
      fill="#bb992c"
      filter="url(#drop-shadow-2)"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
    <path
      d="M43.68,462.12h-15.98v-2.09c1.73-.77,3.46-1.34,5.18-1.73l18.22-47.45h2.09l18.22,47.45c.96.19,1.91.41,2.84.65.94.24,1.81.6,2.63,1.08v2.09h-18.58v-2.09c.96-.38,1.94-.72,2.95-1.01,1.01-.29,1.99-.53,2.95-.72l-4.87-13.18h-17.12l-4.73,13.18c2.02.29,4.08.86,6.19,1.73v2.09ZM43.64,441.38h14.47l-5.66-15.26-1.36-6.19h-.14l-1.79,6.34-5.51,15.12Z"
      fill="#bb992c"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
    <path
      d="M87.67,457.15c.58.58,1.32,1.07,2.23,1.48.91.41,2.28.61,4.1.61,1.54,0,2.98-.2,4.32-.61,1.34-.41,2.51-1.01,3.49-1.8.98-.79,1.76-1.75,2.34-2.88.58-1.13.86-2.41.86-3.85,0-1.92-.59-3.53-1.76-4.82-1.18-1.3-2.64-2.45-4.39-3.46-1.75-1.01-3.66-1.99-5.72-2.95-2.06-.96-3.97-2.1-5.72-3.42-1.75-1.32-3.22-2.9-4.39-4.75-1.18-1.85-1.76-4.16-1.76-6.95,0-2.02.36-3.82,1.08-5.4.72-1.58,1.74-2.93,3.06-4.03,1.32-1.1,2.89-1.96,4.72-2.56,1.82-.6,3.86-.9,6.12-.9,2.93,0,5.6.23,8.03.68,2.42.46,4.33,1.02,5.72,1.69,0,.82-.06,1.76-.18,2.84-.12,1.08-.26,2.2-.43,3.35-.17,1.15-.35,2.27-.54,3.35-.19,1.08-.38,2.03-.58,2.84h-1.87l-2.88-9.86c-.87-.38-1.97-.67-3.31-.86-1.33-.19-2.75-.29-4.25-.29-2.47,0-4.46.68-5.96,2.05-1.5,1.37-2.25,3.28-2.25,5.72,0,1.97.59,3.62,1.77,4.97,1.18,1.34,2.67,2.54,4.46,3.6,1.79,1.06,3.71,2.08,5.76,3.06,2.05.98,3.97,2.12,5.76,3.42s3.27,2.83,4.46,4.61c1.18,1.78,1.78,3.98,1.78,6.62,0,2.16-.4,4.13-1.19,5.9-.79,1.78-1.93,3.29-3.42,4.54-1.49,1.25-3.31,2.21-5.47,2.88-2.16.67-4.61,1.01-7.34,1.01-3.02,0-5.74-.36-8.14-1.08-2.4-.72-4.1-1.49-5.11-2.3.05-.82.13-1.8.25-2.95.12-1.15.26-2.34.43-3.56.17-1.22.35-2.41.54-3.56.19-1.15.38-2.14.58-2.95h1.87l2.95,10.58Z"
      fill="#bb992c"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
    <path
      d="M126.26,457.15c.58.58,1.32,1.07,2.23,1.48.91.41,2.28.61,4.1.61,1.54,0,2.98-.2,4.32-.61,1.34-.41,2.51-1.01,3.49-1.8.98-.79,1.76-1.75,2.34-2.88.58-1.13.86-2.41.86-3.85,0-1.92-.59-3.53-1.76-4.82-1.18-1.3-2.64-2.45-4.39-3.46-1.75-1.01-3.66-1.99-5.72-2.95-2.06-.96-3.97-2.1-5.72-3.42-1.75-1.32-3.22-2.9-4.39-4.75-1.18-1.85-1.76-4.16-1.76-6.95,0-2.02.36-3.82,1.08-5.4.72-1.58,1.74-2.93,3.06-4.03,1.32-1.1,2.89-1.96,4.72-2.56,1.82-.6,3.86-.9,6.12-.9,2.93,0,5.6.23,8.03.68,2.42.46,4.33,1.02,5.72,1.69,0,.82-.06,1.76-.18,2.84-.12,1.08-.26,2.2-.43,3.35-.17,1.15-.35,2.27-.54,3.35-.19,1.08-.38,2.03-.58,2.84h-1.87l-2.88-9.86c-.87-.38-1.97-.67-3.31-.86-1.33-.19-2.75-.29-4.25-.29-2.47,0-4.46.68-5.96,2.05-1.5,1.37-2.25,3.28-2.25,5.72,0,1.97.59,3.62,1.77,4.97,1.18,1.34,2.67,2.54,4.46,3.6,1.79,1.06,3.71,2.08,5.76,3.06,2.05.98,3.97,2.12,5.76,3.42s3.27,2.83,4.46,4.61c1.18,1.78,1.78,3.98,1.78,6.62,0,2.16-.4,4.13-1.19,5.9-.79,1.78-1.93,3.29-3.42,4.54-1.49,1.25-3.31,2.21-5.47,2.88-2.16.67-4.61,1.01-7.34,1.01-3.02,0-5.74-.36-8.14-1.08-2.4-.72-4.1-1.49-5.11-2.3.05-.82.13-1.8.25-2.95.12-1.15.26-2.34.43-3.56.17-1.22.35-2.41.54-3.56.19-1.15.38-2.14.58-2.95h1.87l2.95,10.58Z"
      fill="#bb992c"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
    <path
      d="M157.87,436.92c0-3.74.52-7.21,1.55-10.4,1.03-3.19,2.52-5.95,4.46-8.28,1.94-2.33,4.33-4.14,7.16-5.44,2.83-1.3,6.05-1.94,9.65-1.94s6.81.65,9.65,1.94c2.83,1.3,5.22,3.11,7.16,5.44,1.94,2.33,3.43,5.09,4.46,8.28,1.03,3.19,1.55,6.66,1.55,10.4s-.52,7.21-1.55,10.4c-1.03,3.19-2.52,5.95-4.46,8.28-1.94,2.33-4.33,4.14-7.16,5.44-2.83,1.3-6.05,1.94-9.65,1.94s-6.82-.65-9.65-1.94c-2.83-1.3-5.22-3.11-7.16-5.44-1.94-2.33-3.43-5.09-4.46-8.28-1.03-3.19-1.55-6.66-1.55-10.4ZM165.57,436.92c0,3.07.32,5.96.97,8.68.65,2.71,1.62,5.08,2.92,7.09,1.3,2.02,2.93,3.61,4.9,4.79,1.97,1.18,4.29,1.76,6.98,1.76,2.45,0,4.58-.59,6.41-1.76,1.82-1.18,3.32-2.77,4.5-4.79,1.18-2.02,2.06-4.38,2.66-7.09.6-2.71.9-5.6.9-8.68s-.31-5.96-.94-8.68c-.62-2.71-1.58-5.08-2.88-7.09-1.3-2.02-2.93-3.61-4.9-4.79-1.97-1.18-4.3-1.76-6.98-1.76s-4.88.59-6.73,1.76c-1.85,1.18-3.35,2.77-4.5,4.79-1.15,2.02-1.99,4.38-2.52,7.09-.53,2.71-.79,5.6-.79,8.68Z"
      fill="#bb992c"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
    <path
      d="M246.71,449.01h1.87c.24,1.34.46,3.04.65,5.08.19,2.04.24,4.02.14,5.94-.72.58-1.58,1.04-2.59,1.4-1.01.36-2.08.66-3.2.9-1.13.24-2.28.41-3.46.5-1.18.1-2.29.14-3.35.14-4.03,0-7.63-.52-10.8-1.55-3.17-1.03-5.84-2.6-8.03-4.72-2.19-2.11-3.86-4.81-5.04-8.1-1.18-3.29-1.76-7.19-1.76-11.7s.65-8.7,1.94-11.99c1.3-3.29,3.05-5.98,5.26-8.06,2.21-2.09,4.78-3.61,7.7-4.57,2.93-.96,6-1.44,9.22-1.44s5.83.2,7.99.61c2.16.41,4.06,1.02,5.69,1.84,0,.77-.02,1.67-.07,2.7-.05,1.03-.12,2.12-.22,3.28-.1,1.15-.22,2.28-.36,3.38-.14,1.1-.29,2.11-.43,3.02h-1.87l-3.74-10.37c-.53-.29-1.4-.48-2.62-.58-1.22-.1-2.43-.14-3.62-.14-2.39,0-4.66.44-6.79,1.33-2.13.89-4,2.26-5.6,4.1-1.6,1.85-2.88,4.18-3.84,6.98-.96,2.81-1.44,6.11-1.44,9.9,0,3.41.43,6.49,1.29,9.25.86,2.76,2.11,5.11,3.73,7.06,1.63,1.94,3.61,3.43,5.96,4.46,2.34,1.03,5,1.55,7.97,1.55,1.58,0,2.9-.12,3.95-.36,1.05-.24,1.75-.55,2.08-.94l3.38-8.93Z"
      fill="#bb992c"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
    <path
      d="M275.59,462.12h-18.43v-2.09c1.87-.86,3.79-1.44,5.76-1.73v-42.7c-.96-.19-1.92-.44-2.88-.76-.96-.31-1.92-.66-2.88-1.04v-2.09h18.43v2.09c-.86.38-1.8.73-2.81,1.04-1.01.31-1.99.56-2.95.76v42.7c1.01.19,2.02.43,3.02.72,1.01.29,1.92.62,2.74,1.01v2.09Z"
      fill="#bb992c"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
    <path
      d="M295.03,462.12h-15.98v-2.09c1.73-.77,3.46-1.34,5.18-1.73l18.22-47.45h2.09l18.21,47.45c.96.19,1.91.41,2.84.65.94.24,1.81.6,2.63,1.08v2.09h-18.58v-2.09c.96-.38,1.94-.72,2.95-1.01s1.99-.53,2.95-.72l-4.87-13.18h-17.12l-4.73,13.18c2.02.29,4.08.86,6.19,1.73v2.09ZM294.99,441.38h14.47l-5.66-15.26-1.36-6.19h-.14l-1.79,6.34-5.52,15.12Z"
      fill="#bb992c"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
    <path
      d="M354.79,462.12h-20.23v-2.09c1.06-.38,2.12-.72,3.2-1.01s2.24-.53,3.49-.72v-42.84h-11.02l-3.82,10.3h-1.8c-.14-.96-.26-2.05-.36-3.28-.1-1.22-.18-2.47-.25-3.74-.07-1.27-.13-2.52-.18-3.74-.05-1.22-.07-2.32-.07-3.28h41.83c0,.96-.03,2.04-.07,3.24-.05,1.2-.11,2.44-.18,3.71-.07,1.27-.15,2.52-.22,3.74-.07,1.22-.18,2.34-.33,3.35h-1.89l-3.79-10.3h-10.94v42.84c1.25.24,2.41.48,3.49.72,1.08.24,2.12.58,3.13,1.01v2.09Z"
      fill="#bb992c"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
    <path
      d="M403.17,411.72c-.05,1.92-.13,3.85-.25,5.8-.12,1.94-.3,3.9-.54,5.87h-1.87l-2.95-7.92h-15.7v19.08h11.74l2.81-5.33h1.8c.29,4.75.29,9.6,0,14.54h-1.8l-2.81-5.47h-11.74v20.09h16.56l3.53-8.64h1.8c.33,2.02.58,4.06.72,6.12.14,2.06.17,4.15.07,6.26h-35.5v-2.09c1.68-.77,3.65-1.34,5.9-1.73v-42.7c-.96-.19-1.94-.44-2.95-.76s-1.99-.66-2.95-1.04v-2.09h34.13Z"
      fill="#bb992c"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
    <path
      d="M419.66,457.15c.58.58,1.32,1.07,2.23,1.48.91.41,2.28.61,4.1.61,1.54,0,2.98-.2,4.32-.61,1.34-.41,2.51-1.01,3.49-1.8.98-.79,1.76-1.75,2.34-2.88.58-1.13.86-2.41.86-3.85,0-1.92-.59-3.53-1.76-4.82-1.18-1.3-2.64-2.45-4.39-3.46-1.75-1.01-3.66-1.99-5.72-2.95-2.06-.96-3.97-2.1-5.72-3.42-1.75-1.32-3.22-2.9-4.39-4.75-1.18-1.85-1.76-4.16-1.76-6.95,0-2.02.36-3.82,1.08-5.4.72-1.58,1.74-2.93,3.06-4.03,1.32-1.1,2.89-1.96,4.72-2.56,1.82-.6,3.86-.9,6.12-.9,2.93,0,5.6.23,8.03.68,2.42.46,4.33,1.02,5.72,1.69,0,.82-.06,1.76-.18,2.84-.12,1.08-.26,2.2-.43,3.35-.17,1.15-.35,2.27-.54,3.35-.19,1.08-.38,2.03-.58,2.84h-1.87l-2.88-9.86c-.87-.38-1.97-.67-3.31-.86-1.33-.19-2.75-.29-4.25-.29-2.47,0-4.46.68-5.96,2.05s-2.25,3.28-2.25,5.72c0,1.97.59,3.62,1.77,4.97,1.18,1.34,2.67,2.54,4.46,3.6,1.79,1.06,3.71,2.08,5.76,3.06,2.05.98,3.97,2.12,5.76,3.42,1.79,1.3,3.27,2.83,4.45,4.61,1.18,1.78,1.78,3.98,1.78,6.62,0,2.16-.4,4.13-1.19,5.9-.79,1.78-1.93,3.29-3.42,4.54-1.49,1.25-3.31,2.21-5.47,2.88-2.16.67-4.61,1.01-7.34,1.01-3.02,0-5.74-.36-8.14-1.08-2.4-.72-4.1-1.49-5.11-2.3.05-.82.13-1.8.25-2.95.12-1.15.26-2.34.43-3.56.17-1.22.35-2.41.54-3.56.19-1.15.38-2.14.58-2.95h1.87l2.95,10.58Z"
      fill="#bb992c"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
    <path
      d="M467.03,411.72h19.73v2.09c-1.15.43-2.3.8-3.46,1.12-1.15.31-2.3.54-3.46.68v42.77h16.56l4.25-11.59h1.87c.14,1.01.28,2.17.4,3.49.12,1.32.22,2.69.29,4.1.07,1.42.11,2.8.11,4.14s-.02,2.54-.07,3.6h-36.22v-2.09c1.15-.53,2.21-.91,3.17-1.15.96-.24,1.87-.43,2.74-.58v-42.7c-1.1-.19-2.16-.44-3.17-.76s-1.92-.66-2.74-1.04v-2.09Z"
      fill="#bb992c"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
    <path
      d="M529.96,462.12h-20.23v-2.09c1.06-.38,2.12-.72,3.2-1.01s2.24-.53,3.49-.72v-42.84h-11.02l-3.82,10.3h-1.8c-.14-.96-.26-2.05-.36-3.28-.1-1.22-.18-2.47-.25-3.74-.07-1.27-.13-2.52-.18-3.74-.05-1.22-.07-2.32-.07-3.28h41.83c0,.96-.03,2.04-.07,3.24-.05,1.2-.11,2.44-.18,3.71-.07,1.27-.15,2.52-.22,3.74-.07,1.22-.18,2.34-.33,3.35h-1.89l-3.79-10.3h-10.94v42.84c1.25.24,2.41.48,3.49.72,1.08.24,2.12.58,3.13,1.01v2.09Z"
      fill="#bb992c"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
    <path
      d="M544.21,462.12v-2.09c1.68-.77,3.65-1.34,5.9-1.73v-42.7c-1.1-.24-2.16-.52-3.17-.83-1.01-.31-1.92-.64-2.74-.97v-2.09h7.34c.82,0,1.78-.02,2.88-.07s2.24-.11,3.42-.18c1.17-.07,2.3-.14,3.38-.22s1.98-.11,2.7-.11c8.16,0,14.44,2.18,18.83,6.55,4.39,4.37,6.59,10.56,6.59,18.58,0,3.79-.54,7.31-1.62,10.55s-2.72,6.04-4.93,8.39c-2.21,2.35-5,4.2-8.39,5.54-3.38,1.34-7.38,2.02-11.99,2.02-.72,0-1.54-.04-2.45-.11-.91-.07-1.87-.14-2.88-.22-1.01-.07-2.03-.14-3.06-.22-1.03-.07-2-.11-2.92-.11h-6.91ZM562.93,414.88c-1.25,0-2.45.01-3.6.04-1.15.03-2.06.11-2.74.25v43.63c.24.05.67.08,1.3.11.62.02,1.3.05,2.02.07.72.02,1.4.04,2.05.04h1.4c3.31,0,6.12-.62,8.42-1.87s4.19-2.92,5.65-5c1.46-2.09,2.53-4.5,3.2-7.24s1.01-5.62,1.01-8.64c0-2.35-.32-4.79-.97-7.31-.65-2.52-1.7-4.82-3.17-6.91-1.46-2.09-3.4-3.8-5.8-5.15-2.4-1.34-5.33-2.02-8.78-2.02Z"
      fill="#bb992c"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
    <path
      d="M598.21,458.01c0-1.44.46-2.59,1.37-3.46.91-.86,2.09-1.3,3.53-1.3s2.69.43,3.6,1.3c.91.86,1.37,2.02,1.37,3.46s-.46,2.52-1.37,3.38c-.91.86-2.11,1.3-3.6,1.3s-2.62-.43-3.53-1.3c-.91-.86-1.37-1.99-1.37-3.38Z"
      fill="#bb992c"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={0.5}
    />
  </svg>
);

function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const panels = useMemo(
    () => [
      {
        key: "wealth",
        strapline: "Bespoke wealth management • Retirement planning • Protection • Clear advice • Tailored plans • Long-term support",
        title: "Welcome to KBF Associates Ltd",
        logoAlt: "KBF Associates Ltd logo",
        body: [
          "At KBF Associates Ltd, we provide bespoke wealth management advice to private and corporate clients. Our approachable, friendly team of professional advisers, supported by an experienced support team, offers a truly personal service focused on you.",
          "If you want a trusted partner to help you plan ahead and stay on track, we’d love to talk.",
        ],
        ctas: [
          { href: "#contact", label: "Get a proposal", primary: true },
          { href: "#services", label: "Explore services", primary: false },
        ],
        expectTitle: "What you can expect",
        expectSubtitle:
          "A clear plan, measurable progress and a steady pace from week one.",
        expectItems: [
          {
            title: "Clarity on what matters now",
            desc: "Align on priorities, what’s changing, and where to focus effort for the best outcomes.",
          },
          {
            title: "A delivery roadmap that stands up to scrutiny",
            desc: "Turn intent into sequenced, owned work — with governance and evidence built in.",
          },
          {
            title: "Controls that hold up in practice",
            desc: "Design, remediate and embed controls so progress continues after handover.",
          },
        ],
        quickTitle: "Quick start",
        quickBody:
          "Share your goals — we’ll reply with a short plan, risks to watch, and next steps.",
        quickLink: "Start the conversation",
      },
      {
        key: "retirement",
        badgeLeft: "Plan your retirement",
        badgeRight: "Cashflow planning • Income strategy • Pension reviews",
        strapline: "Confidence in the timeline • Options explained • Simple next steps",
        title: "Retirement, made clear",
        logoAlt: "KBF Associates Ltd logo",
        body: [
          "We’ll help you understand what you have, what you need, and how to close any gaps — with a plan you can act on.",
          "Expect straight answers, scenario modelling, and regular check-ins as life changes.",
        ],
        ctas: [
          { href: "#contact", label: "Request a retirement review", primary: true },
          { href: "#services", label: "See retirement planning", primary: false },
        ],
        expectTitle: "What we’ll build with you",
        expectSubtitle: "A retirement plan that’s realistic, flexible, and measurable.",
        expectItems: [
          {
            title: "Your retirement number & timeline",
            desc: "Translate goals into an income target and a practical timeline — with assumptions made explicit.",
          },
          {
            title: "A clear income strategy",
            desc: "Explore drawdown options, tax considerations, and sustainable withdrawal ranges.",
          },
          {
            title: "A review rhythm that keeps you on track",
            desc: "Checkpoints to adjust contributions, investments, and risk as markets and life evolve.",
          },
        ],
        quickTitle: "Quick start",
        quickBody:
          "Send your rough retirement goal and current pensions — we’ll outline scenarios and the next best moves.",
        quickLink: "Get started",
      },
      {
        key: "protection",
        badgeLeft: "Protect what matters",
        badgeRight: "Life cover • Income protection • Business protection",
        strapline: "Right-sized cover • Clear trade-offs • Peace of mind",
        title: "Protection without the hassle",
        logoAlt: "KBF Associates Ltd logo",
        body: [
          "We’ll help you put the right cover in place to protect your family, lifestyle, and business — without overcomplicating it.",
          "We focus on outcomes, budget, and what you actually need — then keep it reviewed.",
        ],
        ctas: [
          { href: "#contact", label: "Discuss protection", primary: true },
          { href: "#services", label: "Explore protection", primary: false },
        ],
        expectTitle: "What you can expect",
        expectSubtitle: "Simple recommendations you can understand and defend.",
        expectItems: [
          {
            title: "A needs-based cover check",
            desc: "Identify what to protect and for how long — with a clear rationale.",
          },
          {
            title: "Coverage that fits your budget",
            desc: "Make trade-offs visible so you can choose cover levels confidently.",
          },
          {
            title: "A plan that stays current",
            desc: "Review points after life events (new home, children, business changes) so cover keeps pace.",
          },
        ],
        quickTitle: "Quick start",
        quickBody:
          "Tell us what you want to protect and your monthly budget — we’ll suggest sensible options and next steps.",
        quickLink: "Start a protection check",
      },
    ],
    []
  );

  const pinnedRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);

  // Parallax state/refs
  const [parallaxY, setParallaxY] = useState(0);
  const parallaxYRef = useRef(0);
  const parallaxRafRef = useRef<number | null>(null);

  const clamp = (n: number, min: number, max: number) =>
    Math.min(Math.max(n, min), max);

  const scheduleParallaxCommit = () => {
    if (parallaxRafRef.current != null) return;
    parallaxRafRef.current = window.requestAnimationFrame(() => {
      parallaxRafRef.current = null;
      setParallaxY(parallaxYRef.current);
    });
  };

  useEffect(() => {
    const el = pinnedRef.current;
    if (!el) return;

    // Smooth, scroll-driven progress through the pinned section.
    // No scroll locking / preventDefault (those cause the "snap" jumps).
    const onScroll = () => {
      const vh = window.innerHeight || 1;
      const rect = el.getBoundingClientRect();
      const pageY = window.scrollY || window.pageYOffset || 0;
      const top = rect.top + pageY;
      const total = Math.max(1, el.offsetHeight - vh);

      // progress 0..1 while the pinned section scrolls past the viewport
      const raw = (pageY - top) / total;
      const progress = clamp(raw, 0, 1);

      // drive panel changes from scroll progress (snaps to nearest panel, but scroll remains smooth)
      const idx = Math.round(progress * (panels.length - 1));
      if (idx !== activeRef.current) {
        activeRef.current = idx;
        setActive(idx);
      }

      // parallax driven by scroll progress (smooth)
      // negative moves bg up as you scroll down; tweak range to taste
      const range = 180;
      parallaxYRef.current = (progress - 0.5) * -2 * range;
      scheduleParallaxCommit();
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (parallaxRafRef.current != null) {
        window.cancelAnimationFrame(parallaxRafRef.current);
        parallaxRafRef.current = null;
      }
    };
  }, [panels.length]);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 antialiased dark:bg-black dark:text-zinc-50">
      {/* Header */}
      <Header />

      {/* Hero (sticky scroll-driven) */}
      <main className="-mt-[4.5rem]">
<section
  ref={(node) => {
    pinnedRef.current = node;
  }}
  className="relative h-auto md:h-[var(--section-height)]"
  style={{ "--section-height": `${panels.length * 100}vh` } as React.CSSProperties}
>
  <div className="relative h-auto overflow-hidden md:sticky md:top-0 md:h-[100svh]">
    {/* Background layers */}
    <div className="absolute inset-0 z-0">
      {/* Soft glow accents */}
      <div className="absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-zinc-200/60 blur-3xl dark:bg-white/10" />
        <div className="absolute -bottom-32 right-0 h-72 w-[36rem] rounded-full bg-zinc-200/60 blur-3xl dark:bg-white/10" />
      </div>

      {/* Boardroom background image (parallax) */}
      <div
        className="absolute -top-[300px] -bottom-[300px] left-0 right-0"
        style={{ transform: `translateY(${parallaxY}px)` }}
      >
        <Image
          src={boardroomBg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.18] dark:opacity-[0.12]"
        />
      </div>

      {/* Logo watermark (slower parallax) */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${parallaxY * 0.5}px) translate3d(0, 0, 0)` }}
      >
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.2] dark:opacity-[0.08] sm:h-[44rem] sm:w-[44rem] md:h-[56rem] md:w-[56rem] lg:h-[68rem] lg:w-[68rem]">
          <Image src="/kbf-logo.svg" alt="" fill className="object-contain" />
        </div>
      </div>
    </div>

    {/* Content Panels */}
    <div className="relative z-10 h-full w-full flex flex-col md:block">
      {panels.map((p, i) => (
        <div
          key={p.key}
          className={`relative flex h-auto w-full items-center justify-center md:absolute md:inset-0 md:h-full md:items-end transition-all duration-700 ease-in-out ${
            active === i 
              ? "md:opacity-100 md:translate-y-0 md:z-10 md:pointer-events-auto"
              : "md:opacity-0 md:translate-y-8 md:z-0 md:pointer-events-none"
          } opacity-100 translate-y-0 z-10 pointer-events-auto`}
        >
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 pt-32 pb-24 md:grid-cols-2 md:py-16">
            {/* LEFT: active panel */}
              <div className="relative">
                <div className="relative">
                  {p.badgeLeft?.trim() || p.badgeRight?.trim() ? (
                    <div className="mb-6 inline-flex items-center rounded-2xl border border-[#BB992C]/40 bg-white/40 px-5 py-4 shadow-sm backdrop-blur-sm dark:border-white/8 dark:bg-white/2">
                      {p.badgeLeft?.trim() ? (
                        <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white">
                          {p.badgeLeft}
                        </span>
                      ) : null}
                      {p.badgeLeft?.trim() && p.badgeRight?.trim() ? (
                        <span className="mx-3 h-4 w-px bg-zinc-200 dark:bg-white/10" />
                      ) : null}
                      {p.badgeRight?.trim() ? (
                        <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
                          {p.badgeRight}
                        </span>
                      ) : null}
                    </div>
                  ) : null}

                  <p className="inline-flex items-center gap-2 rounded-full border border-[#BB992C]/40 bg-white/40 px-4 py-2 text-xs font-semibold text-zinc-700 shadow-sm backdrop-blur-md dark:border-[#BB992C]/35 dark:bg-white/5 dark:text-zinc-200">
                    {p.strapline}
                  </p>

                  <div className="mt-5 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
                    <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                      {p.title}
                    </h1>
                    <KbfLogoSvg
                      aria-label={p.logoAlt}
                      className="block h-auto w-[140px] sm:w-[160px] md:w-[180px]"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>

                  <div className="mt-5 max-w-xl space-y-4 text-base leading-7 text-zinc-600 dark:text-zinc-300 sm:text-lg">
                    {p.body.map((t) => (
                      <p key={t}>{t}</p>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    {p.ctas.map((c) => (
                      <a
                        key={c.href + c.label}
                        href={c.href}
                        className={
                          c.primary
                            ? "inline-flex h-11 items-center justify-center rounded-full bg-[#BB992C] px-6 text-sm font-semibold text-black shadow-sm transition hover:bg-[#A88522] dark:text-black"
                            : "inline-flex h-11 items-center justify-center rounded-full border border-[#BB992C] bg-white px-6 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-[#BB992C]/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                        }
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>

                  {i === 0 ? (
                    <div className="mt-8 text-xs font-semibold text-zinc-600 dark:text-zinc-300">
                      Scroll to continue <span aria-hidden="true">↓</span>
                    </div>
                  ) : null}
                </div>
              </div>

              {/* RIGHT: active panel card */}
              <div className="relative">
                <div className="rounded-3xl border border-white/5 bg-white/5 p-8 shadow-sm backdrop-blur dark:border-white/40 dark:bg-white/40">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-zinc-900/10 dark:bg-white/10" />
                    <div>
                      <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                        {p.expectTitle}
                      </p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        {p.expectSubtitle}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-8 space-y-4">
                    {p.expectItems.map((it) => (
                      <li key={it.title} className="flex gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#BB992C] text-black">
                          ✓
                        </span>
                        <div>
                          <p className="text-sm font-semibold">{it.title}</p>
                          <p className="text-sm text-zinc-600 dark:text-zinc-300">
                            {it.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 rounded-2xl bg-white/45 p-5 text-sm text-zinc-700 backdrop-blur-md dark:bg-black/40 dark:text-zinc-200">
                    <p className="font-semibold text-zinc-900 dark:text-white">
                      {p.quickTitle}
                    </p>
                    <p className="mt-1">{p.quickBody}</p>
                    <a
                      href="#contact"
                      className="mt-4 inline-flex items-center gap-2 font-semibold text-[#BB992C] hover:underline"
                    >
                      {p.quickLink} <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Services */}
        <section id="services" className="scroll-mt-24 relative bg-zinc-50 dark:bg-black py-16 sm:py-24">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="flex flex-col gap-16 md:flex-row md:items-start">
              {/* Sticky Left Content */}
              <div className="md:sticky md:top-32 md:w-1/2 self-start">
                <FadeIn>
                  <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
                    Services
                 </h2>
                  <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                    Clear, practical advice across wealth management, retirement planning and protection — built around your goals and reviewed as life changes.
                  </p>
                  <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-300">
                    Whether you’re building wealth, protecting what you’ve worked for, planning for retirement, or aligning personal and business finances, we’ll help you make confident decisions with a tailored plan and long‑term support.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="#contact"
                      className="inline-flex h-11 items-center justify-center rounded-full bg-[#BB992C] px-6 text-sm font-semibold text-black shadow-sm transition hover:bg-[#A88522]"
                    >
                      Request a proposal
                    </a>
                    <a
                      href="#approach"
                      className="inline-flex h-11 items-center justify-center rounded-full border border-[#BB992C] bg-white px-6 text-sm font-semibold text-zinc-900 shadow-sm transition hover:bg-[#BB992C]/10 dark:bg-white/5 dark:text-white dark:hover:bg:white/10"
                    >
                      How we work
                    </a>
                  </div>

                  <dl className="mt-10 grid grid-cols-3 gap-4">
                    <div className="rounded-2xl border border-zinc-200 bg-white/50 p-4 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5">
                      <dt className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Focus</dt>
                      <dd className="mt-1 text-sm font-semibold text-zinc-900 dark:text-white">Your goals</dd>
                    </div>
                    <div className="rounded-2xl border border-zinc-200 bg-white/50 p-4 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5">
                      <dt className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Approach</dt>
                      <dd className="mt-1 text-sm font-semibold text-zinc-900 dark:text-white">Clear & calm</dd>
                    </div>
                    <div className="rounded-2xl border border-zinc-200 bg-white/50 p-4 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5">
                      <dt className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Support</dt>
                      <dd className="mt-1 text-sm font-semibold text-zinc-900 dark:text-white">Long‑term</dd>
                    </div>
                  </dl>
                </FadeIn>
              </div>

              {/* Scrollable Right Cards */}
              <div className="flex flex-col gap-8 md:w-1/2 md:pt-20">
                <FadeIn delay={100}>
                  <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5">
                    <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">Bespoke wealth management</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      A structured plan for investing and growing wealth — aligned to your time horizon, risk comfort and priorities.
                    </p>
                    <ul className="mt-6 space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
                      <li className="flex gap-2"><span className="text-[#BB992C]">✓</span> Goal-based planning and portfolio guidance</li>
                      <li className="flex gap-2"><span className="text-[#BB992C]">✓</span> Ongoing reviews and adjustments</li>
                      <li className="flex gap-2"><span className="text-[#BB992C]">✓</span> Tax-aware planning alongside your wider finances</li>
                    </ul>
                  </div>
                </FadeIn>

                <FadeIn delay={200}>
                  <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5">
                    <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">Retirement planning</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      Build confidence in your retirement timeline, income plan and options — with clear next steps.
                    </p>
                    <ul className="mt-6 space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
                      <li className="flex gap-2"><span className="text-[#BB992C]">✓</span> Pension and retirement income planning</li>
                      <li className="flex gap-2"><span className="text-[#BB992C]">✓</span> Scenario modelling and cashflow planning</li>
                      <li className="flex gap-2"><span className="text-[#BB992C]">✓</span> Consolidation and contribution strategy</li>
                    </ul>
                  </div>
                </FadeIn>

                <FadeIn delay={300}>
                  <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5">
                    <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">Protection</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      Put the right cover in place to protect your family, lifestyle and business — without overcomplicating it.
                    </p>
                    <ul className="mt-6 space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
                      <li className="flex gap-2"><span className="text-[#BB992C]">✓</span> Life cover and critical illness protection</li>
                      <li className="flex gap-2"><span className="text-[#BB992C]">✓</span> Income protection and family security</li>
                      <li className="flex gap-2"><span className="text-[#BB992C]">✓</span> Business protection and key person cover</li>
                    </ul>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section id="approach" className="scroll-mt-24 relative border-y border-zinc-200/70 bg-white/70 dark:border-white/10 dark:bg-white/5 py-24">
          <div className="mx-auto w-full max-w-6xl px-6">
             <div className="flex flex-col gap-16 md:flex-row md:items-start">
              <div className="md:sticky md:top-32 md:w-1/2 self-start">
                <FadeIn>
                  <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">A simple, effective approach</h2>
                  <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                    We keep things clear and actionable. Every engagement is designed to deliver value quickly — and to leave your team more confident and capable.
                  </p>
                </FadeIn>
              </div>

             <div className="flex flex-col gap-12 md:w-1/2 md:pt-20">
                <FadeIn delay={100}>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-2 h-full w-px bg-zinc-200 dark:bg-white/10"></div>
                    <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-[#BB992C]"></div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">1. Understand</h3>
                    <p className="mt-2 text-base text-zinc-600 dark:text-zinc-300">
                      A focused discovery to map objectives, constraints, and reality. We listen before we advise, ensuring we solve the right problem.
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={200}>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-2 h-full w-px bg-zinc-200 dark:bg-white/10"></div>
                    <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-[#BB992C]"></div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">2. Design</h3>
                    <p className="mt-2 text-base text-zinc-600 dark:text-zinc-300">
                      A practical plan with owners, timelines, and clear measures. We build solutions that fit your business, not generic templates.
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={300}>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 h-full w-px bg-zinc-200 dark:bg-white/10"></div>
                    <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-[#BB992C]"></div>
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">3. Deliver</h3>
                    <p className="mt-2 text-base text-zinc-600 dark:text-zinc-300">
                      Hands-on support to land improvements and embed ways of working. We stay until the job is done and the results are visible.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 mx-auto w-full max-w-6xl px-6 py-16">
          <FadeIn>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-3xl">About KBF Associates Ltd</h2>
                <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
                  We work with financial services leaders who want clarity, traction and lasting improvements. If you’re navigating regulatory change, launching a programme or strengthening controls — we can help.
                </p>
                <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
                  Our style is calm, structured, and transparent: no jargon, no fluff — just progress that stands up to scrutiny.
                </p>
              </div>

              <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
                <h3 className="text-base font-semibold">Ideal for</h3>
                <ul className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-200">
                  <li>• Teams delivering regulatory or risk change</li>
                  <li>• Organisations strengthening controls and MI</li>
                  <li>• Leaders preparing stakeholders and regulators for change</li>
                </ul>
                <div className="mt-8 rounded-2xl bg-zinc-50 p-5 dark:bg-black/40">
                  <p className="text-sm font-semibold text-zinc-900 dark:text-white">Prefer to start small?</p>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                    Ask for a short discovery session — we&apos;ll recommend next steps, likely risks, and whether we&apos;re a good fit.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 mx-auto w-full max-w-6xl px-6 pb-20">
          <FadeIn>
            <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5 md:p-10">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-3xl">Let&apos;s talk</h2>
                  <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
                    Tell us what you’re trying to achieve. We’ll respond with a short plan, likely risks to watch and the next best steps — with an honest view on what it will take.
                  </p>

                  <dl className="mt-8 space-y-4 text-sm">
                    <div>
                      <dt className="font-semibold text-zinc-900 dark:text-white">Email</dt>
                      <dd className="text-zinc-600 dark:text-zinc-300">hello@kbfassociatesltd.co.uk</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-zinc-900 dark:text-white">Based in</dt>
                      <dd className="text-zinc-600 dark:text-zinc-300">United Kingdom</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-zinc-900 dark:text-white">Response time</dt>
                      <dd className="text-zinc-600 dark:text-zinc-300">Typically within 1–2 working days (UK time)</dd>
                    </div>
                  </dl>
                </div>

                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-semibold">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      className="mt-2 h-11 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-sm outline-none ring-0 transition focus:border-zinc-400 dark:border-white/10 dark:bg-black/30 dark:focus:border-white/30"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-semibold">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="mt-2 h-11 w-full rounded-2xl border border-zinc-200 bg-white px-4 text-sm outline-none ring-0 transition focus:border-zinc-400 dark:border-white/10 dark:bg-black/30 dark:focus:border-white/30"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-semibold">
                      What do you need help with?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="mt-2 w-full resize-none rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none ring-0 transition focus:border-zinc-400 dark:border-white/10 dark:bg-black/30 dark:focus:border-white/30"
                      placeholder="A few lines is perfect — goals, timelines, constraints."
                    />
                  </div>

                  <button
                    type="button"
                    className="inline-flex h-11 w-full items-center justify-center rounded-full bg-[#BB992C] px-6 text-sm font-semibold text-black shadow-sm transition hover:bg-[#A88522]"
                  >
                    Send enquiry
                  </button>

                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    This form is currently a design placeholder. Wire it up to email (e.g. Resend) or a CRM when you&apos;re ready.
                  </p>
                </form>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>


      {/* Footer */}
      <Footer />
    </div>
  );
}
