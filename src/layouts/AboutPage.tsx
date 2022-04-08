import React from 'react';
import { Stack, Heading } from 'tamia';
import { Link } from 'tamia-gatsby-link';
import Metatags from '../components/Metatags';
import Page from './Page';

type Props = {
	url: string;
};

export default function AboutPage({ url }: Props) {
	return (
		<Page url={url}>
			<Metatags slug={url} title="About" />
			<Stack as="main" gap="l">
				<Heading level={1}>
					About Tacohuaco <span aria-hidden="true">🌮</span>
				</Heading>
				<Stack gap="m">
					<p>
						We’ve started Tacohuaco as a better way of keeping notes about
						foodses we cook, and it evolves together with our cooking needs,
						with features like scaling and using one recipe as a part of another
						recipe.
					</p>
					<p>
						We try to create something like a cooking system, where we use the
						same ingredients, techniques or even whole recipes for many dishes,
						to minimize time to cook and waste, and to simplify shopping for the
						ingredients. We also want to cook more using local and seasonal
						ingredients.
					</p>
					<p>
						Some recipes are{' '}
						<Link href="/tags/foundation/">foundation recipes</Link> and used
						throughout the site, some we cook only for{' '}
						<Link href="/tags/celebration/">special occasions</Link>.
					</p>
					<p>
						Many recipes here are inspired by our cuisines — Mexican and
						Russian, cookbooks, travels, or just a random photo we’ve seen
						somewhere. We like to combine, adjust, and never cook the recipes
						precisely, even our own. And we recommend you do the same!
					</p>
					<p>
						Don’t be afraid to exchange ingredients for what you have at home or
						what’s available on the market. You could surprise yourself with
						amazing unexpected results!
					</p>
					<p>
						We often cook without a recipe at all — axe tacos (or{' '}
						<Link href="https://en.wikipedia.org/wiki/Stone_Soup">
							stone tacos
						</Link>
						) is one of our favorite recipes and you’ll never find it on the
						site because it’s different every day — we just cook everything
						that’s left in the fridge. This is the best way to avoid food waste
						and get a delicious meal quickly.
					</p>
					<p>
						<em>
							<span aria-hidden="true">🦀</span> Margarita (Dr. Taco) and Artem.{' '}
							May the klatz (and food) be with you!{' '}
							<span aria-hidden="true">🦀</span>
						</em>
					</p>
				</Stack>
			</Stack>
		</Page>
	);
}
