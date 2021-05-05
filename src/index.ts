export default function isNonNullable<T>(value: T): value is NonNullable<T> {
  return value != null
}
