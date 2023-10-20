import { Stack, Logo, Menu } from '.';

type Props = {
	url: string;
};

export function Header({ url }: Props) {
	return (
		<Stack
			as="header"
			gap="l"
			justifyContent="space-between"
			direction={{ mobile: 'column', tablet: 'row' }}
		>
			<Logo />
			<Menu current={url} />
		</Stack>
	);
}
