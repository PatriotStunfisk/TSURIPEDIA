import type {Coordinates} from './spot-distance';
export function spotCoordinateSearch(spot:Coordinates){return `https://www.google.com/maps/search/?api=1&query=${spot.lat},${spot.lng}`;}
