import {ReactNode} from 'react';

export interface CardTextProps {
	cardText: string;
	rows?: number;
	shortened?: boolean;
}

export interface CardInfoProps {
	title?: string;
	description?: string;
	avaSrc?: string;
	imgSrc?: string;
	imgSrcArray?: string[];
	shortened?: boolean;
	width?: number | string;
	imgHeight?: number | string;
	hasSubscribe?: boolean;
}

export interface CardActionsProps {
	likesCount?: number;
	commentsCount?: number;
	btnRedirectToProduct?: ReactNode;
	hasAddToArchive?: boolean;
}
