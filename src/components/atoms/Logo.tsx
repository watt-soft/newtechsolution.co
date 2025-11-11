import React from 'react';
import { Zap } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface LogoProps {
    size?: 'sm' | 'md' | 'lg';
    showText?: boolean;
    className?: string;
    navbar?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
    size = 'md',
    className = '',
    navbar = false
}) => {
    const { isDark } = useTheme();
    const sizes = {
        sm: { icon: 20, text: 'text-lg', navHeight: 'h-[24px] md:h-[28px]' },
        md: { icon: 30, text: 'text-xl', navHeight: 'h-[28px] md:h-[32px]' },
        lg: { icon: 35, text: 'text-2xl', navHeight: 'h-[30px] md:h-[38px]' }
    };

    // Responsive size for mobile in navbar
    const iconSize = navbar
        ? sizes[size].navHeight
        : `h-[${sizes[size].icon}px]`;

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <img
                src={`${import.meta.env.BASE_URL}logo/newtech-logo.png`}
                alt="New Tech Solution Logo"
                className={`${iconSize} w-auto object-cover scale-125 transition-all duration-200`}
                style={{
                    maxHeight: navbar ? undefined : sizes[size].icon,
                    objectPosition: 'center',
                    ...(navbar ? { transform: 'scale(1.1)', zoom: '1.3' } : { transform: 'scale(1.0)', zoom: '1' })
                }}
            />
        </div>
    );
};
