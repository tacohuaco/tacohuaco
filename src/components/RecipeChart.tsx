import type { ChartStep } from '../types/Recipe';
import { TextContent } from './TextContent';

type Props = {
	chart: readonly ChartStep[];
};

export function RecipeChart({ chart }: Props) {
	return (
		<TextContent>
			<table>
				<thead>
					<tr>
						<th>Type</th>
						<th>Subtype</th>
						<th>Value</th>
					</tr>
				</thead>
				<tbody>
					{chart.map((step, index) => {
						return (
							<tr key={index}>
								<td>{step.type}</td>
								<td>{step.subtype}</td>
								<td>{step.value}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</TextContent>
	);
}
