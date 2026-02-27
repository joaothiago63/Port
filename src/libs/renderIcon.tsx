import React from 'react';
import * as Lucide from 'lucide-react';

interface RenderIconProps {
    iconName: keyof typeof Lucide;
    className?: string;
    size?: number | string;
}

function RenderIcon({ iconName, className, size }: RenderIconProps) {
    const IconComponent = Lucide[iconName] as React.ElementType;
    return IconComponent ? <IconComponent size={size} className={className} /> : null;
}

export default RenderIcon;