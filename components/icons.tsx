import { cn } from '@/lib/utils/cn'

type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
	add: (props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className={cn('h-5 w-5', props.className)}
				{...props}
			>
				<path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
			</svg>
		)
	},
	cancel: (props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className={cn('h-5 w-5', props.className)}
				{...props}
			>
				<path d="m8.4 17 3.6-3.6 3.6 3.6 1.4-1.4-3.6-3.6L17 8.4 15.6 7 12 10.6 8.4 7 7 8.4l3.6 3.6L7 15.6Zm3.6 5q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z" />
			</svg>
		)
	},
	cart: (props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className={cn('h-5 w-5', props.className)}
				{...props}
			>
				<path d="M15.55 13C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C21.25 4.82 20.77 4 20.01 4H5.21L4.27 2H1V4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H19V15H7L8.1 13H15.55ZM6.16 6H18.31L15.55 11H8.53L6.16 6ZM7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" />
			</svg>
		)
	},
	cartFilled: (props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className={cn('h-5 w-5', props.className)}
				{...props}
			>
				<path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" />
			</svg>
		)
	},
	check: (props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className={cn('h-5 w-5', props.className)}
				{...props}
			>
				<path d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 6.99997L19.5902 5.58997L9.00016 16.17Z" />
			</svg>
		)
	},
	chevronDown: (props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className={cn('h-5 w-5', props.className)}
				{...props}
			>
				<path d="m12 15.375-6-6 1.4-1.4 4.6 4.6 4.6-4.6 1.4 1.4Z" />
			</svg>
		)
	},
	chevronLeft: (props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className={cn('h-5 w-5', props.className)}
				{...props}
			>
				<path d="m14 18-6-6 6-6 1.4 1.4-4.6 4.6 4.6 4.6Z" />
			</svg>
		)
	},
	chevronRight: (props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className={cn('h-5 w-5', props.className)}
				{...props}
			>
				<path d="M9.4 18 8 16.6l4.6-4.6L8 7.4 9.4 6l6 6Z" />
			</svg>
		)
	},
	chevronUp: (props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className={cn('h-5 w-5', props.className)}
				{...props}
			>
				<path d="m7.4 15.375-1.4-1.4 6-6 6 6-1.4 1.4-4.6-4.6Z" />
			</svg>
		)
	},
	circle: (props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className={cn('h-5 w-5', props.className)}
				{...props}
			>
				<circle cx="12" cy="12" r="12" />
			</svg>
		)
	},
	close: (props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className={cn('h-5 w-5', props.className)}
				{...props}
			>
				<path d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z" />
			</svg>
		)
	},
	delete: (props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className={cn('h-5 w-5', props.className)}
				{...props}
			>
				<path d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413Q17.825 21 17 21ZM17 6H7v13h10ZM9 17h2V8H9Zm4 0h2V8h-2ZM7 6v13Z" />
			</svg>
		)
	},
	drag: (props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className={cn('h-5 w-5', props.className)}
				{...props}
			>
				<path d="M4 15v-2h16v2Zm0-4V9h16v2Z" />
			</svg>
		)
	},
	favorite: (props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className={cn('h-5 w-5', props.className)}
				{...props}
			>
				<path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" />
			</svg>
		)
	},
	favoriteOutlined: (props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className={cn('h-5 w-5', props.className)}
				{...props}
			>
				<path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z" />
			</svg>
		)
	},
	hide: (props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className={cn('h-5 w-5', props.className)}
				{...props}
			>
				<path d="m16.1 13.3-1.45-1.45q.225-1.175-.675-2.2-.9-1.025-2.325-.8L10.2 7.4q.425-.2.862-.3Q11.5 7 12 7q1.875 0 3.188 1.312Q16.5 9.625 16.5 11.5q0 .5-.1.938-.1.437-.3.862Zm3.2 3.15-1.45-1.4q.95-.725 1.688-1.588.737-.862 1.262-1.962-1.25-2.525-3.588-4.013Q14.875 6 12 6q-.725 0-1.425.1-.7.1-1.375.3L7.65 4.85q1.025-.425 2.1-.638Q10.825 4 12 4q3.775 0 6.725 2.087Q21.675 8.175 23 11.5q-.575 1.475-1.512 2.738Q20.55 15.5 19.3 16.45Zm.5 6.15-4.2-4.15q-.875.275-1.762.413Q12.95 19 12 19q-3.775 0-6.725-2.087Q2.325 14.825 1 11.5q.525-1.325 1.325-2.463Q3.125 7.9 4.15 7L1.4 4.2l1.4-1.4 18.4 18.4ZM5.55 8.4q-.725.65-1.325 1.425T3.2 11.5q1.25 2.525 3.587 4.012Q9.125 17 12 17q.5 0 .975-.062.475-.063.975-.138l-.9-.95q-.275.075-.525.112Q12.275 16 12 16q-1.875 0-3.188-1.312Q7.5 13.375 7.5 11.5q0-.275.037-.525.038-.25.113-.525Zm7.975 2.325ZM9.75 12.6Z" />
			</svg>
		)
	},
	home: (props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className={cn('h-5 w-5', props.className)}
				{...props}
			>
				<path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69ZM12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z" />
			</svg>
		)
	},
	menu: (props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className={cn('h-5 w-5', props.className)}
				{...props}
			>
				<path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" />
			</svg>
		)
	},
	moon: (props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className={cn('h-5 w-5', props.className)}
				{...props}
			>
				<path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z" />
			</svg>
		)
	},
	more: (props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className={cn('h-5 w-5', props.className)}
				{...props}
			>
				<path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" />
			</svg>
		)
	},
	person: (props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className={cn('h-5 w-5', props.className)}
				{...props}
			>
				<path d="M12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6ZM12 16C14.7 16 17.8 17.29 18 18H6C6.23 17.28 9.31 16 12 16ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" />
			</svg>
		)
	},
	search: (props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className={cn('h-5 w-5', props.className)}
				{...props}
			>
				<path d="m19.6 21-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5 7.625 5 6.312 6.312 5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z" />
			</svg>
		)
	},
	show: (props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className={cn('h-5 w-5', props.className)}
				{...props}
			>
				<path d="M12 16q1.875 0 3.188-1.312Q16.5 13.375 16.5 11.5q0-1.875-1.312-3.188Q13.875 7 12 7q-1.875 0-3.188 1.312Q7.5 9.625 7.5 11.5q0 1.875 1.312 3.188Q10.125 16 12 16Zm0-1.8q-1.125 0-1.912-.788Q9.3 12.625 9.3 11.5t.788-1.913Q10.875 8.8 12 8.8t1.913.787q.787.788.787 1.913t-.787 1.912q-.788.788-1.913.788Zm0 4.8q-3.65 0-6.65-2.038-3-2.037-4.35-5.462 1.35-3.425 4.35-5.463Q8.35 4 12 4q3.65 0 6.65 2.037 3 2.038 4.35 5.463-1.35 3.425-4.35 5.462Q15.65 19 12 19Zm0-7.5Zm0 5.5q2.825 0 5.188-1.488Q19.55 14.025 20.8 11.5q-1.25-2.525-3.612-4.013Q14.825 6 12 6 9.175 6 6.812 7.487 4.45 8.975 3.2 11.5q1.25 2.525 3.612 4.012Q9.175 17 12 17Z" />
			</svg>
		)
	},
	star: (props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className={cn('h-5 w-5', props.className)}
				{...props}
			>
				<path d="M22 9.24L14.81 8.62L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.55 13.97L22 9.24ZM12 15.4L8.24 17.67L9.24 13.39L5.92 10.51L10.3 10.13L12 6.1L13.71 10.14L18.09 10.52L14.77 13.4L15.77 17.68L12 15.4Z" />
			</svg>
		)
	},
	sun: (props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				className={cn('h-5 w-5', props.className)}
				{...props}
			>
				<path d="M6.76 4.84005L4.96 3.05005L3.55 4.46005L5.34 6.25005L6.76 4.84005ZM1 10.5H4V12.5H1V10.5ZM11 0.550049H13V3.50005H11V0.550049ZM19.04 3.04505L20.448 4.45205L18.658 6.24205L17.251 4.83405L19.04 3.04505ZM17.24 18.16L19.03 19.96L20.44 18.55L18.64 16.76L17.24 18.16ZM20 10.5H23V12.5H20V10.5ZM12 5.50005C8.69 5.50005 6 8.19005 6 11.5C6 14.81 8.69 17.5 12 17.5C15.31 17.5 18 14.81 18 11.5C18 8.19005 15.31 5.50005 12 5.50005ZM12 15.5C9.79 15.5 8 13.71 8 11.5C8 9.29005 9.79 7.50005 12 7.50005C14.21 7.50005 16 9.29005 16 11.5C16 13.71 14.21 15.5 12 15.5ZM11 19.5H13V22.4501H11V19.5ZM3.55 18.5401L4.96 19.9501L6.75 18.15L5.34 16.74L3.55 18.5401Z" />
			</svg>
		)
	}
}
