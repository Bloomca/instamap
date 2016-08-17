export function resolveLatLng({ lat, lng }) {
  return `${Math.round(lat)}:${Math.round(lng)}`;
}
