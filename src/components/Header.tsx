import { Stack } from './Stack';
import { Logo } from './Logo';
import { Menu } from './Menu';

type Props = {
	url: string;
};

export function Header({ url }: Props) {
	return (
		<Stack
			as="header"
			gap="l"
			justifyContent="space-between"
			direction={{ base: 'column', tablet: 'row' }}
		>
			<Logo />
			<Menu current={url} />
		</Stack>
	);
}
