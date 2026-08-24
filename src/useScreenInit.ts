import { useMemo } from 'react';
import { manifest } from './canvas.manifest';

export function useScreenInit(): Record<string, unknown> {
  return useMemo(() => {
    if (typeof window === 'undefined') return {};
    const screenId = new URLSearchParams(window.location.search).get('mp_screen');
    if (!screenId) return {};
    const screen = manifest.screens[screenId as keyof typeof manifest.screens];
    return screen && 'state' in screen ? screen.state : {};
  }, []);
}
