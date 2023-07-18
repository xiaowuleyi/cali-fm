'use client'

import { clsxm } from '@zolplay/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'

type DirectoryInfo = {
  icon: React.ComponentType<{ className?: string }>
  label: string
}
const directoryMapper: { [key: string]: DirectoryInfo } = {
  '(?:spotify.com|open.spotify.com)': {
    icon: SpotifyIcon,
    label: 'Spotify',
  },
  '(?:apple.co|podcasts.apple.com)': {
    icon: ApplePodcastIcon,
    label: 'Apple Podcasts',
  },
  '(?:google.com|podcasts.google.com)': {
    icon: GooglePodcastIcon,
    label: 'Google Podcasts',
  },
  '(?:overcast.fm)': {
    icon: OvercastIcon,
    label: 'Overcast',
  },
  '(?:stitcher.com)': {
    icon: StitcherIcon,
    label: 'Stitcher',
  },
  '(?:pocketcasts.com)': {
    icon: PocketCastsIcon,
    label: 'Pocket Casts',
  },
  '(?:xiaoyuzhoufm.com)': {
    icon: XiaoYuZhouFMIcon,
    label: '小宇宙',
  },
  '(?:youtube.com|youtu.be)': {
    icon: YouTubeIcon,
    label: 'YouTube',
  },
  '(?:bilibili.com|b23.tv)': {
    icon: BiliBiliIcon,
    label: '哔哩哔哩',
  },
}

export function PodcastDirectoryLink({
  children,
  className,
}: {
  children: string
  className?: string
}) {
  const directory = useMemo(() => {
    const directory = Object.entries(directoryMapper).find(([key]) =>
      children.match(key)
    )
    return directory ? directory[1] : null
  }, [children])

  return (
    <Link
      href={children}
      className={clsxm(
        'group flex transform-gpu items-center transition-transform hover:scale-105',
        className
      )}
      aria-label={directory?.label}
      title={directory?.label}
      target="_blank"
    >
      {directory?.icon && <directory.icon aria-hidden className="h-7 w-7" />}
    </Link>
  )
}

function ApplePodcastIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 300 300"
      enableBackground="new 0 0 300 300"
      {...props}
    >
      <g id="XMLID_632_">
        <linearGradient
          id="XMLID_2_"
          gradientUnits="userSpaceOnUse"
          x1="150"
          y1="0"
          x2="150"
          y2="300"
        >
          <stop offset="0" style={{ stopColor: '#F452FF' }} />
          <stop offset="1" style={{ stopColor: '#832BC1' }} />
        </linearGradient>
        <path
          id="XMLID_662_"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="url(#XMLID_2_)"
          d="M294.1,260c-2.9,7.4-9.6,17.8-19.2,25.2   c-5.5,4.2-12.1,8.3-21.1,11c-9.6,2.9-21.5,3.8-36.3,3.8h-135c-14.8,0-26.6-1-36.3-3.8c-9-2.7-15.6-6.7-21.1-11   c-9.5-7.3-16.3-17.8-19.2-25.2C0.1,245.1,0,228.2,0,217.5l0,0v-135l0,0C0,71.8,0.1,54.9,5.9,40c2.9-7.4,9.6-17.8,19.2-25.2   c5.5-4.2,12.1-8.3,21.1-11C55.9,1,67.7,0,82.5,0l0,0h135l0,0c14.8,0,26.6,1,36.3,3.8c9,2.7,15.6,6.7,21.1,11   c9.5,7.3,16.3,17.8,19.2,25.2c5.9,14.9,5.9,31.9,5.9,42.5v135C300,228.2,299.9,245.1,294.1,260z"
        />
        <g>
          <path
            id="XMLID_657_"
            fill="#FFFFFF"
            d="M175.7,181.1c-0.4-3.6-1.6-6.2-4-8.6c-4.5-4.7-12.4-7.8-21.7-7.8c-9.3,0-17.2,3-21.7,7.8    c-2.3,2.5-3.6,5-4,8.6c-0.8,7-0.3,13,0.5,22.7c0.8,9.2,2.3,21.5,4.2,33.9c1.4,8.9,2.5,13.7,3.5,17.1c1.7,5.6,7.8,10.4,17.5,10.4    c9.7,0,15.9-4.9,17.5-10.4c1-3.4,2.1-8.2,3.5-17.1c1.9-12.5,3.4-24.7,4.2-33.9C176.1,194.1,176.5,188.1,175.7,181.1z"
          />
          <path
            id="XMLID_655_"
            fill="#FFFFFF"
            d="M174.6,130.1c0,13.6-11,24.6-24.6,24.6s-24.6-11-24.6-24.6c0-13.6,11-24.6,24.6-24.6    S174.6,116.6,174.6,130.1z"
          />
          <path
            id="XMLID_653_"
            fill="#FFFFFF"
            d="M149.7,33.2C92.3,33.4,45.3,80,44.5,137.4c-0.6,46.5,29.1,86.3,70.6,100.9    c1,0.4,2-0.5,1.9-1.5c-0.5-3.6-1.1-7.2-1.5-10.8c-0.2-1.3-1-2.3-2.1-2.9c-32.8-14.3-55.7-47.2-55.3-85.3    c0.5-50,41.3-90.7,91.2-91.1c51.1-0.4,92.8,41,92.8,92c0,37.7-22.8,70.1-55.3,84.4c-1.2,0.5-2,1.6-2.1,2.9    c-0.5,3.6-1,7.2-1.5,10.8c-0.2,1.1,0.9,1.9,1.9,1.5c41.1-14.4,70.6-53.6,70.6-99.6C255.5,80.5,208,33.1,149.7,33.2z"
          />
          <path
            id="XMLID_651_"
            fill="#FFFFFF"
            d="M147.3,68.2c-37.4,1.4-67.4,32.3-67.9,69.7c-0.3,24.6,12,46.4,30.9,59.3    c0.9,0.6,2.2-0.1,2.2-1.2c-0.3-4.3-0.3-8.1-0.1-12.1c0.1-1.3-0.4-2.5-1.4-3.4c-11.5-10.8-18.5-26.2-18.1-43.2    c0.8-30,24.9-54.4,54.9-55.6c32.6-1.3,59.4,24.9,59.4,57.1c0,16.4-7,31.2-18.1,41.7c-0.9,0.9-1.4,2.1-1.4,3.4    c0.2,3.9,0.1,7.7-0.1,12c-0.1,1.1,1.2,1.9,2.2,1.2c18.6-12.7,30.9-34.2,30.9-58.4C220.8,98.9,187.5,66.6,147.3,68.2z"
          />
        </g>
      </g>
    </svg>
  )
}

function SpotifyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      width="1em"
      viewBox="0 0 168 168"
      {...props}
    >
      <path
        fill="#1ED760"
        d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
      />
    </svg>
  )
}

function GooglePodcastIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      version="1.1"
      viewBox="0 0 400 400"
      {...props}
    >
      <g strokeLinecap="round" strokeWidth="2.5em">
        <path d="m24.26 186.32v27.351" stroke="#0066d9" />
        <path d="m375.74 186.32v27.351" stroke="#4285f4" />
        <path d="m112.13 104.27v89.46m0 74.645v27.351" stroke="#ea4335" />
        <path d="m287.87 206.26v89.46m0-191.46v27.351" stroke="#34a853" />
        <path
          d="m200 127.06v145.87m0-248.68v27.351m0 296.78v27.351"
          stroke="#fab908"
        />
      </g>
    </svg>
  )
}

function OvercastIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 365 365"
      {...props}
    >
      <g>
        <path
          fill="rgb(96.099854%,49.398804%,12.5%)"
          stroke="none"
          fillRule="nonzero"
          d="M 90.179688 274.820313 C 66.550781 251.195313 51.9375 218.554688 51.9375 182.5 C 51.9375 146.445313 66.550781 113.804688 90.179688 90.179688 L 101.789063 101.789063 C 81.136719 122.445313 68.359375 150.980469 68.359375 182.5 C 68.359375 214.019531 81.136719 242.554688 101.789063 263.210938 Z M 125.890625 239.109375 C 111.402344 224.621094 102.441406 204.609375 102.441406 182.5 C 102.441406 160.390625 111.402344 140.378906 125.890625 125.890625 L 137.503906 137.503906 C 125.988281 149.019531 118.863281 164.925781 118.863281 182.5 C 118.863281 200.074219 125.988281 215.980469 137.503906 227.496094 Z M 227.496094 227.496094 C 239.011719 215.980469 246.136719 200.074219 246.136719 182.5 C 246.136719 164.925781 239.011719 149.019531 227.496094 137.503906 L 239.109375 125.890625 C 253.597656 140.378906 262.558594 160.390625 262.558594 182.5 C 262.558594 204.609375 253.597656 224.621094 239.109375 239.109375 Z M 274.820313 274.820313 L 263.210938 263.210938 C 283.863281 242.554688 296.640625 214.019531 296.640625 182.5 C 296.640625 150.980469 283.863281 122.445313 263.210938 101.789063 L 274.820313 90.179688 C 298.449219 113.804688 313.0625 146.445313 313.0625 182.5 C 313.0625 218.554688 298.449219 251.195313 274.820313 274.820313 Z M 182.5 16.640625 C 90.898438 16.640625 16.640625 90.898438 16.640625 182.5 C 16.640625 255.765625 64.148438 317.933594 130.039063 339.886719 L 172.632813 212.101563 C 160.238281 207.972656 151.296875 196.28125 151.296875 182.5 C 151.296875 165.265625 165.265625 151.296875 182.5 151.296875 C 199.734375 151.296875 213.703125 165.265625 213.703125 182.5 C 213.703125 196.28125 204.761719 207.972656 192.367188 212.101563 L 234.960938 339.886719 C 300.851563 317.933594 348.359375 255.765625 348.359375 182.5 C 348.359375 90.898438 274.101563 16.640625 182.5 16.640625 Z M 202.902344 347.109375 C 195.519531 341.375 188.371094 335.058594 181.539063 328.164063 C 174.933594 334.996094 168.046875 341.269531 160.945313 346.96875 C 168 347.882813 175.195313 348.359375 182.5 348.359375 C 189.40625 348.359375 196.214844 347.933594 202.902344 347.109375 Z M 191.792969 316.824219 C 200.890625 327.066406 210.65625 336.113281 220.847656 343.898438 C 221.527344 343.734375 222.203125 343.570313 222.878906 343.402344 L 205.261719 299.355469 C 200.972656 305.472656 196.472656 311.300781 191.792969 316.824219 Z M 182.257813 305.34375 C 187.945313 298.007813 193.300781 290.164063 198.257813 281.84375 L 182.5 242.453125 L 166.550781 282.324219 C 171.425781 290.464844 176.679688 298.148438 182.257813 305.34375 Z M 143.78125 343.804688 C 153.617188 336.28125 163.054688 327.59375 171.875 317.78125 C 167.367188 312.621094 163.03125 307.179688 158.894531 301.46875 L 142.121094 343.402344 C 142.671875 343.539063 143.226563 343.671875 143.78125 343.804688 Z M 182.5 364.796875 C 81.820313 364.796875 0.207031 283.179688 0.207031 182.5 C 0.207031 81.820313 81.820313 0.203125 182.5 0.203125 C 283.179688 0.203125 364.796875 81.820313 364.796875 182.5 C 364.796875 283.179688 283.179688 364.796875 182.5 364.796875 "
        />
        <path
          fill="rgb(100%,100%,100%)"
          stroke="none"
          fillRule="nonzero"
          d="M 90.179688 274.820313 L 90.324219 274.675781 C 66.734375 251.085938 52.140625 218.496094 52.140625 182.5 C 52.140625 146.503906 66.730469 113.914063 90.324219 90.324219 L 90.179688 90.179688 L 90.03125 90.324219 L 101.644531 101.9375 L 101.789063 101.789063 L 101.644531 101.644531 C 80.953125 122.339844 68.15625 150.925781 68.15625 182.5 C 68.15625 214.074219 80.953125 242.660156 101.644531 263.355469 L 101.789063 263.210938 L 101.644531 263.0625 L 90.03125 274.675781 L 90.179688 274.820313 L 90.324219 274.675781 L 90.179688 274.820313 L 90.324219 274.96875 L 102.082031 263.210938 L 101.9375 263.0625 C 81.316406 242.445313 68.566406 213.964844 68.566406 182.5 C 68.566406 151.035156 81.316406 122.554688 101.9375 101.9375 L 102.082031 101.789063 L 90.179688 89.886719 L 90.03125 90.03125 C 66.367188 113.695313 51.730469 146.390625 51.730469 182.5 C 51.730469 218.609375 66.367188 251.304688 90.03125 274.96875 L 90.179688 275.113281 L 90.324219 274.96875 Z M 125.890625 239.109375 L 126.035156 238.964844 C 111.582031 224.515625 102.644531 204.550781 102.644531 182.5 C 102.644531 160.449219 111.582031 140.484375 126.035156 126.035156 L 125.890625 125.890625 L 125.742188 126.035156 L 137.355469 137.648438 L 137.503906 137.503906 L 137.355469 137.355469 C 125.804688 148.910156 118.660156 164.871094 118.660156 182.5 C 118.660156 200.128906 125.804688 216.089844 137.355469 227.644531 L 137.503906 227.496094 L 137.355469 227.351563 L 125.742188 238.964844 L 125.890625 239.109375 L 126.035156 238.964844 L 125.890625 239.109375 L 126.035156 239.257813 L 137.792969 227.496094 L 137.648438 227.351563 C 126.167969 215.871094 119.070313 200.015625 119.070313 182.5 C 119.070313 164.984375 126.167969 149.128906 137.648438 137.648438 L 137.792969 137.503906 L 125.890625 125.597656 L 125.742188 125.742188 C 111.21875 140.269531 102.234375 160.335938 102.234375 182.5 C 102.234375 204.664063 111.21875 224.730469 125.742188 239.257813 L 125.890625 239.402344 L 126.035156 239.257813 Z M 227.496094 227.496094 L 227.644531 227.644531 C 239.195313 216.089844 246.339844 200.128906 246.339844 182.5 C 246.339844 164.871094 239.195313 148.910156 227.644531 137.355469 L 227.496094 137.503906 L 227.644531 137.648438 L 239.257813 126.035156 L 239.109375 125.890625 L 238.964844 126.035156 C 253.417969 140.484375 262.355469 160.449219 262.355469 182.5 C 262.355469 204.550781 253.417969 224.515625 238.964844 238.964844 L 239.109375 239.109375 L 239.257813 238.964844 L 227.644531 227.351563 L 227.496094 227.496094 L 227.644531 227.644531 L 227.496094 227.496094 L 227.351563 227.644531 L 239.109375 239.402344 L 239.257813 239.257813 C 253.78125 224.730469 262.765625 204.664063 262.765625 182.5 C 262.765625 160.335938 253.78125 140.269531 239.257813 125.742188 L 239.109375 125.597656 L 227.207031 137.503906 L 227.351563 137.648438 C 238.832031 149.128906 245.929688 164.984375 245.929688 182.5 C 245.929688 200.015625 238.832031 215.871094 227.351563 227.351563 L 227.207031 227.496094 L 227.351563 227.644531 Z M 274.820313 274.820313 L 274.96875 274.675781 L 263.355469 263.0625 L 263.210938 263.210938 L 263.355469 263.355469 C 284.046875 242.660156 296.84375 214.074219 296.84375 182.5 C 296.84375 150.925781 284.046875 122.339844 263.355469 101.644531 L 263.210938 101.789063 L 263.355469 101.9375 L 274.96875 90.324219 L 274.820313 90.179688 L 274.675781 90.324219 C 298.265625 113.914063 312.855469 146.503906 312.855469 182.5 C 312.855469 218.496094 298.265625 251.085938 274.675781 274.675781 L 274.820313 274.820313 L 274.96875 274.675781 L 274.820313 274.820313 L 274.96875 274.96875 C 298.632813 251.304688 313.269531 218.609375 313.269531 182.5 C 313.269531 146.390625 298.632813 113.695313 274.96875 90.03125 L 274.820313 89.886719 L 262.917969 101.789063 L 263.0625 101.9375 C 283.683594 122.554688 296.433594 151.035156 296.433594 182.5 C 296.433594 213.964844 283.683594 242.445313 263.0625 263.0625 L 262.917969 263.210938 L 274.820313 275.113281 L 274.96875 274.96875 Z M 182.5 16.640625 L 182.5 16.433594 C 90.785156 16.433594 16.433594 90.785156 16.433594 182.5 C 16.433594 255.859375 64.003906 318.097656 129.972656 340.082031 L 130.167969 340.144531 L 172.894531 211.972656 L 172.699219 211.90625 C 160.382813 207.804688 151.503906 196.191406 151.503906 182.5 C 151.503906 173.941406 154.972656 166.191406 160.582031 160.582031 C 166.191406 154.972656 173.9375 151.503906 182.5 151.503906 C 191.058594 151.503906 198.808594 154.972656 204.417969 160.582031 C 210.027344 166.191406 213.496094 173.9375 213.496094 182.5 C 213.496094 196.191406 204.617188 207.804688 192.300781 211.90625 L 192.105469 211.972656 L 234.832031 340.144531 L 235.027344 340.082031 C 301 318.097656 348.566406 255.859375 348.566406 182.5 C 348.566406 90.785156 274.214844 16.433594 182.5 16.433594 L 182.5 16.84375 C 228.246094 16.84375 269.65625 35.386719 299.636719 65.363281 C 329.613281 95.34375 348.15625 136.753906 348.15625 182.5 C 348.15625 255.675781 300.703125 317.765625 234.898438 339.691406 L 234.960938 339.886719 L 235.15625 339.820313 L 192.5625 212.035156 L 192.367188 212.101563 L 192.433594 212.296875 C 204.910156 208.140625 213.90625 196.375 213.910156 182.5 C 213.90625 165.152344 199.847656 151.09375 182.5 151.089844 C 165.152344 151.09375 151.09375 165.152344 151.089844 182.5 C 151.09375 196.375 160.089844 208.140625 172.566406 212.296875 L 172.632813 212.101563 L 172.4375 212.035156 L 129.84375 339.820313 L 130.039063 339.886719 L 130.101563 339.691406 C 64.296875 317.765625 16.84375 255.675781 16.84375 182.5 C 16.84375 136.753906 35.386719 95.34375 65.363281 65.363281 C 95.34375 35.386719 136.753906 16.84375 182.5 16.84375 Z M 202.902344 347.109375 L 203.027344 346.949219 C 195.652344 341.21875 188.511719 334.90625 181.683594 328.019531 L 181.535156 327.867188 L 181.390625 328.019531 C 174.792969 334.847656 167.910156 341.113281 160.816406 346.808594 L 160.441406 347.109375 L 160.917969 347.171875 C 167.984375 348.089844 175.1875 348.566406 182.5 348.566406 C 189.414063 348.566406 196.230469 348.136719 202.925781 347.316406 L 203.417969 347.253906 L 203.027344 346.949219 L 202.902344 347.109375 L 202.875 346.90625 C 196.199219 347.726563 189.398438 348.15625 182.5 348.15625 C 175.203125 348.15625 168.019531 347.679688 160.972656 346.765625 L 160.945313 346.96875 L 161.074219 347.128906 C 168.179688 341.421875 175.078125 335.144531 181.6875 328.304688 L 181.539063 328.164063 L 181.394531 328.308594 C 188.230469 335.210938 195.386719 341.53125 202.773438 347.273438 L 202.902344 347.109375 L 202.875 346.90625 Z M 191.792969 316.824219 L 191.636719 316.964844 C 200.742188 327.210938 210.519531 336.269531 220.722656 344.058594 L 220.800781 344.117188 L 220.894531 344.097656 C 221.574219 343.9375 222.253906 343.769531 222.929688 343.601563 L 223.15625 343.542969 L 205.3125 298.929688 L 205.09375 299.238281 C 200.808594 305.347656 196.3125 311.171875 191.636719 316.695313 L 191.519531 316.832031 L 191.636719 316.964844 L 191.792969 316.824219 L 191.949219 316.960938 C 196.632813 311.429688 201.136719 305.59375 205.429688 299.472656 L 205.261719 299.355469 L 205.070313 299.433594 L 222.6875 343.476563 L 222.878906 343.402344 L 222.828125 343.203125 C 222.152344 343.371094 221.476563 343.535156 220.800781 343.695313 L 220.847656 343.898438 L 220.972656 343.734375 C 210.789063 335.957031 201.035156 326.917969 191.945313 316.691406 L 191.792969 316.824219 L 191.949219 316.960938 Z M 182.257813 305.34375 L 182.421875 305.46875 C 188.113281 298.128906 193.472656 290.273438 198.433594 281.945313 L 198.484375 281.859375 L 182.5 241.898438 L 166.320313 282.34375 L 166.375 282.429688 C 171.253906 290.578125 176.511719 298.269531 182.097656 305.46875 L 182.257813 305.679688 L 182.421875 305.46875 L 182.257813 305.34375 L 182.421875 305.21875 C 176.847656 298.03125 171.597656 290.351563 166.726563 282.21875 L 166.550781 282.324219 L 166.742188 282.402344 L 182.5 243.003906 L 198.066406 281.917969 L 198.257813 281.84375 L 198.078125 281.738281 C 193.128906 290.050781 187.777344 297.890625 182.097656 305.21875 L 182.257813 305.34375 L 182.421875 305.21875 Z M 143.78125 343.804688 L 143.90625 343.96875 C 153.75 336.4375 163.199219 327.738281 172.027344 317.917969 L 172.152344 317.785156 L 172.03125 317.648438 C 167.527344 312.492188 163.195313 307.054688 159.058594 301.351563 L 158.839844 301.046875 L 141.84375 343.542969 L 142.070313 343.601563 C 142.625 343.738281 143.179688 343.871094 143.734375 344.007813 L 143.828125 344.027344 L 143.90625 343.96875 L 143.78125 343.804688 L 143.828125 343.605469 C 143.273438 343.472656 142.722656 343.339844 142.171875 343.203125 L 142.121094 343.402344 L 142.3125 343.476563 L 159.085938 301.546875 L 158.894531 301.46875 L 158.726563 301.589844 C 162.871094 307.304688 167.207031 312.753906 171.722656 317.917969 L 171.875 317.78125 L 171.722656 317.644531 C 162.910156 327.445313 153.480469 336.128906 143.65625 343.644531 L 143.78125 343.804688 L 143.828125 343.605469 Z M 182.5 364.796875 L 182.5 364.589844 C 132.21875 364.589844 86.695313 344.210938 53.742188 311.257813 C 20.792969 278.304688 0.410156 232.78125 0.410156 182.5 C 0.410156 132.21875 20.792969 86.695313 53.742188 53.742188 C 86.695313 20.789063 132.21875 0.410156 182.5 0.410156 C 232.78125 0.410156 278.304688 20.789063 311.257813 53.742188 C 344.210938 86.695313 364.589844 132.21875 364.589844 182.5 C 364.589844 232.78125 344.210938 278.304688 311.257813 311.257813 C 278.304688 344.210938 232.78125 364.589844 182.5 364.589844 L 182.5 365 C 283.292969 365 365 283.292969 365 182.5 C 365 81.707031 283.292969 0 182.5 0 C 81.707031 0 0 81.707031 0 182.5 C 0 283.292969 81.707031 365 182.5 365 L 182.5 364.796875 "
        />
      </g>
    </svg>
  )
}

function StitcherIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      {...props}
    >
      <rect width="512" height="512" rx="15%" fill="#ffffff" />
      <path fill="#3590c5" d="M56 205h70v127H56z" />
      <path fill="#c53827" d="M386 198h70v117h-70z" />
      <path fill="#ec8b24" d="M304 172h70v152h-70z" />
      <path fill="#fbc618" d="M222 194h70v146h-70z" />
      <path fill="#612268" d="M139 182h70v141h-70z" />
    </svg>
  )
}

function PocketCastsIcon(props: { className?: string }) {
  return (
    <Image
      src="/pocketcasts.webp"
      alt="Pocket Casts"
      width={80}
      height={80}
      unoptimized
      className={clsxm('rounded-lg', props.className)}
    />
  )
}

function XiaoYuZhouFMIcon(props: { className?: string }) {
  return (
    <Image
      src="/xyzfm.png"
      alt="XiaoYuZhou FM"
      width={80}
      height={80}
      unoptimized
      {...props}
    />
  )
}

function YouTubeIcon(props: { className?: string }) {
  return (
    <Image
      src="/youtube.webp"
      alt="YouTube"
      width={80}
      height={80}
      unoptimized
      className={clsxm('rounded-lg', props.className)}
    />
  )
}

function BiliBiliIcon(props: { className?: string }) {
  return (
    <Image
      src="/bilibili.webp"
      alt="BiliBili"
      width={80}
      height={80}
      unoptimized
      className={clsxm('rounded-lg', props.className)}
    />
  )
}