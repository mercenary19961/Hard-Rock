import { useState } from 'react';

export const OTP_MAX_LENGTH = 6;

export function useTwoFactorAuth() {
    const [enabled, setEnabled] = useState(false);
    const [qrCode, setQrCode] = useState<string | null>(null);
    const [recoveryCodes, setRecoveryCodes] = useState<string[]>([]);

    return { enabled, setEnabled, qrCode, setQrCode, recoveryCodes, setRecoveryCodes };
}
