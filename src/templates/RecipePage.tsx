import { type ReactNode } from 'react';
import {
	Stack,
	Heading,
	VisuallyHidden,
	RecipeMeta,
	TextContent,
	HygraphImage,
	Markdown,
	RecipeList,
	Expander,
} from '../components';
import type { Recipe, RecipeFragment } from '../types/Recipe';
import { Page } from './Page';

type Props = Recipe & {
	url: string;
	madeWithRecipes: RecipeFragment[];
	relatedRecipes: RecipeFragment[];
	// Recipe body as a children to allow rendering with client:* Astro
	// derectives for scaling on the client
	children: ReactNode;
};

export function RecipePage(props: Props) {
	const {
		url,
		images,
		keywords,
		title,
		description,
		madeWithRecipes,
		relatedRecipes,
		children,
	} = props;

	return (
		<Page url={url}>
			<Stack as="main" gap="xl">
				<Stack gap="l">
					<Stack gap="m">
						<Heading level={1}>{title}</Heading>
						<RecipeMeta {...props} />
					</Stack>

					{description && (
						<TextContent variant="intro">
							<Markdown text={description} forceBlock />
						</TextContent>
					)}
					{keywords.length > 0 && (
						<VisuallyHidden>Keywords: {keywords.join(', ')}</VisuallyHidden>
					)}
					{images.length > 0 && (
						<Expander>
							<HygraphImage
								handle={images[0].handle}
								alt=""
								width={1026}
								height={1026}
								intrinsicWidth={images[0].width}
								intrinsicHeight={images[0].height}
							/>
						</Expander>
					)}
					{children}
					{madeWithRecipes.length > 0 && (
						<Stack gap="m">
							<Heading level={2}>Recipes with {title.toLowerCase()}</Heading>
							<RecipeList recipes={madeWithRecipes} />
						</Stack>
					)}
				</Stack>
				{relatedRecipes.length > 0 && (
					<Stack gap="m">
						<Heading level={2}>More recipes like {title.toLowerCase()}</Heading>
						<RecipeList recipes={relatedRecipes} />
					</Stack>
				)}
			</Stack>
		</Page>
	);
}
