import { Partner } from '../_types/types';

export function fetchPartnerData(): Promise<Partner[]>  {
    return fetch('https://api.dynamx.fr/partner', {
        cache: 'no-cache',
    })
    .then(response => response.json())
    .then(data => data.message)
    .catch(error => console.error(error));
}