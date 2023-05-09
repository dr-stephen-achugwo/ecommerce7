---
to: "<%= isHook ? `src/lib/hooks/${filePath}/${fileName}.ts` : null %>"
---
import { useCallback, useMemo } from 'react'

type <%= fileName[0].toUpperCase() + fileName.slice(1) %> = {

}

export const <%= fileName %> = (): <%= fileName[0].toUpperCase() + fileName.slice(1) %> => {
  const = useMemo(() => (
    
  ), [])

  const = useCallback((): void => {
    
  }, [])

  return {
    
  }
} 
