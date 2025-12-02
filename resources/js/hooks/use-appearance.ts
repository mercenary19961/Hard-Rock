import { useState, useEffect } from 'react';

export type Appearance = 'light' | 'dark' | 'system';

export function useAppearance() {
    const [appearance, setAppearance] = useState<Appearance>('system');

    useEffect(() => {
        const stored = localStorage.getItem('appearance') as Appearance;
        if (stored) setAppearance(stored);
    }, []);

    const updateAppearance = (value: Appearance) => {
        setAppearance(value);
        localStorage.setItem('appearance', value);
    };

    return { appearance, setAppearance: updateAppearance, updateAppearance };
}
