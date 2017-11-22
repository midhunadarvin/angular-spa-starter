export interface MenuItem {
	title: string,
	icon: string,
	show?: boolean,
	disabled?: boolean,
	path?: string,
	children?: Array<MenuItem>
}