import { ShopModelRaw } from '../types';
import { Shop } from '../../src/types/Shop';
import { mapMaybeNumber } from './mapMaybeNumber';
import { mapMaybeString } from './mapMaybeString';

export function mapShopModel(shops: ShopModelRaw[]): Shop[] {
	return shops.map(
		({
			address,
			city,
			country,
			description,
			name,
			neighbourhood,
			url,
			zip,
		}) => ({
			name,
			address: mapMaybeString(address),
			city: mapMaybeString(city),
			country: mapMaybeString(country),
			description: mapMaybeString(description),
			neighbourhood: mapMaybeString(neighbourhood),
			url: mapMaybeString(url),
			zip: mapMaybeNumber(zip),
		})
	);
}
