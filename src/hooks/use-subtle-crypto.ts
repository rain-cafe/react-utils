import { useEffect, useState } from 'react';
import { Algorithms, hash } from '../utils/subtle-crypto';

/**
 * Returns a hashed version of the value provided
 * @param algorithm the hashing algorithm to use
 * @param value the value to hash
 * @returns the hashed value
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest#browser_compatibility
 */
export function useSubtleCrypto(
  algorithm?: Algorithms,
  value?: string | null,
  defaultValue?: string
): string | undefined {
  const [hashedValue, setHashedValue] = useState<string>(defaultValue);

  useEffect(() => {
    hash(algorithm, value, defaultValue).then(setHashedValue);
  }, [algorithm, value]);

  return hashedValue;
}
