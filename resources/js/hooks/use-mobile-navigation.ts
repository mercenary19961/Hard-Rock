import { useState } from 'react';

export function useMobileNavigation() {
    const [isOpen, setIsOpen] = useState(false);

    return { isOpen, setIsOpen };
}
