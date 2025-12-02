export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    avatar?: string;
}

export interface NavItem {
    title: string;
    href?: string;
    icon?: any;
    items?: NavItem[];
}

export interface BreadcrumbItem {
    title: string;
    href?: string;
}

export interface SharedData {
    auth: {
        user: User;
    };
    ziggy?: any;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & SharedData;
